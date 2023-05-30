'use client';
import LogoWhite from '@/Components/LogoWhite';
import Image from 'next/image';
import IconLogout from '../../../public/assets/IconLogout.svg'
import { useRouter } from 'next/navigation';
import React, {Fragment,useState, useEffect } from 'react';
import axios from 'axios';
import DisplayContact from '../../Components/DisplayContact';
import EditContact from '../../Components/EditContact';


export default function Allcontacts() {
    //const[token,setToken]=useState(null);
    const route = useRouter();
    const [allContacts, setAllContacts] = useState([]);
    const [change, setChange] = useState(false)
    const [editedContact, setEditedContact] = useState(null);
    const [editedData, setEditedData] = useState({
        fullname: '',
        email: '',
        phonenumber: '',
        gender: '',
    });

    useEffect(() => {
        // setToken(localStorage.getItem('token'));
        // console.log(token);
        // if (!token) {
        //     route.push('/login');
        // }

        const getallContacts = async () => {
            await axios
                .get('http://localhost:8070/contacts')
                .then((res) => {
                    setAllContacts(res.data.contacts);
                })
                .catch((err) => {
                    console.log(err);
                });      
        };       
        getallContacts();
        setChange(false)
    }, [change]);


    const handleEdit = (e, contacts) => {
        e.preventDefault();
        setEditedContact(contacts._id);
        setEditedData({ ...contacts });
    };

    const handleCancel = () => {
        setEditedContact(null);
        setChange(true)
    };

    const handleDelete = async (contactId) => {
        await axios
            .delete(`http://localhost:8070/contacts/delete/${contactId}`)
            .then((res) => {
                setChange(true)
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <main>
                <section className="bgcommon">
                    <div className="flex justify-between flex-col h-full font-Futura -mt-4">
                        <LogoWhite />
                        <div className="flex gap-1 flex-col">
                            <div className="flex flex-row justify-between h-16 -mt-10 items-baseline">
                                <p className="font-Futura text-white font-bold md:text-[45px] leading-[73px] mb-10 ">
                                    Contacts
                                </p>
                                <button
                                    onClick={() => route.push('/contacts/new')}
                                    className="button"
                                >
                                    add new contact
                                </button>
                            </div>
                            <div className="bg-white mt-4 h-[45vh] md:px-4 md:rounded-3xl w-full py-4 text-primary overflow-y-auto">
                                <form >
                                    <table className="w-full text-sm md:text-[20px] text-left font-FutuLight font-semibold transition-all duration-300 ease-linear border-spacing-6">
                                        <thead className="text-sm md:text-[18px] font-Futura font-semibold">
                                            <tr>
                                                <th className="pb-3 md:w-15"></th>
                                                <th className="pb-3  md:w-52">full name</th>
                                                <th className="pb-3 md:w-28">gender</th>
                                                <th className="pb-3 md:w-52">e-mail</th>
                                                <th className="pb-3">phone number</th>
                                                <th className="pb-3"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {allContacts && allContacts.map((contacts) => (
                                                <Fragment key={contacts._id}>
                                                    {editedContact === contacts._id ? (
                                                        <EditContact
                                                            contacts={contacts}
                                                            handleCancel={handleCancel}
                                                        />
                                                    ) : (
                                                        <DisplayContact
                                                            contacts={contacts}
                                                            handleEdit={handleEdit}
                                                            handleDelete={handleDelete}
                                                            handleCancel={handleCancel}
                                                        />
                                                    )}
                                                </Fragment>
                                            ))}              
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

