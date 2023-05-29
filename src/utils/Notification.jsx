import React from "react";


export const showErrMsg = (msg) => {
    return <div className="text-justify italic px-3 tracking-wider text-amber-600">
        {msg}
    </div>;  
};

export const showSuccessMsg = (msg) => {
    return <div className="bg-green-500 italic px-3 tracking-wider text-justify text-secondary">
        {msg}</div>;
};
