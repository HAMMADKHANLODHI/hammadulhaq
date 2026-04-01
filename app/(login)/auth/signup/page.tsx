"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";

export const LoginSchema = z.object({
  username: z.string()
    .min(3, "Identify yourself (min 3 chars)")
    // Updated Regex: Allows letters, numbers, dots, underscores, slashes, and backslashes
    // We use \\ to represent a single backslash in a string
    .regex(/^[a-zA-Z0-9._/\\ ]+$/, "Use authorized characters only (._/\\)"),
  
  password: z.string()
    .min(8, "Security protocol requires 8+ characters")
    .regex(/[A-Z]/, "Requires one uppercase letter")
    .regex(/[a-z]/, "Requires one lowercase letter")
    .regex(/[0-9]/, "Requires one number")
    // Updated Special Character Regex: Includes . / \ and your previous set
    .regex(/[@$!%*?&./\\]/, "Include a special character (@$!%*?&./\\)"),


    confirmpassword: z.string()
    .min(8, "Security protocol requires 8+ characters")
}).refine((data) => data.password === data.confirmpassword, {
  message: "Access Keys do not match",
  path: ["confirmpassword"], // This attaches the error to the confirm field

});
// Extract Type from Schema
type LoginFormValues = z.infer<typeof LoginSchema>;

const signup = () => {
  const [iseyeOpen, setIsEyeOpen] = useState(false);

  // --- 2. CONNECT ZOD TO REACT HOOK FORM ---
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm<LoginFormValues>({
    resolver: zodResolver(LoginSchema)
  });
const[data,setData]=useState<LoginFormValues>();
  const onSubmit: SubmitHandler<LoginFormValues> =async (data) => {
    console.log("Authenticated Data:", data);
    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        
      });
      if(!response.ok){
        const errorData = await response.json();
        console.error("Signup Failed:", errorData);
      }else{
        const successData = await response.json();
        setData(successData);
        console.log("Signup Successful:", successData);
      }

  }
  catch (error) {
    console.error("Signup Error:", error);
  }
  };


  return (
    <div className="w-full flex justify-center items-center min-h-screen bg-amber-600 font-sans">
      <div className="w-[90%] max-w-[450px] h-[35rem] rounded-[2rem] bg-white flex flex-col items-center p-8 shadow-2xl">
        
        {/* Heading */}
        <div className="text-center mt-6 mb-8">
          <h1 className="text-3xl text-neutral-800 font-black tracking-tighter uppercase leading-none">
  GENESIS OF LEGACY
</h1>
<p className="text-[10px] text-neutral-400 tracking-[0.3em] mt-3 uppercase font-medium opacity-80 italic">
  Hammad Logic <span className="mx-2 text-amber-600 font-normal">|</span> Your Infrastructure
</p>
        </div>

        <form className="flex flex-col w-full flex-grow" onSubmit={handleSubmit(onSubmit)}>
          
          {/* Username Input */}
          <div className="w-full h-16 bg-neutral-100 rounded-2xl flex items-center px-4 mb-2">
            <input
              className="w-full bg-transparent outline-none text-neutral-700 text-lg placeholder:text-neutral-400"
              placeholder="Enter Identity"
              {...register("username")}
            />
          </div>
          {errors.username && <p className="text-[10px] text-red-500 ml-4 mb-4 uppercase font-bold">{errors.username.message}</p>}

          {/* Password Input Group */}
          <div className="w-full h-16 bg-neutral-100 rounded-2xl flex items-center px-4 mt-4 mb-2 relative">
            <input
              className="w-full bg-transparent outline-none text-neutral-700 text-lg placeholder:text-neutral-400"
              type={iseyeOpen ? "text" : "password"}
              placeholder="Enter Access Key"
              {...register("password")}
            />
            <button 
              type="button"
              onClick={() => setIsEyeOpen(!iseyeOpen)}
              className="ml-2 hover:scale-110 transition-transform"
            >
              <Image
                src={iseyeOpen ? "/eye-open.svg" : "/eye-close.svg"}
                width={22}
                height={22}
                alt="toggle visibility"
              />
            </button>
          </div>
          {errors.password && <p className="text-[10px] text-red-500 ml-4 mb-4 uppercase font-bold leading-tight">{errors.password.message}</p>}


          <div className="w-full h-16 bg-neutral-100 rounded-2xl flex items-center px-4 mt-4 mb-2 relative">
            <input
              className="w-full bg-transparent outline-none text-neutral-700 text-lg placeholder:text-neutral-400"
              type={iseyeOpen ? "text" : "password"}
              placeholder="Enter Access Key"
              {...register("confirmpassword")}
            />
            <button 
              type="button"
              onClick={() => setIsEyeOpen(!iseyeOpen)}
              className="ml-2 hover:scale-110 transition-transform"
            >
              <Image
                src={iseyeOpen ? "/eye-open.svg" : "/eye-close.svg"}
                width={22}
                height={22}
                alt="toggle visibility"
              />
            </button>
          </div>
          {errors.confirmpassword && <p className="text-[10px] text-red-500 ml-4 mb-4 uppercase font-bold leading-tight">{errors.confirmpassword.message}</p>}
          

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full h-16 bg-amber-600 text-white rounded-2xl mt-auto mb-4 text-xl font-bold uppercase tracking-widest hover:bg-amber-700 transition-colors shadow-lg active:scale-[0.98]"
          >
            Initialize
          </button>
        <div className="text-center mt-2">
            <p className="text-xs text-neutral-500">Already Have An Account? <Link href="/auth/login" className="text-amber-600 font-bold">Login</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default signup;