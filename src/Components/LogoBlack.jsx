import React from "react";
import Image from "next/image";
import logoBlack from "../../public/assets/LogoBlackText.svg";

export default function LogoBlack() {
    return (
        <div>
            <div>
                <Image
                    src={logoBlack}
                    alt="logoBlack"
                    className="h-[92px] md:h-[92px] w-[138px] md:w-[138px]cursor-pointer min-w-[68px] 
                    min-h-[42px] max-h-[92px] max-w-[138px]"
                />
            </div>
        </div>
    );
}
