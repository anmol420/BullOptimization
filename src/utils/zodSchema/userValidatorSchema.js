import { z } from "zod";

const registerUserSchema = z.object({
    email: z.string().email({ message: "Invalid Email Format" }),
    username: z.string().min(5, { message: "Minimum Username Length Should Be 5 Characters." }),
    password: z.string().min(5, { message: "Minimum Password Length Should Be 5 Characters." }),
});

const loginUserSchema = z.object({
    username: z.string().min(5, { message: "Minimum Username Length Should Be 5 Characters." }),
    password: z.string().min(5, { message: "Minimum Password Length Should Be 5 Characters." }),
});

const verifyCodeSchema = z.object({
    email: z.string().email({ message: "Invalid Email Format" }),
    code: z.string().min(6, { message: "Invalid Verification Code." }),
});

const changeUsernameSchema = z.object({
    newUsername: z.string().min(5, { message: "Minimum Username Length Should Be 5 Characters." }),
});

const changePasswordSchema = z.object({
    oldPassword: z.string().min(5, { message: "Minimum Password Length Should Be 5 Characters." }),
    newPassword: z.string().min(5, { message: "Minimum Password Length Should Be 5 Characters." }),
});

const addDetailsSchema = z.object({
    name: z.string().min(5, { message: "Minimum Name Length Should Be 5 Characters." }).optional(),
    dob: z.string().optional(),
}).refine(
    (data) => data.name || data.dob,
    { message: "Atleast One Field Is Required." }
);

const changeEmailSchema = z.object({
    newEmail: z.string().email({ message: "Invalid Email Format" }),
});

const verifyNewEmailSchema = z.object({
    newEmail: z.string().email({ message: "Invalid Email Format" }),
    code: z.string().min(6, { message: "Invalid Verification Code." }),
});

const forgotUsernameSchema = z.object({
    email: z.string().email({ message: "Invalid Email Format" }),
});

const forgotPasswordSchema = z.object({
    email: z.string().email({ message: "Invalid Email Format" }),
    password: z.string().min(5, { message: "Minimum Username Length Should Be 5 Characters." }),
});

const forgotPasswordVerificationEmailSchema = z.object({
    email: z.string().email({ message: "Invalid Email Format" }),
});

const forgotPasswordVerificationCodeSchema = z.object({
    email: z.string().email({ message: "Invalid Email Format" }),
    code: z.string().min(6, { message: "Invalid Verification Code." }),
});

export {
    registerUserSchema,
    loginUserSchema,
    verifyCodeSchema,
    changeUsernameSchema,
    changePasswordSchema,
    addDetailsSchema,
    changeEmailSchema,
    verifyNewEmailSchema,
    forgotUsernameSchema,
    forgotPasswordSchema,
    forgotPasswordVerificationEmailSchema,
    forgotPasswordVerificationCodeSchema,
};