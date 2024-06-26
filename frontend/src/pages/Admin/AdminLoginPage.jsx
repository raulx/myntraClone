import { useForm } from "react-hook-form";
import { useLoginAdminMutation } from "../../store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import RingLoader from "../../components/RingLoader";

import { setAdminAuthenticated } from "../../store";

function AdminLoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [errorMessage, setErrorMessage] = useState("");
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginAdmin, results] = useLoginAdminMutation();
  const isAlreadyAuthenticated = localStorage.getItem("_ad");

  const onSubmit = async (data) => {
    try {
      const res = await loginAdmin({ id: data.id, password: data.password });

      if (res.data?.status === 200) {
        dispatch(setAdminAuthenticated(res.data.id));
        Navigate("/page/admin/products");
      } else {
        setErrorMessage(res.error.data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (isAlreadyAuthenticated) {
      Navigate("/page/admin/products");
    }
  }, [isAlreadyAuthenticated, Navigate]);

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="userid"
          className="border-2 rounded p-2"
          {...register("id", { required: true })}
        />
        {errors.id && (
          <span className="text-red-500">This field is required</span>
        )}
        <input
          placeholder="password"
          type="password"
          className=" border-2 rounded p-2"
          {...register("password", { required: true })}
        />
        {errors.password && (
          <span className="text-red-500">This field is required</span>
        )}

        <p className="text-red-500 font-bold">{errorMessage}</p>
        <input className="bg-black rounded p-2 text-white" type="submit" />
      </form>
      {results.isLoading ? <RingLoader /> : null}
    </div>
  );
}

export default AdminLoginPage;
