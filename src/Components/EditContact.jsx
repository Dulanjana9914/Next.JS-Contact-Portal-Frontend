import React, { useState } from 'react';
import MaleAvatar from '../public/assets/MaleAvatar.svg';
import FemaleAvatar from '../public/assets/FemaleAvatar.svg';
import IconInterchange from '../public/assets/IconInterchange.svg';

import Image from 'next/image';
import CustomMessages from './CustomMessages';

export function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}
export default function EditContact({ contacts, handleEditChange, handleCancel }) {
    const [rotate, setRotate] = useState(false);
    const [toggle, setToggle] = useState(contacts.gender);
    const [showSaveAlert, setshowSaveAlert] = useState(false);

    const handleGender = () => {
        if (toggle == 'male') {
            setToggle('female');
            contacts.gender = 'female';
        } else {
            setToggle('male');
            contacts.gender = 'male';
        }
        setRotate(!rotate);
    };
    const handleshowAlert = () => {
        if (contacts.fullname && contacts.gender && contacts.email && contacts.phoneNumber) {
            setshowSaveAlert(!showSaveAlert);
        }
    }

    return (
        <>
            {showSaveAlert && (
                <tr key={(contacts._id) + 'alert'}>
                    <td>
                        <CustomMessages
                            content="Your contact has been saved successfully!"
                            button="Okay"
                            handleButton={handleCancel}
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
                <td className="py-3 pr-10  ">
                    <input
                        type="text"
                        required="required"
                        placeholder="fullname"
                        name="fullname"
                        value={contacts.fullname}
                        onChange={handleEditChange}
                        className="form-input-contact w-44"
                    />
                </td>
                <td className="py-3 pr-10 relative">
                    <input
                        type="text"
                        required="required"
                        placeholder="gender"
                        name="gender"
                        value={toggle}
                        onChange={handleEditChange}
                        className="form-input-contact w-28 border-r-0"
                        disabled
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
                        placeholder="email"
                        name="email"
                        value={contacts.email}
                        onChange={handleEditChange}
                        className="form-input-contact w-full"
                    />
                </td>
                <td className="py-3 pr-10">
                    <input
                        type="text"
                        required="required"
                        placeholder="phoneNumber"
                        name="phoneNumber"
                        value={contacts.phoneNumber}
                        onChange={handleEditChange}
                        className="form-input-contact w-40"
                    />
                </td>
                <td className="pt-[10px] md:pt-[28px]  px-1 flex flex-row gap-5 content-baseline align-baseline">
                    <button
                        data-modal-target="popup-modal"
                        data-modal-toggle="popup-modal"
                        className="text-white bg-primary text-sm px-4 leading-7  pb-1 rounded-full tracking-widest font-semibold font-FutuLight shadow-md hover:bg-secondary "
                        type="submit"
                        onClick={handleshowAlert}
                    >
                        save
                    </button>
                </td>
            </tr>
        </>
    );
}