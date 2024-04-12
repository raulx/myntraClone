import { useForm } from "react-hook-form";
import { useLoginAdminMutation } from "../../store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { setAdminAuthentication } from "../../store";

function AdminLoginPage() {
  const { register, handleSubmit } = useForm();
  const [errorMessage, setErrorMessage] = useState("");
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginAdmin] = useLoginAdminMutation();

  const onSubmit = async (data) => {
    const res = await loginAdmin({ id: data.id, password: data.password });
    if (res.data.status === "fullfilled") {
      dispatch(setAdminAuthentication(true));
      Navigate("/page/admin");
    } else {
      setErrorMessage(res.data.message);
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

        <input
          placeholder="password"
          type="password"
          className=" border-2 rounded p-2"
          {...register("password", { required: true })}
        />
        <p className="text-red-500 font-bold">{errorMessage}</p>
        <input className="bg-black rounded p-2 text-white" type="submit" />
      </form>
    </div>
  );
}

export default AdminLoginPage;
