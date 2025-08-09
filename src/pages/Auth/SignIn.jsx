// ================================
// Importing required libraries
// ================================
import { Link } from "react-router";
import { motion } from "motion/react";
import Cookie from "js-cookie";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";

// ================================
// Importing Hooks
// ================================
import { useGoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useState } from "react";

// ================================
// Importing Components
// ================================
import Input from "../../components/Input";
import { ButtonBasc } from "../../components/Buttons";

// ================================
// Importing Images
// ================================
import { bgSignIn, GoogleLogo } from "../../import/Images";

// ================================
// Importing Icons
// ================================
import { FiUser } from "react-icons/fi";
import { TbLockPassword } from "react-icons/tb";

// ================================
// Importing Actions Redux
// ================================
import { signIn } from "../../Redux/Slice/Auth";

// ================================
// Importing validators
// ================================
import { validationSignIn } from "../../validators/Auth";

// ================================
// Animation settings
// ================================
import { animateOpacity, transitionSettings } from "../../utils/animations";

// ================================
// SingIn Component
// ================================
function SignIn() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm({
        resolver: zodResolver(validationSignIn),
    });

    const dispath = useDispatch();

    // ================================
    // Function to sign in using Google account
    // ================================
    const [errorGoolgeSignIn, setErrorGoolgeSignIn] = useState();
    const signInWithGoogle = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            try {
                // Fetch user info from Google API using the access token
                const userInfo = await axios
                    .get("https://www.googleapis.com/oauth2/v3/userinfo", {
                        headers: {
                            Authorization: `Bearer ${tokenResponse.access_token}`,
                        },
                    })
                    .then((response) => response.data);

                // Prepare user info to store
                const storageUserInfo = {
                    authWith: "google",
                    firstName: userInfo.given_name,
                    familyName: userInfo.family_name,
                    fullName: userInfo.name,
                    avatar: userInfo.picture,
                };

                // Store user info in cookies for 30 days
                Cookie.set("userInfo", JSON.stringify(storageUserInfo), {
                    expires: 30,
                    path: "/",
                });

                // Dispatch signIn action to update app state
                dispath(signIn(storageUserInfo));
            } catch {
                // Set error message if sign-in fails
                setErrorGoolgeSignIn("هناك مشكلة في عملية التسجيل.");
            }
        },
    });

    // ================================
    // Handle form submission for user login
    // ================================
    const onSubmit = (data) => {
        const handleSignIn = async () => {
            try {
                // Send login data to the authentication endpoint
                const response = await axios.post(
                    "https://dummyjson.com/auth/login",
                    {
                        username: data.userName,
                        password: data.password,
                        expiresInMins: 43200,
                    },
                    { headers: { "Content-Type": "application/json" } }
                );

                // Prepare user info from the response data
                const storageUserInfo = {
                    authWith: "codevision",
                    firstName: response.data.firstName,
                    familyName: response.data.lastName,
                    fullName: `${response.data.firstName} ${response.data.lastName}`,
                    avatar: response.data.image,
                };

                // Store user info in cookies for 30 days
                Cookie.set("userInfo", JSON.stringify(storageUserInfo), {
                    expires: 30,
                    path: "/",
                });

                // Dispatch signIn action to update the app state
                dispath(signIn(storageUserInfo));
            } catch {
                // Set manual error if login fails
                setError("invalid", {
                    type: "manual",
                    message: "بيانات اعتماد غير صالحة",
                });
            }
        };
        handleSignIn();
    };

    return (
        <motion.div
            initial={"hidden"}
            whileInView={"show"}
            variants={animateOpacity}
            transition={transitionSettings}
            className="w-full h-screen overflow-hidden grid xl:grid-cols-2 gap-x-5 items-center"
        >
            <div className="px-5 space-y-10 w-full md:w-[650px] mx-auto lg:bg-white rounded-xl p-5 lg:dark:bg-gray-900">
                {/* title content sign in */}
                <div className="space-y-5">
                    <Link
                        to={"/"}
                        className="block text-center text-5xl dark:text-white text-gray-800 font-bold "
                    >
                        كودفيجن
                    </Link>

                    <h2 className="text-center text-xl text-white">
                        مرحبا بعودتك!
                    </h2>
                </div>

                {/* sign in with google */}
                <div
                    onClick={() => signInWithGoogle()}
                    className="bg-gray-200 dark:bg-white px-5 py-2 rounded-md h-[50px] overflow-hidden flex justify-between items-center cursor-pointer"
                >
                    <div className="">
                        <span className="text-black font-semibold">
                            تسجيل الدخول بستخدام حساب Google
                        </span>
                    </div>

                    <div className="h-full w-fit ">
                        <img
                            className="w-full h-full"
                            src={GoogleLogo}
                            alt=""
                        />
                    </div>
                </div>
                {/* error sign in with google */}
                {errorGoolgeSignIn && (
                    <span className="block text-red-500">
                        {errorGoolgeSignIn}
                    </span>
                )}

                <span className="block relative text-center text-lg text-gray-400 dark:text-gray-600 after:absolute after:w-[45%] after:h-[2px] after:bg-gray-400 dark:after:bg-gray-600 after:top-1/2 after:-translate-y-1/2 after:left-0 before:absolute before:w-[45%] before:h-[2px] before:bg-gray-400 dark:before:bg-gray-600 before:top-1/2 before:-translate-y-1/2 before:right-0 ">
                    or
                </span>

                {/* from sign in with codevision */}
                <form className=" space-y-5" onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        label="أسم المستخدم"
                        name={"userName"}
                        placeholder="أدخل اسم المستخدم"
                        defaultValue={"emilys"}
                        register={register("userName")}
                        icon={<FiUser fontSize={25} />}
                        error={errors.userName && true}
                        errorMessage={errors.userName?.message}
                    />

                    <Input
                        type="password"
                        label="كلمة المرور"
                        name={"password"}
                        placeholder="أدخل كلمة المرور"
                        defaultValue={"emilyspass"}
                        register={register("password")}
                        icon={<TbLockPassword fontSize={25} />}
                        error={errors.password && true}
                        errorMessage={errors.password?.message}
                    />
                    {errors.invalid && (
                        <span className="block text-red-500">
                            {errors.invalid?.message}
                        </span>
                    )}

                    {errorGoolgeSignIn && (
                        <span className="block text-red-500">
                            {errorGoolgeSignIn}
                        </span>
                    )}

                    <ButtonBasc
                        title="تسجيل الدخول"
                        className={"w-full block"}
                    />

                    <p className="text-gray-700 text-lg dark:text-gray-200">
                        إذا لم يكن لديك حساب، يمكنك{" "}
                        <Link
                            to={"/signup"}
                            className=" underline font-semibold inline-block"
                        >
                            أنشاء حساب ألان
                        </Link>
                    </p>
                </form>
            </div>

            <div
                className="relative hidden xl:block w-full h-full bg-center bg-cover bg-no-repea overflow-hidden"
                style={{ backgroundImage: `url('${bgSignIn}')` }}
            ></div>
        </motion.div>
    );
}

export default SignIn;
