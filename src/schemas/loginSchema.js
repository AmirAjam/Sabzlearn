import * as yup from "yup";
const loginSchema = yup.object().shape({
    email: yup
        .string()
        .required(" وارد کردن ایمیل الزامی است"),
    password: yup
        .string()
        .required(" وارد کردن رمز عبور الزامی است")
});

export default loginSchema;
