// ================================
// Importing required libraries
// ================================
import PropTypes from "prop-types";

// ================================
// Importing Hooks
// ================================
import { useState } from "react";

// ================================
// Importing Icons
// ================================
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

// ================================
// Input  Component
// ================================
function Input({
    name,
    label,
    type = "text",
    defaultValue,
    placeholder,
    register,
    icon,
    error,
    errorMessage,
}) {
    const [typeInput, setTypeInput] = useState(type);

    return (
        <div className="space-y-2">
            <label
                htmlFor={name}
                className=" font-medium select-none dark:text-white text-gray-700 block w-fit"
            >
                {label}
            </label>

            <div className="relative ">
                <input
                    {...register}
                    defaultValue={defaultValue}
                    id={name}
                    type={typeInput}
                    placeholder={placeholder}
                    className={`w-full h-[50px] bg-transparent rounded-lg border outline-none   transition-colors px-5 dark:placeholder:text-gray-400 placeholder:text-gray-700 dark:text-white text-gray-700 ${
                        icon && "pr-10"
                    } ${
                        error
                            ? "border-red-400 focus:border-red-500"
                            : "border-gray-400 focus:border-blue-500"
                    }`}
                />

                {icon && (
                    <div className="absolute text-gray-700 dark:text-gray-300 -translate-y-1/2 top-1/2 right-3">
                        {icon}
                    </div>
                )}

                {type == "password" && (
                    <div className="absolute text-gray-700 dark:text-gray-300 -translate-y-1/2 cursor-pointer top-1/2 left-3">
                        {typeInput == "password" ? (
                            <FaRegEyeSlash
                                onClick={() => setTypeInput("text")}
                                fontSize={20}
                            />
                        ) : (
                            <FaRegEye
                                onClick={() => setTypeInput("password")}
                                fontSize={20}
                            />
                        )}
                    </div>
                )}
            </div>

            {errorMessage && (
                <span className="block text-red-500">{errorMessage}</span>
            )}
        </div>
    );
}

// ================================
//  PropTypes Validation
// ================================
Input.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    type: PropTypes.string,
    defaultValue: PropTypes.string,
    placeholder: PropTypes.string,
    register: PropTypes.object,
    icon: PropTypes.object,
    error: PropTypes.bool,
    errorMessage: PropTypes.string,
};

export default Input;
