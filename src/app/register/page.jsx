'use client';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


export default function Register() {
    const query = useRouter();
    return (
        <section className="bglogin">
            <div className='-ml-20'>
                <div>
                    <p className="font-bold font-Futura text-[50px] text-white  leading-[73px]">
                        Register Now!
                    </p>
                </div>
                <div>
                    <form>
                        <div className="flex flex-col justify-between mb-10">
                            <input
                                type="email"
                                name="email"
                                placeholder="e-mail"
                                className="inputField mt-8"
                            // onChange={(e) =>
                            //     setValues({ ...values, [e.target.name]: e.target.value })
                            // }
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="create password"
                                className="inputField mt-8"
                            // onChange={(e) =>
                            //     setValues({ ...values, [e.target.name]: e.target.value })
                            // }
                            />

                            <input
                                type="password"
                                name="confirmpassword"
                                placeholder="confirm password"
                                className="inputField mt-8"
                            // onChange={(e) =>
                            //     setValues({ ...values, [e.target.name]: e.target.value })
                            // }
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

