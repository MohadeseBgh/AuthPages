import AuthLayOut from "@/layOuts/AuthLayOut";
import React, {useState} from 'react';
import {RiAccountCircleFill, RiLockPasswordLine} from "react-icons/ri";

export const inputClassName = " flex flex-row items-center justify-center gap-0 flex-nowrap placeholder:italic " +
    "placeholder:text-slate-400 block bg-white w-full border border-slate-300 gap-2 " +
    " rounded-md py-3 pl-7 pr-3 shadow-md shadow-gray-300 sm:text-sm text-[13px] focus:shadow-inner focus:shadow-slate-700 "
export const input2 = "placeholder:italic placeholder:text-slate-400 block bg-white w-full " +
    " sm:text-sm text-[13px] focus:outline-none"

const LoginPage = () => {
    const [formValue, setFormValue] = useState({userName: "", password: ""})
    const formSubmitHandler = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:3001/login", {
                method: "POST",
                body: JSON.stringify(formValue), headers: {"Content-Type": "application/json"}
            });

            if (response.ok) {

                // setUser((prevValue) => {
                //     return {userID: formValue.password, userInfo: formValue.userName}
                // })
                // navigate("/Home");

                const response1 = await fetch("http://localhost:3001/login_recieve_info", {
                    method: "GET",
                    headers: {"Content-Type": "application/json"}
                });

                if (response1.ok) {
                    const result = await response1.json()
                    console.log(response1)
                    // setInfo((prevValue) => {
                    //     return result
                    // })

                } else {
                    console.log("not ok")
                }
            } else {
                console.log("not ok")
            }

        } catch (e) {
            console.error("we are GETTING ERROR", e)
        }
    }

    return (
        <div
            className={"h-screen w-screen flex justify-center md:justify-start items-center bg-gradient-to-r from-[#c9f1f6] to-[#9fb8bb] " +
                "md:bg-[url('/bg.png')] md:bg-no-repeat md:bg-cover " +
                ""}
            onSubmit={formSubmitHandler}>
            <AuthLayOut>
                <form className='flex flex-col align-items-center justify-items-center content-center w-5/6 h-5/6'>
                    <span className="mb-20 text-center text-3xl md:text-5xl font-bold italic mt-2">Login</span>
                    <div className='flex flex-col gap-8 align-items-center justify-between '>
                        <div
                            className={`${inputClassName}`}>
                            <RiAccountCircleFill/>
                            <input
                                name={"userName"}
                                onChange={(event) => {
                                    setFormValue({...formValue, userName: event.target.value})
                                }}
                                className={input2}
                                placeholder={"Username"}
                                type="text"/>
                        </div>
                        <div className={inputClassName}>
                            <RiLockPasswordLine/>
                            <input
                                name={"password"}
                                onChange={(event) => {
                                    setFormValue({...formValue, password: event.target.value})
                                }}
                                className={input2}
                                type="password" placeholder="Password"/>
                        </div>

                        <input style={{display: "none"}} type="file" id="file"/>
                        <button className='mt-8 rounded-md border bg-[#41DCE1] px-9 py-1 hover:bg-[#2c9396]
                        hover:-translate-y-0.5 hover:shadow-md hover:shadow-stone-700 duration-300 text-gray-600 hover:text-white border-[#7ca1a6] md:border-none'
                                type={"submit"}>Sign In
                        </button>
                    </div>

                    <div
                        className={"flex justify-center content-center items-center text-xs mt-4 md:text-[#8d9495] focus:text-[#051b1e] "}>
                        <a href={'/forgot'}>Forgot Password?</a>
                    </div>
                    <span
                        className="flex justify-self-end text-[14px] items-center justify-center md:mt-16 mt-9 sm:text-[13px] text-[13px]">
                        Don`t Have Account?
                        <a href={'/register'} className="text-decoration-none font-bold ml-1 text-[#236D71]">Sign up now.</a>
                    </span>
                </form>
            </AuthLayOut>
        </div>
    )
}
export default LoginPage;