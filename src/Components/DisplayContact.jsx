import React, { useState } from 'react';
import MaleAvatar from '../../public/assets/MaleAvatar.svg';
import FemaleAvatar from '../../public/assets/FemaleAvatar.svg';
import IconEdit from '../../public/assets/IconEdit.svg';
import IconDelete from '../../public/assets/IconDelete.svg';
import Image from 'next/image';
import ConfirmAlert from './ConfirmAlert';
import CustomMessages from './CustomMessages';

export default function DisplayContact({ contacts, handleEdit, handleDelete}) {
    const [showDeleteAlert, setShowDeleteAlert] = useState(false);
    const [confirmPopUp, setConfirmPopUp] = useState(false);
    const handleDeleteConfirm = (e) => {
        setShowDeleteAlert(!showDeleteAlert);
    };
    const handleButton1 = () => {
        handleDelete(contacts._id);
        handleDeleteConfirm();
        setConfirmPopUp(!confirmPopUp);
    };
    return (
        <>
            {confirmPopUp ? (
                <tr key={(contacts._id) + 'confirmalert'}>
                    <td>
                        <CustomMessages
                            message="Your contact has been deleted successfully!"
                            button="Okay"
                            action={() => setConfirmPopUp(!confirmPopUp)}
                        />
                    </td>
                </tr>
            ) : (
                ''
            )}
            {showDeleteAlert && (
                <tr key={(contacts._id) + 'deletealert'}>
                    <td>
                        <ConfirmAlert
                            confirmPopUp={confirmPopUp}
                            setConfirmPopUp={setConfirmPopUp}
                            contacts={contacts}
                            message="Do you want to delete the contact "
                            button1="Yes"
                            handleButton1={handleButton1}
                            button2="Cancel"
                            handleButton2={handleDeleteConfirm}
                        />
                    </td>
                </tr>
            )}
            <tr key={(contacts._id) + 'readonly'} className="opacity-90 hover:bg-slate-100">
                <td className="py-3 px-1 pr-2 ">
                    {contacts.gender == 'male' ? (
                        <Image src={MaleAvatar} alt="male avatar" />
                    ) : (
                            <Image src={FemaleAvatar} alt="female avatar" />
                    )}
                </td>
                <td className="py-3 pr-10">{contacts.fullname}</td>
                <td className="py-3 pr-10">{contacts.gender}</td>
                <td className="py-3 pr-10">{contacts.email}</td>
                <td className="py-3 pr-10">{contacts.phonenumber}</td>
                <td className="pt-3 md:pt-[28px]  px-1 flex flex-row gap-5 content-baseline align-baseline">
                    <Image
                        onClick={(e) => handleEdit(e, contacts)}
                        src={IconEdit}
                        alt="edit"
                        width="auto"
                        height="auto"
                    />
                    <Image
                        onClick={handleDeleteConfirm}
                        src={IconDelete}
                        alt="delete"
                        width="auto"
                        height="auto"
                    />
                </td>
            </tr>
        </>
    );
}

