'use client';
import LogoWhite from '../Components/LogoWhite.jsx';
import Image from 'next/image';
import IconLogout from '../../public/assets/IconLogout.svg'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function WelcomePage() {
  const route = useRouter();

  const logout = () => {
    localStorage.clear();
    route.push("/login");
  }

  //check login status
  useEffect(() => {
    const firstLogin = localStorage.getItem("firstLogin");
    if (!firstLogin) {
      route.push("/login");
    }
  }, [route]);


  return (
    <main>
      <section className="bgcommon">
        <div className="flex justify-between flex-col h-full">
          <LogoWhite />
          <div className="mb-10">
            <p className="text-white font-bold font-Futura md:text-[50px] leading-[73px] ">
              Welcome,
            </p>
            <p className="font-Futura font-normal md:text-[35px] leading-[55px] text-white">
              This is where your contacts will live. Click the button below to add a new contact.
            </p>
            <br />
            <div className="flex flex-row justify-between mt-12 font-Futura font-normal md:text-[25px] leading-[50px]">
              <button
                onClick={() => route.push('/contacts/new')}
                className="button"
              >
                add your first contact
              </button>
            </div>
          </div>
          <div className="inset-0 flex items-end justify-end">
            <div className="mx-4 md:mx-0 mb-4 md:mr-4 md:absolute md:bottom-0 md:right-0 flex items-center">
              <Image
                src={IconLogout}
                alt="IconLogout"
                className="float-left h-[43px] md:h-[43px] w-[43px] md:w-[43px] -mr-4 cursor-pointer hover:bg-amber-600"
                onClick={logout}
              />
              <button className="button border-0 font-Futura text-2xl hover:text-amber-600" onClick={logout}>
                <span className="border-b hover:border-amber-600">logout</span>
              </button>

            </div>
          </div>
        </div>
      </section>
    </main>

  );
}