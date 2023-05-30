'use client';
import React, { useState } from 'react';
import LogoWhite from '../../../Components/LogoWhite';
import Image from 'next/image';
import IconLogout from '../../../../public/assets/IconLogout.svg'
import { useRouter } from 'next/navigation';
import { isEmpty, isEmail } from '@/utils/validation';
import { showErrMsg, showSuccessMsg } from "@/utils/Notification";
import axios from 'axios';


const initialState = {
    fullname: "",
    email: "",
    phonenumber: "",
    gender: "",
    err: "",
    success: "",
}
export default function NewContact() {
    const route = useRouter();
    const [contact, setContact] = useState(initialState);
    const { fullname, email, phonenumber, gender, err, success } = contact;

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setContact({ ...contact, [name]: value, err: "", success: "" });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isEmpty(fullname) || isEmpty(email) || isEmpty(phonenumber))
            return setContact({
                ...contact,
                err: "Please fill all fields!",
                success: "",
            });

        if (!isEmail(email))
            return setContact({ ...contact, err: "Invalid email type!", success: "" });

        try {
            const res = await axios.post("http://localhost:8070/contacts/add", {
                fullname,
                email,
                phonenumber,
                gender
            });
            setContact({ ...contact, err: "", success: res.data.msg });
            route.push('/contacts');


        } catch (err) {
            err.response.data.msg &&
                setContact({ ...contact, err: err.response.data.msg, success: "" });
        }
    };


    return (
        <main>
            <section className="bgcommon">
                <div className="flex justify-between flex-col h-full font-Futura">
                    <LogoWhite />
                    <div className="mb-10">
                        <p className="text-white font-bold md:text-[45px] leading-[73px] mb-10 ">
                            New Contact
                        </p>
                        <div className='text-lg font-Futura'>
                            {err && showErrMsg(err)}
                            {success && showSuccessMsg(success)}
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col md:flex-row gap-2 mb-2 justify-between md:mb-8">
                                <input
                                    type="text"
                                    name="fullname"
                                    placeholder="full name"
                                    className="inputField font-medium"
                                    onChange={handleChangeInput}
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="e-mail"
                                    className="inputField font-medium"
                                    onChange={handleChangeInput}
                                />
                            </div>
                            <div className="flex flex-col md:flex-row justify-between gap-2 mb-8 md:mb-20">
                                <input
                                    type="tel"
                                    name="phonenumber"
                                    placeholder="phone number"
                                    className="inputField font-medium"
                                    onChange={handleChangeInput}
                                />
                                <div className="flex flex-row justify-between content-center text-[25px] md:w-[34vw] py-3 text-white align-middle font-medium">
                                    <span>gender</span>
                                    <div>
                                        <input
                                            type="radio"
                                            name="gender"
                                            id="male"
                                            value="male"
                                            className="mr-2 border-2 border-white bg-primary mb-1"
                                            onChange={handleChangeInput}
                                        />
                                        <label htmlFor="male">male</label>
                                    </div>
                                    <div>
                                        <input
                                            type="radio"
                                            name="gender"
                                            id="female"
                                            value="female"
                                            className="mr-2 border-2 border-white bg-primary mb-1"
                                            onChange={handleChangeInput}
                                        />
                                        <label htmlFor="female">female</label>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row justify-between mt-12 font-Futura font-normal md:text-[25px] leading-[50px]">
                                <button
                                    //onClick={() => route.push('/contacts/new')}
                                    className="button"
                                >
                                    add your first contact
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="flex items-end justify-end">
                        <div className="mx-4 md:mx-0 mb-4 md:mr-4 md:absolute md:bottom-0 md:right-0 flex items-center">
                            <Image
                                src={IconLogout}
                                alt="IconLogout"
                                className="float-left h-[43px] md:h-[43px] w-[43px] md:w-[43px] -mr-4 cursor-pointer hover:bg-amber-600"
                            //onClick={logout()}
                            />
                            <button className="button border-0 font-Futura text-2xl hover:text-amber-600">
                                <span className="border-b hover:border-amber-600">logout</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>

    );
}