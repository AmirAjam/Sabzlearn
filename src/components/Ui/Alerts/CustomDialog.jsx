import * as React from "react";
import { useForm } from "react-hook-form";
import { Dialog } from "radix-ui";
import AdminButton from "@/components/Admin/Ui/AdminButton";
import icons from "@/icons";
import PrimaryButton from "../Buttons/PrimaryButton";
import { changeCategory } from "@/api/categoryApi";

const CustomDialog = ({ categoryId,refreshCategories,showSuccessAlert }) => {
  const [open, setOpen] = React.useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    changeCategory(data, categoryId)
      .then(res => {
        if (res.status === 200) {
          reset();
          setOpen(false);
          refreshCategories()
          showSuccessAlert("دسته بندی با موفقیت ویرایش شد.")
        }
      })

  };

  return (
    <>
      <AdminButton text="ویرایش" danger={false} onClick={() => setOpen(true)} />

      <Dialog.Root open={open} onOpenChange={(o) => {
        setOpen(o);
        if (!o) reset();
      }}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/40 dark:bg-black/70" />
          <Dialog.Content className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-darker px-12 py-5">
            <Dialog.Title className="font-bold text-lg text-center mb-6">
              ویرایش کتگوری
            </Dialog.Title>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block mb-1" htmlFor="name">
                  نام کتگوری
                </label>
                <input
                  id="title"
                  type="text"
                  {...register("title", { required: "این فیلد الزامی است." })}
                  className="w-full rounded border border-gray-500 px-3 py-2 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-primary mt-3"
                />
                {errors.title && (
                  <p className="text-red-400/80 text-sm mt-1">
                    {errors.title.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block mb-1" htmlFor="short-name">
                  نام کوتاه کتگوری
                </label>
                <input
                  id="name"
                  type="text"
                  {...register("name", { required: "این فیلد الزامی است." })}
                  className="w-full rounded border border-gray-500 px-3 py-2 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-primary mt-3"
                />
                {errors.name && (
                  <p className="text-red-400/80 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="text-center w-48 mx-auto">
                <PrimaryButton text="ذخیره تغییرات" submit={true} />
              </div>
            </form>

            <div className="absolute right-2.5 top-5 cursor-pointer" onClick={() => setOpen(false)}>
              <icons.Close className="text-2xl hover:text-red-500/80 duration-200" />
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};

export default CustomDialog;
