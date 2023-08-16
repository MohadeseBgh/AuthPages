import AuthLayOut from "@/layOuts/AuthLayOut";
import React, {useState} from 'react';
import {inputClassName} from "@/pages/login";
import { redirect } from 'next/navigation';
import {input2} from "@/pages/login";
import {RiAccountCircleFill, RiLockPasswordLine} from "react-icons/ri";
import {MdOutlineEmail} from "react-icons/md";

const LoginPage = () => {
    const [formValue,setFormValue] = useState({userName:"",password:"",email:""})

    const formSubmitHandler = async(e) => {
        e.preventDefault();
        try {
            const response=await fetch("http://localhost:3001/register",{method:"POST",
                body:JSON.stringify(formValue) , headers: {"Content-Type": "application/json"}});

            console.log(response)
            if(response.ok){

                redirect('http://localhost/login');
                ////////////////////////////////////////////////////////////
            }
            else{
                console.log("not ok")
            }
        } catch (e) {
            console.error("we are GETTING ERROR", e)
        }

    }
    return (
        <div
            className={"h-screen w-screen flex justify-center md:justify-start items-center md:bg-[url('/bg.png')] md:bg-no-repeat md:bg-cover bg-white"}>
            <AuthLayOut>
                <form className='flex flex-col align-items-center justify-items-center content-center w-5/6 h-5/6'
                      onSubmit={formSubmitHandler}
                >
                    <span className="mb-20 text-center text-3xl md:text-5xl font-bold italic mt-2">Register</span>
                    <div className='flex flex-col gap-6 align-items-center justify-between '>

                        <div className={inputClassName}>
                            <RiAccountCircleFill/>
                            <input
                            name={"userName"}
                            onChange={(event) => {
                                setFormValue({...formValue, userName: event.target.value})
                            }}
                            className={input2}
                            type="text" placeholder=" Username"/>
                        </div>
                        <div className={inputClassName}>
                            <MdOutlineEmail/>
                            <input
                            name={"email"}
                            onChange={(event) => {
                                setFormValue({...formValue, email: event.target.value})
                            }}
                            className={input2}
                            type="email" placeholder="Email"/>
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

                        <button className='mt-8 rounded-md border bg-[#41DCE1] px-9 py-1 hover:bg-[#2c9396]
                        hover:-translate-y-0.5 duration-300 text-gray-600 hover:text-white border-[#7ca1a6] md:border-none
                         hover:shadow-md hover:shadow-stone-700'
                                type={"submit"}>Sign up
                        </button>
                    </div>
                    <span className="flex justify-self-end text-[14px] items-center justify-center md:mt-11 mt-9 sm:text-[13px] text-[13px]">Already Have Account?
                    <a href={'/login'} className="text-decoration-none font-bold ml-1 text-[#236D71]">Login</a>
                </span>
                </form>
            </AuthLayOut>
        </div>
    )
}
export default LoginPage;