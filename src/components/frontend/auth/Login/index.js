import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ImFacebook } from "react-icons/im";
import { HiOutlineUserAdd } from "react-icons/hi";
import { AiOutlineLock } from "react-icons/ai";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FiArrowRightCircle } from "react-icons/fi";
import axios from "axios";
import swal from "sweetalert";
import { TailSpin } from "react-loader-spinner";
import validationScheme from "./validations";

const Login = () => {
  const navigate = useNavigate();

  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
    error_list: [],
    isloading: false,
    validationScheme,
  });

  const handleInput = (e) => {
    e.persist();
    setLoginInput({ ...loginInput, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLoginInput({ ...loginInput, isLoading: true });
    const data = {
      email: loginInput.email,
      password: loginInput.password,
    };

    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios.post("/api/login", data).then((res) => {
        if (res.data.success) {
          localStorage.setItem("auth_token", res.data.token);
          localStorage.setItem("auth_name", res.data.username);
          swal("Success", res.data.message, "success");
          setTimeout(() => {
            navigate("/");
          }, "500");
        } else {
          swal("Error", res.data.message, "error");
          setLoginInput({ ...loginInput, isLoading: false, error_list: [] });
        }
      });
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen mt-20 bg-gray-100 px-4">
      <div className="inline-flex">
        <div className="inline-flex flex-row items-center">
          <span className="leading-2 text-gray-800 text-3xl font-bold ml-1 uppercase">
            Merhaba,
          </span>
        </div>
      </div>

      <div className="text-sm sm:text-base text-gray-600 my-4">
        Shopper’a giriş yap veya hesap oluştur, satış yapmaya başla!
      </div>

      <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
        <button className="relative mt-6 border rounded-md py-2 text-sm text-gray-800 bg-gray-100 hover:bg-gray-200">
          <span className="absolute left-0 top-0 flex items-center justify-center h-full w-10 text-blue-500">
            <ImFacebook />
          </span>
          <span>Login with Facebook</span>
        </button>
        <div className="relative mt-10 h-px bg-gray-300">
          <div className="absolute left-0 top-0 flex justify-center w-full -mt-2">
            <span className="bg-white px-4 text-xs text-gray-500 uppercase">
              VEYA E-POSTA İLE GİRİŞ YAPIN
            </span>
          </div>
        </div>
        <div className="mt-10">
          <form onSubmit={handleLogin}>
            <div className="flex flex-col mb-6">
              <label
                htmlFor="email"
                className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
              >
                E-Posta Adresi:
              </label>
              <div className="relative">
                <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                  <MdOutlineAlternateEmail size={20} />
                </div>

                <input
                  id="email"
                  type="email"
                  name="email"
                  className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-indigo-400"
                  placeholder="E-Posta Adresi"
                  onChange={handleInput}
                  value={loginInput.email}
                />
              </div>
              <span className="text-red-500 text-sm m-2">
                {loginInput.error_list.email}
              </span>
            </div>

            <div className="flex flex-col mb-6">
              <label
                htmlFor="password"
                className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
              >
                Şifre:
              </label>
              <div className="relative">
                <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                  <span>
                    <AiOutlineLock size={20} />
                  </span>
                </div>

                <input
                  id="password"
                  type="password"
                  name="password"
                  className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-indigo-400"
                  placeholder="Şifre"
                  onChange={handleInput}
                  value={loginInput.password}
                />
              </div>
              <span className="text-red-500 text-sm m-2">
                {loginInput.error_list.password}
              </span>
            </div>

            <div className="flex items-center mb-6 -mt-4">
              <div className="flex ml-auto">
                <Link
                  to="/forget"
                  className="inline-flex text-xs sm:text-sm text-indigo-500 hover:text-indigo-700"
                >
                  Şifremi Unuttum
                </Link>
              </div>
            </div>

            <div className="flex w-full">
              <button
                type="submit"
                className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-indigo-600 hover:bg-indigo-700 rounded py-2 w-full transition duration-150 ease-in"
              >
                <span className="mr-2 uppercase">GİRİŞ Yap</span>
                <span className="font-bold">
                  <FiArrowRightCircle size={20} />
                </span>
              </button>
            </div>
            {loginInput.isLoading && (
              <div className="flex justify-center pt-2">
                <div>
                  <span>
                    <TailSpin
                      height="40"
                      width="40"
                      color="#6D7AF5"
                      ariaLabel="tail-spin-loading"
                      radius="1"
                      wrapperStyle={{}}
                      wrapperClass=""
                      visible={true}
                    />
                  </span>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>

      <div className="flex justify-center items-center mt-6">
        <Link
          to="/register"
          //target="_blank"
          className="inline-flex items-center font-bold text-indigo-500 hover:text-indigo-700 text-sm text-center"
        >
          <span>
            <HiOutlineUserAdd size={20} />
          </span>
          <span className="ml-2">Hesabınız yok mu?</span>
        </Link>
      </div>
    </div>
  );
};

export default Login;
