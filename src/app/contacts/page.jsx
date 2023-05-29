import LogoWhite from '@/Components/LogoWhite';
import Image from 'next/image';
import IconLogout from '../../../public/assets/bx_log-out-circle.png'


export default function Allcontacts() {

    return (
        <>
            <main>
                <section className="bgcommon">
                    <div className="flex justify-between flex-col h-full font-Futura -mt-4">
                        <LogoWhite />
                        <div className="flex gap-1 flex-col">
                            <div className="flex flex-row justify-between items-baseline h-16 -mt-10">
                                <p className="font-Futura text-white font-bold md:text-[45px] leading-[73px] mb-10 ">
                                    Contacts
                                </p>
                                <button
                                    // onClick={() => query.push('/contacts/new')}
                                    className="button"
                                >
                                    add new contact
                                </button>
                            </div>
                            <div className="bg-white mt-4 h-[45vh] md:px-4 md:rounded-3xl w-full py-4 text-primary overflow-y-auto">
                                <form>
                                    <table className="w-full text-sm md:text-[20px] text-left font-FutuLight font-semibold transition-all duration-300 ease-linear border-spacing-6">
                                        <thead className="text-sm md:text-[18px] font-Futura font-semibold">
                                            <tr>
                                                <th className="pb-3 md:w-15">&nbsp;</th>
                                                <th className="pb-3  md:w-52">full name</th>
                                                <th className="pb-3 md:w-28">gender</th>
                                                <th className="pb-3 md:w-52">e-mail</th>
                                                <th className="pb-3">phone number</th>
                                                <th className="pb-3"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                 
                                        </tbody>
                                    </table>
                                </form>
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

                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

