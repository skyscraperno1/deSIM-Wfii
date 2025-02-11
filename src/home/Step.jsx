import { Card } from "../components/Card";
import { CloseBtn } from "../components/CloseBtn";
import QRCode from "../assets/qrcode.png";
import Phone from "../assets/phone.png";
import { GrayButton } from "../components/GrayButton";
import { Triangle } from "../components/icons/Triangle";
import { useState } from "react";

const StepItem = ({ children, active, onClick }) => {
  return (
    <div
      className={`transition-all duration-100 border-2 rounded-md flex-1 h-[150px] text-base text-center py-[16px] text-[#4d4d4d] flex flex-col ${active ? "opacity-100 border-[#14B4DC]" : "opacity-50 border-[#4d4d4d]"}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
export const Step = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const addStep = () => {
    if (currentStep === 2) {
      setCurrentStep(0);
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className="content">
      <Card className="h-[500px]">
        <div className="w-full h-full flex flex-col items-center gap-6">
          <div className="w-[150px] border-b-4 border-[#14B4DC] mt-6 pb-2 text-center font-bold">
            IMEI 情報入力
          </div>
          <div className="text-base">IMEIの入力方法をご選択ください。</div>
          <div className="w-full flex gap-12 px-4">
            <StepItem active={currentStep === 1} onClick={() => setCurrentStep(1)}>
              <p className="h-[22px]">バーコード</p>
              <p className="h-[42px]">スキャン</p>
              <img src={QRCode} alt="QRCode" className="h-[50px] mx-auto" />
            </StepItem>
            <StepItem active={currentStep === 2} onClick={() => setCurrentStep(2)}>
              <p className="h-[44px] leading-[30px]">手入力</p>
              <img src={Phone} alt="Phone" className="h-[70px] mx-auto" />
            </StepItem>
          </div>
          {currentStep === 1 && (
            <div className="w-full">
              <label className="text-sm">IMEI（バーコードスキャン）</label>
              <input
                type="text"
                placeholder="スキャンして入力"
                className="border w-full p-2 text-sm"
              />
            </div>
          )}
          {currentStep === 2 && (
            <div className="w-full">
              <label className="text-sm">IMEI（手入力）</label>
              <input
                type="text"
                placeholder="ここにIMEIを入力"
                className="border w-full p-2 text-sm"
              />
            </div>
          )}
          <div className="w-full flex-1 flex px-10 items-center">
            <GrayButton className="flex-1 text-sm h-10" onClick={addStep}>
              <div className="flex-1">次へ</div>
              <Triangle size={16} color="#fff" />
            </GrayButton>
          </div>
        </div>
      </Card>
      <div className="w-full mt-4 mb-8 px-10">
        <CloseBtn />
      </div>
    </div>
  );
};
