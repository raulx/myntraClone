import { useForm } from "react-hook-form";
import { useLoginAdminMutation } from "../../store";
import { useNavigate } from "react-router-dom";

function AdminLoginPage() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const Navigate = useNavigate();
  const [loginAdmin] = useLoginAdminMutation();

  const onSubmit = async (data) => {
    try {
      await loginAdmin({ id: data.id, password: data.password });
      Navigate("/page/admin");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="userid"
          className="border-2 rounded p-2"
          {...register("id", { required: true })}
        />

        {/* include validation with required or other standard HTML validation rules */}
        <input
          placeholder="password"
          type="password"
          className=" border-2 rounded p-2"
          {...register("password", { required: true })}
        />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input className="bg-black rounded p-2 text-white" type="submit" />
      </form>
    </div>
  );
}

export default AdminLoginPage;