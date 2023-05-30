'use client';
import React, { useState, useEffect } from 'react';
import MaleAvatar from '../../public/assets/MaleAvatar.svg';
import FemaleAvatar from '../../public/assets/FemaleAvatar.svg';
import IconInterchange from '../../public/assets/IconInterchange.svg';
import Image from 'next/image';
import CustomMessages from './CustomMessages';
import axios from 'axios';

export function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function EditContact({ contacts, handleCancel }) {
    const [rotate, setRotate] = useState(false);
    const [toggle, setToggle] = useState(contacts.gender);
    const [showSaveAlert, setshowSaveAlert] = useState(false);
    const [updatedData, setUpdatedData] = useState({ contacts });
    const token = localStorage.getItem('token');

    const handleGender = () => {
        const newGender = toggle === 'Male' ? 'Female' : 'Male';
        setToggle(newGender);
        contacts.gender = newGender;
        setRotate(!rotate);
    };
    const handleshowAlert = () => {
        if (contacts.fullname && contacts.gender && contacts.email && contacts.phoneNumber) {
            setshowSaveAlert(showSaveAlert);
        }
    }

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setUpdatedData({ ...updatedData, [name]: value, err: "", success: "" });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios
            .patch(`http://localhost:8070/contacts/update/${contacts._id}`, {
                fullname: updatedData.fullname,
                email: updatedData.email,
                gender: toggle,
                phonenumber: updatedData.phonenumber,
            }, {
                headers: {
                    Authorization: token,
                }
            }
            )
            .then((res) => {
                setshowSaveAlert(true);
                handleshowAlert();
            })
            .catch((err) => console.log(err));
    };

    //check login status
    useEffect(() => {
        const firstLogin = localStorage.getItem("firstLogin");
        if (!firstLogin) {
            route.push("/login");
        }
    }, []);

    return (
        <>
            {showSaveAlert && (
                <tr key={(contacts._id) + 'alert'}>
                    <td>
                        <CustomMessages
                            message="Your contact has been saved successfully!"
                            button="Okay"
                            action={handleCancel}
                        />
                    </td>
                </tr>
            )}
            <tr key={(contacts._id) + 'edit'} className="opacity-90 hover:bg-slate-100">
                <td className="py-3 px-1 pr-2 ">
                    {contacts.gender == 'male' ? (
                        <Image src={MaleAvatar} alt="Male avatar" />
                    ) : (
                        <Image src={FemaleAvatar} alt="Female avatar" />
                    )}
                </td>
                <td className="py-3 pr-10">
                    <input
                        type="text"
                        required="required"
                        id="fullname"
                        placeholder="fullname"
                        name="fullname"
                        defaultValue={contacts.fullname}
                        onChange={handleChangeInput}
                        className="form-input-contact w-44"
                    />
                </td>
                <td className="py-3 pr-10 relative">

                    <input
                        type="text"
                        required="required"
                        placeholder="gender"
                        id="gender"
                        name="gender"
                        value={toggle}
                        onChange={handleChangeInput}
                        className="form-input-contact w-28 h-10 border-r-0"

                    />
                    <Image
                        src={IconInterchange}
                        alt="change gender"
                        width="auto"
                        height="auto"
                        className={classNames(
                            'absolute right-12 top-[18px] md:top-[33px] cursor-pointer',
                            rotate ? 'rotate' : 'rotateA'
                        )}
                        onClick={handleGender}
                    />
                </td>
                <td className="py-3 pr-10">
                    <input
                        type="text"
                        required="required"
                        placeholder="e-mail"
                        id="email"
                        name="email"
                        defaultValue={contacts.email}
                        onChange={handleChangeInput}
                        className="form-input-contact w-full"
                    />
                </td>
                <td className="py-3 pr-10">
                    <input
                        type="text"
                        required="required"
                        placeholder="phone number"
                        id="phonenumber"
                        name="phonenumber"
                        defaultValue={contacts.phonenumber}
                        onChange={handleChangeInput}
                        className="form-input-contact w-40"
                    />
                </td>
                <td className="pt-[10px] md:pt-[28px]  px-1 flex flex-row gap-5 content-baseline align-baseline">
                    <button
                        data-modal-target="popup-modal"
                        data-modal-toggle="popup-modal"
                        className="text-white bg-primary text-sm px-4 leading-7  pb-1 rounded-full tracking-widest font-semibold font-Futura shadow-md hover:bg-secondary "
                        type="submit"
                        onClick={handleSubmit}
                    >
                        save
                    </button>
                </td>
            </tr>
        </>
    );
}