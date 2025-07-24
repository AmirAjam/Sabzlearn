import * as yup from "yup";
const signupSchema = yup.object().shape({
    username: yup.string().required(" وارد کردن نام کاربری الزامی است ")
        .matches(/^[a-zA-Z0-9_]+$/, "نام کاربری باید فقط شامل حروف انگلیسی، عدد یا _ باشد"),
    phone: yup
        .string()
        .matches(/^09\d{9}$/, "شماره موبایل معتبر نیست")
        .required(" وارد کردن شماره موبایل الزامی است"),
    email: yup
        .string()
        .email("ایمیل معتبر نیست")
        .required(" وارد کردن ایمیل الزامی است"),
    password: yup
        .string()
        .required(" وارد کردن رمز عبور الزامی است")
        .min(6, "رمز عبور باید حداقل ۶ کاراکتر باشد"),
});

export default signupSchema;
