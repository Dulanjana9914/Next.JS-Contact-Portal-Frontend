'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { isEmpty, isEmail } from '../../utils/validation.js';
import { showErrMsg, showSuccessMsg } from "../../utils/Notification.jsx";
import axios from 'axios';

const initialState = {
    email: "",
    password: "",
    err: "",
    success: "",
};

export default function Login() {
    const [user, setUser] = useState(initialState);
    const route = useRouter();
    const { email, password, err, success } = user;

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value, err: "", success: "" });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (
            isEmpty(email) ||
            isEmpty(password)
        )
            return setUser({
                ...user,
                err: "Please fill in all fields!",
                success: "",
            });

        if (!isEmail(email))
            return setUser({ ...user, err: "Invalid email type!", success: "" });
        try {
            const res = await axios.post("http://localhost:8070/user/login", { email, password });

            setUser({ ...user, err: "", success: res.data.msg });
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", res.data.user);
            localStorage.setItem("firstLogin", true);

            setTimeout(() => {
                route.push('/');
            }, 1000);

        } catch (err) {
            err.response.data.msg &&
                setUser({ ...user, err: err.response.data.msg, success: "" });

        }
    };
    return (
        <section className="bglogin">
            <div className='-ml-20'>
                <div>
                    <p className="font-bold font-Futura text-[50px] text-white  leading-[73px]">
                        Hi there,
                    </p>
                    <p className="text-white font-Futura font-medium text-[35px] w-full md:w-[20vw] leading-[40px] mb-8">
                        Welcome to our contacts portal
                    </p>
                </div>
                <div>
                    <div className='text-lg font-Futura'>
                        {err && showErrMsg(err)}
                        {success && showSuccessMsg(success)}
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col justify-between mb-10">
                            <input
                                type="email"
                                name="email"
                                placeholder="e-mail"
                                className="inputField mt-10"
                                onChange={handleChangeInput}
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="password"
                                className="inputField mt-10"
                                onChange={handleChangeInput}
                            />
                        </div>
                        <div className='flex'>
                            <button type="submit" className="button w-32 h-12 mt-2">
                                login
                            </button>
                            <p className="mt-2 text-white font-medium ml-4 text-[25px] leading-[50px]">
                                or
                                <Link className="font-Futu underline ml-2 hover:text-amber-600" href="/register">
                                    Click here to Register
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>

            </div>

        </section>
    );
}
