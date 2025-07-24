import * as yup from "yup";
const mobileSchema = yup.object().shape({
    phone: yup
        .string()
        .required(" وارد کردن شماره موبایل الزامی است")
        .matches(/^09\d{9}$/, "شماره موبایل وارد شده معتبر نمی باشد"),
});

export default mobileSchema