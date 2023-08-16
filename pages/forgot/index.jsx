import AuthLayOut from "@/layOuts/AuthLayOut";
import React, {useState} from 'react';
import {input2, inputClassName} from "@/pages/login";
import {useRouter} from "next/router";
import {RiAccountCircleFill} from "react-icons/ri";
import {MdOutlineMailLock} from "react-icons/md";

const ForgotPage = () => {
    const [formValue, setFormValue] = useState({email: ""})
    const router=useRouter();
    const formSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:3001/forgot", {
                method: "POST",
                body: JSON.stringify(formValue), headers: {"Content-Type": "application/json"}
            });

            console.log(response)
            if (response.ok) {
                await router.push('/login');
                // redirect('http://localhost/login');
                ////////////////////////////////////////////////////////////
            } else {
                console.log("not ok")
            }
        } catch (e) {
            console.error("we are GETTING ERROR", e)
        }

    }
    return (
        <div
            className={"h-screen w-screen flex justify-center md:justify-start items-center md:bg-[url('/forgot1.png')] md:bg-no-repeat md:bg-cover bg-white"}>
            <AuthLayOut>
                <form className='flex flex-col align-items-center justify-between content-center w-5/6 md:h-5/6 h-4/5'
                onSubmit={formSubmitHandler}>
                    <span className="mb-15 text-center text-2xl md:text-3xl  font-bold italic mt-2">Trouble logging in?</span>
                    <div className='flex flex-col gap-8 align-items-center justify-between '>
                        <span className={"flex justify-self-end text-[14px] items-center justify-center md:mt-14 mt-9 sm:text-[13px] text-[13px]"}>
                            Enter your email, phone, or username and we'll send you a link to get back into your account.</span>
                        <div className={inputClassName}>
                            <MdOutlineMailLock/>
                            <input
                                name={"email"}
                                onChange={(event) => {
                                    setFormValue({...formValue,email: event.target.value})
                                }}
                                className={input2}
                                type = "email" placeholder="Email"/>
                        </div>

                        <button className='mt-6 rounded-md border bg-[#41DCE1] px-9 py-2 hover:bg-[#2c9396]
                        hover:-translate-y-0.5 hover:shadow-md hover:shadow-stone-700 duration-300 text-gray-600 hover:text-white border-[#7ca1a6] md:border-none'
                                type={"submit"}>Send Link
                        </button>
                        <a
                            href={'/register'}
                            className="text-decoration-none font-bold ml-1 text-[#236D71]
                        flex justify-self-end text-[14px] items-center justify-center  sm:text-[13px] text-[13px]">
                            Create Another Account.
                        {/*/////////////////////////////////link*/}
                        </a>

                    </div>
                </form>
            </AuthLayOut>
        </div>
    )
}
export default ForgotPage;