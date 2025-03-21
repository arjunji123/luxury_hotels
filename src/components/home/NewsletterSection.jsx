import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import HeadingWithoutSwiper from "../headingWithoutSwiper";
import { useForm } from "react-hook-form";
import useRequest from "@component/hooks/UseRequest";
import { apis } from "@component/apiendpoints/api";

const NewsletterSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { request, response, loading } = useRequest(true);

  const handleSubmitNewsLatter = (data) => {
    request("POST", apis.SUBSCRIBE_NEWSLATTER, data);
  };

  useEffect(() => {
    if (response) {
      console.log("Response:", response);
      reset(); // Reset the form only on successful response
    }
  }, [response, reset]);

  useEffect(() => {
    AOS.init({
      duration: 2500, // Animation duration (in ms)
      easing: "ease-in-out", // Easing for the animation
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <>
      <HeadingWithoutSwiper name={"SUBSCRIBE NEWSLETTER"} />
      {/* <h3 className="text-center">SUBSCRIBE NEWSLETTER</h3>    */}
      <div className="w-full relative h-[480px] bg-black mb-[2.5rem]">
        <div
          style={{
            backgroundImage: 'url("/new/assets/img/transparent-bg.png")',
            backgroundSize: "contain",
            backgroundPosition: "center center",
            padding: "100px 0",
            backgroundRepeat: "no-repeat",
            top: "0px",
            left: "50%",
            transform: "translate(-50%)",
          }}
          className="container absolute flex justify-center my-[2.5rem]"
        >
          <div className="md:w-1/3 mt-[-50px] md:mt-0 md:ml-8 md:text-left">
            <h3 className="text-2xl font-bold">SIGN UP For Our NEWSLETTER</h3>
            <p className="mt-3 text-capitalize">
              {/* SIGN UP NOW TO RECEIVE HOT SPECIAL OFFERS AND INFORMATION ABOUT THE
                BEST TOURS! */}
              To Recieve the latest news, exclusive deals, and a chence to win a
              free holiday while discovering the best luxury hotels and top
              destination !
            </p>
            <form
              className="mt-6"
              onSubmit={handleSubmit(handleSubmitNewsLatter)}
            >
              <div className="border-b pb-3 d-flex">
                <input
                  {...register("name", { required: "Name is required" })}
                  type="text"
                  placeholder="WRITE YOUR NAME"
                  className="w-full bg-transparent text-black placeholder:text-black focus:outline-none"
                />
                {errors?.name?.message && (
                  <span className="error_message">{errors.name.message}</span>
                )}
                <input
                  {...register("email", { required: "Email is required" })}
                  type="email"
                  placeholder="WRITE YOUR EMAIL"
                  className="w-full bg-transparent text-black placeholder:text-black focus:outline-none"
                />
                {errors?.email?.message && (
                  <span className="error_message">{errors.email.message}</span>
                )}
                <button
                  type="submit"
                  className="flex-grow-0 text-[16px] px-2 m-1 hover:bg-[#121212]-700 h-8 w-48 rounded-md bg-[#D2122E] grid place-items-center focus:outline-none"
                  disabled={loading}
                  style={{
                    background:
                      "linear-gradient(to right, rgb(204, 164, 89), rgb(230, 205, 113), rgb(204, 163, 86))",
                  }}
                >
                  {loading ? "Loading..." : "SUBSCRIBE"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsletterSection;
