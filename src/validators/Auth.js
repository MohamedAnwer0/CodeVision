import { z } from "zod";

export const validationSignIn = z.object({
    userName: z.string().min(1, { message: "أسم المستخدم مطلوب" }),
    password: z.string().min(1, { message: "كلمة المرور مطلوب" }),
});

export const validationSignUp = z.object({
    firstName: z
        .string()
        .min(1, { message: "الأسم الاول مطلوب" })
        .min(3, { message: "الأسم الأول يجب ان لا يقل عن 3 احرف" }),
    lastName: z
        .string()
        .min(1, { message: "اسم العائله مطلوب" })
        .min(3, { message: "اسم العائله يجب ان لا يقل عن 3 احرف" }),
    email: z
        .string()
        .min(1, { message: "البريد الالكتروني مطلوب" })
        .email({ message: "الرجاء إدخال بريد إلكتروني صالح" }),
    userName: z.string().min(1, { message: "أسم المستخدم مطلوب" }),
    password: z
        .string()
        .min(1, { message: "كلمة المرور مطلوب" })
        .min(8, { message: "كلمة المرور يجب ان لا يقل عن 8 احر" }),
});
