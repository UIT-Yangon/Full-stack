import React from "react";
import LeftTextCon from "./LeftTextCon";
import RightTextCon from "./RightTextCon";

export default function VisionTextCon(){
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 pt-[32px] md:py-[48px] w-full gap-[20px] lg:gap-[114px] lg:pt-[48px] lg:pb-[64px]">
            <LeftTextCon/>
            <RightTextCon/>
        </div>
    )
}