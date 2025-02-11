import { Card } from "../components/Card";
import { CloseBtn } from "../components/CloseBtn";
import QRCode from "../assets/qrcode.png";
import Phone from "../assets/phone.png";
import { GrayButton } from "../components/GrayButton";
import { Triangle } from "../components/icons/Triangle";
import { useState } from "react";

export const Country = () => {
  return (
    <div className="content">
      <Card>
        <div className="w-[150px] border-b-4 border-[#14B4DC] mt-6 pb-2 text-center font-bold">
          利用国を選択
        </div>
      </Card>

      <div className="w-full mt-4 mb-8 px-10">
        <CloseBtn />
      </div>
    </div>
  );
};
