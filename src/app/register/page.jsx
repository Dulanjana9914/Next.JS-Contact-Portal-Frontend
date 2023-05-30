'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { isEmpty, isEmail, isLength, isMatch } from '../../utils/validation.js';
import { showErrMsg, showSuccessMsg } from "../../utils/Notification.jsx";
import axios from 'axios';

const initialState = {
    email: "",
    password: "",
    confirmpassword: "",
    err: "",
    success: "",
}

export default function Register() {
    const route = useRouter();
    const [user, setUser] = useState(initialState);
    const { email, password, confirmpassword, err, success } = user;

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value, err: "", success: "" });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        //Validations
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

        if (isLength(password))
            return setUser({
                ...user,
                err: "Password must have at least 8 characters!",
                success: "",
            });

        if (!isMatch(password, confirmpassword))
            return setUser({ ...user, err: "Password and confirm password not matched!", success: "" });
        try {
            const res = await axios.post("http://localhost:8070/user/register", {
                email,
                password,
            });
            setUser({ ...user, err: "", success: res.data.msg });
            setTimeout(() => {
                route.push('/login');
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
                        Register Now!
                    </p>
                </div>
                <br></br>
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
                                className="inputField mt-8"
                                onChange={handleChangeInput}
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="create password"
                                className="inputField mt-8"
                                onChange={handleChangeInput}
                            />

                            <input
                                type="password"
                                name="confirmpassword"
                                placeholder="confirm password"
                                className="inputField mt-8"
                                onChange={handleChangeInput}
                            />
                        </div>
                        <div className='mt-16'>
                            <button type="submit" className="button w-38 h-12 ">
                                register
                            </button>
                            <p className="mt-16 text-white font-medium  text-[20px] leading-[45px]">
                                <Link className="font-Futu underline mb-5 hover:text-amber-600" href="/login">
                                    &lt; Back to login
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>

            </div>

        </section>
    );
}

