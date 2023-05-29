'use client';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


export default function Login() {
    const query = useRouter();
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
                    <form>
                        <div className="flex flex-col justify-between mb-10">
                            <input
                                type="email"
                                name="email"
                                placeholder="e-mail"
                                className="inputField mt-10"
                                // onChange={(e) =>
                                //     setValues({ ...values, [e.target.name]: e.target.value })
                                // }
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="password"
                                className="inputField mt-10"
                                // onChange={(e) =>
                                //     setValues({ ...values, [e.target.name]: e.target.value })
                                // }
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
