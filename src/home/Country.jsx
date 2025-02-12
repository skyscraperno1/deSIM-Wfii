import { Card } from "../components/Card";
import { CloseBtn } from "../components/CloseBtn";
import { Triangle } from "../components/icons/Triangle";
import Japan from "../assets/flags/japan.png";
import Korea from "../assets/flags/korea.png";
import Taiwan from "../assets/flags/taiwan.png";
import Thailand from "../assets/flags/thailand.png";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const countries = [
  {
    name: "日本",
    img: Japan,
  },
  {
    name: "韓国",
    img: Korea,
  },
  {
    name: "台湾",
    img: Taiwan,
  },
  {
    name: "タイ",
    img: Thailand,
  },
];

export const Country = () => {
  const navigate = useNavigate();
  const [selectedCountry, setSelectedCountry] = useState("");

  return (
    <div className="content">
      <Card>
        <div className="flex flex-col justify-center items-center w-full">
          <div className="w-[150px] border-b-4 border-[#14B4DC] mt-6 pb-2 font-bold text-center">
            利用国を選択
          </div>
          <p className="text-sm my-8">ご利用する国をご選択ください。</p>
          <div className="flex flex-col gap-4 w-full mb-4">
            {countries.map((country) => (
              <div
                className={`flex items-center justify-center p-4 py-2 w-full border rounded-lg cursor-pointer ${
                  selectedCountry === country.name
                    ? "border-[#14B4DC]"
                    : "border-[#B3B3B3]"
                }`}
                key={country.name}
                onClick={() => setSelectedCountry(country.name)}
              >
                <img
                  src={country.img}
                  alt={country.name}
                  className="w-[48px] h-[32px]"
                />
                <p className="text-base font-bold flex-1 pl-4 text-[#6B7280]">
                  {country.name}
                </p>
              </div>
            ))}
          </div>
          <Button
            className="!w-[200px] text-sm my-2 mb-6"
            onClick={() => {
              navigate("/info");
            }}
          >
            <div className="flex-1">さらに</div>
            <Triangle size={16} color="#fff" />
          </Button>
        </div>
      </Card>
      <div className="w-full mt-8 mb-8 px-10">
        <CloseBtn />
      </div>
    </div>
  );
};
