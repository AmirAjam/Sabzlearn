import * as yup from "yup";
const signupSchema = yup.object().shape({
    username: yup.string().required(" وارد کردن نام کاربری الزامی است ")
        .matches(/^[a-zA-Z0-9_]+$/, "نام کاربری باید فقط شامل حروف انگلیسی، عدد یا _ باشد"),
    phone: yup
        .string()
        .required(" وارد کردن شماره موبایل الزامی است")
        .matches(/^09\d{9}$/, "شماره موبایل وارد شده معتبر نمی باشد"),
    email: yup
        .string()
        .required(" وارد کردن ایمیل الزامی است")
        .email("ایمیل وارد شده معتبر نمی باشد"),
    password: yup
        .string()
        .required(" وارد کردن رمز عبور الزامی است")
        .min(8, "رمز عبور باید حداقل 8 کاراکتر باشد"),
});

export default signupSchema;
