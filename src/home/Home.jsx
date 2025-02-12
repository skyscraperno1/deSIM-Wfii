import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { Triangle } from "../components/icons/Triangle";
import Bee from "../assets/bee.png";
import { CloseBtn } from "../components/CloseBtn";
import { Logo } from "../components/icons/Logo";
import WifiDevice from "../assets/WifiDevice.png";
import Plane from "../assets/Plane.png";
import Example from "../assets/Example.png";
import WorldTitle from "../assets/world-title.png";
import BeeFly from "../assets/bee-fly.png";
import Img1 from "../assets/img1.png";
import Img2 from "../assets/img2.png";
import Img3 from "../assets/img3.png";
import Img4 from "../assets/img4.png";
import Img5 from "../assets/img5.png";
import Img6 from "../assets/img6.png";
import { MainTitle } from "../components/MainTitle";
import Girl from "../assets/girl.png";
import Boy from "../assets/boy.png";
import Power from "../assets/power.png";
import { BoldTag } from "../components/BoldTag";
import { Check } from "../components/icons/Check";
import Girl2 from "../assets/girl2.png";
import { Carousel } from "../components/Carousel";
import { useNavigate } from "react-router-dom";
import Popover from "../components/Popover";
import { useState } from "react";

const images = [Img1, Img2, Img3, Img4, Img5, Img6];

const Table = () => {
  return (
    <table className="w-full bg-white rounded-[13px] shadow-[5px_5px_4px_0_#0000001A] overflow-hidden font-bold">
      <tbody>
        <tr>
          <td className="py-3 px-4 border-[#CCCCCC]">端末名</td>
          <td className="py-3 px-4 border-l border-[#CCCCCC]">AIR-1</td>
        </tr>
        <tr className="bg-[#F2F2F2]">
          <td className="py-3 px-4 border-[#CCCCCC]">mm</td>
          <td className="py-3 px-4 border-l border-[#CCCCCC]">
            約 126×68×12.1
            <p className="text-xs">（ 幅 × 高さ × 奥行 ）</p>
          </td>
        </tr>
        <tr>
          <td className="py-3 px-4 border-[#CCCCCC]">重さ</td>
          <td className="py-3 px-4 border-l border-[#CCCCCC]">約130g</td>
        </tr>
        <tr className="bg-[#F2F2F2]">
          <td className="py-3 px-4 border-[#CCCCCC]">ディスプレイ</td>
          <td className="py-3 px-4 border-l border-[#CCCCCC]">2.4インチ</td>
        </tr>
        <tr>
          <td rowSpan={2} className="py-3 px-4 border-[#CCCCCC]">
            通信速度
          </td>
          <td className="py-3 px-4 border-l border-[#CCCCCC]">
            上り最大 50Mbps
          </td>
        </tr>
        <tr className="bg-[#F2F2F2]">
          <td className="py-3 px-4  border-l border-[#CCCCCC]">
            下り最大 150Mbps
          </td>
        </tr>
      </tbody>
    </table>
  );
};

const Dot = () => {
  return <div className="w-2 h-2 bg-[#4D4D4D] rounded-full"></div>;
};

export const Home = () => {
  const navigate = useNavigate();
  const [popoverVisible, setPopoverVisible] = useState(false);

  const handleImageClick = () => {
    setPopoverVisible(true);
  };

  return (
    <div className="content gap-4">
      <Card>
        <div className="flex gap-6 w-full">
          <div className="flex flex-col items-center gap-4 flex-1">
            <div className="flex-1 text-sm font-bold text-center">
              <p>
                既に
                <span className="text-[#E05F5F]">DeSiM Wi-Fi Pro/Light</span>{" "}
                端末を
              </p>
              <p>ご利用の方はこちら</p>
            </div>
            <Button className="!w-[200px] text-sm">
              <div className="flex-1">チャージ方法</div>
              <Triangle size={16} color="#fff" />
            </Button>
          </div>
          <div className="flex items-center justify-center">
            <img src={Bee} alt="Bee" className="w-18" />
          </div>
        </div>
      </Card>
      <div className="w-full flex flex-col">
        <div
          style={{
            backgroundImage:
              "linear-gradient(-45deg, #D3E7EE, #F2D8D1, #D3E7EE, #F2D8D1, #D3E7EE)",
          }}
          className="w-full"
        >
          <div
            className="w-full relative bg-[#E05F5F] flex justify-center pt-10"
            style={{
              height: "calc(120px + 60px)",
              clipPath: "polygon(0 0, 100% 0, 100% 120px, 50% 180px, 0 120px)",
            }}
          >
            <Logo size={382 / 1.5} />
          </div>
          <div className="w-[50%] mx-auto -translate-y-14 flex flex-col items-center">
            <img src={WifiDevice} alt="WifiDevice" />
            <div className="flex gap-2 -translate-y-20">
              <div className="border border-[#E05F5F] bg-white text-xs text-[#E05F5F] p-1 rounded-sm">
                Wi-Fi端末付き
              </div>
              <div className="border border-[#E05F5F] bg-white text-xs text-[#E05F5F] p-1 rounded-sm">
                長期滞在用
              </div>
            </div>
            <Button
              className="!w-[200px] text-sm -translate-y-16"
              activeClassName="active:-translate-y-15.5 active:shadow-[0_2px_0_#02476c]"
            >
              <div className="flex-1">チャージ方法</div>
              <Triangle size={16} color="#fff" />
            </Button>
          </div>
          <div className="-translate-y-18 flex flex-col gap-4 px-4">
            <Card>
              <div className="flex w-full">
                <div className="flex-1 text-sm leading-6 font-bold">
                  <p>世界144の国と地域で</p>
                  <p>利用可能</p>
                </div>
                <div className="w-16">
                  <img src={Plane} alt="Plane" />
                </div>
              </div>
            </Card>
            <Card>
              <div className="flex w-full">
                <div className="flex-1 text-sm leading-6 font-bold">
                  <p>利用スタイルに合わせて</p>
                  <p>10GBからプランを選択可能</p>
                </div>
                <div className="w-16">
                  <img src={Example} alt="Example" />
                </div>
              </div>
            </Card>
          </div>
          <div className="-translate-y-10 flex overflow-hidden items-center justify-center gap-4">
            <img src={WorldTitle} alt="WorldTitle" className="w-[200px]" />
            <img src={BeeFly} alt="BeeFly" className="w-[47px]" />
          </div>
          <div className="flex items-center justify-center gap-4 mb-8">
            {Array.from({ length: 9 }).map((_, index) => (
              <Dot key={index} />
            ))}
          </div>
          <div className="w-full grid grid-cols-2 gap-2 px-4 mb-8">
            {images.map((image, index) => (
              <img
                src={image}
                alt={`Img${index + 1}`}
                className="w-full"
                key={index}
              />
            ))}
          </div>
          <MainTitle title="端末紹介">
            <img
              src={WifiDevice}
              alt="WifiDevice"
              className="w-[100px] absolute top-2 right-4"
            />
          </MainTitle>
          <div className="w-full px-4 py-6">
            <Table></Table>
          </div>
          <Button className="!w-[200px] text-sm mx-auto mb-8">
            <div className="flex-1">端末を購入</div>
            <Triangle size={16} color="#fff" />
          </Button>
          <MainTitle title="ご利用までのステップ"></MainTitle>
          <div className="w-full flex flex-col gap-6 py-6 px-4">
            <Card className="!py-0">
              <div className="w-full flex items-center justify-center relative h-10">
                <p className="text-center flex-1">アマゾン購入</p>
                <div className="w-1/5 flex items-center justify-center">
                  <img src={Girl} alt="Girl" className="h-14" />
                </div>
                <div className="absolute -top-4 -left-6 bg-[#E05F5F] rounded-full text-white flex flex-col items-center justify-center w-12 h-12">
                  <p className="text-xs">STEP</p>
                  <p className="text-sm font-bold">01</p>
                </div>
              </div>
            </Card>
            <Card className="!py-0">
              <div className="w-full flex items-center justify-center relative h-10">
                <p className="text-center flex-1">届く</p>
                <div className="w-1/5 flex items-center justify-center">
                  <img src={Boy} alt="Boy" className="h-14" />
                </div>
                <div className="absolute -top-4 -left-6 bg-[#E05F5F] rounded-full text-white flex flex-col items-center justify-center w-12 h-12">
                  <p className="text-xs">STEP</p>
                  <p className="text-sm font-bold">02</p>
                </div>
              </div>
            </Card>
            <Card className="!py-0">
              <div className="w-full flex items-center justify-center relative">
                <div className="flex-1 py-2 pl-8 text-sm font-bold">
                  <BoldTag>プラン付きの場合</BoldTag>
                  <p className="text-sm font-bold bg-[#E05F5F] text-white w-fit rounded-sm px-2"></p>
                  <p className="mt-2 mb-4">電源をONにして利用開始</p>
                  <BoldTag>端末のみ購入の場合</BoldTag>
                  <p className="mt-2">電源をONにしてご利用したい</p>
                  <p>地域のプランを購入利用開始</p>
                </div>
                <div className="w-1/4 flex items-center justify-center -translate-y-8">
                  <img src={Power} alt="Power" />
                </div>
                <div className="absolute -top-4 -left-6 bg-[#E05F5F] rounded-full text-white flex flex-col items-center justify-center w-12 h-12">
                  <p className="text-xs">STEP</p>
                  <p className="text-sm font-bold">03</p>
                </div>
              </div>
            </Card>
          </div>
          <div className="text-xs text-center mb-6">
            ※ データの追加は{" "}
            <BoldTag type="green" className="font-normal py-1 text-xs">
              公式LINE(@desim)
            </BoldTag>{" "}
            から購入可能！
          </div>
          <MainTitle title="LINE安心サポート"></MainTitle>
          <div className="w-full text-4xl font-bold px-3 my-6 relative">
            <p className="relative z-10">
              <span className="text-6xl text-[#E05F5F]">365</span>日 ×{" "}
              <span className="text-6xl text-[#E05F5F]">24</span>時間
            </p>
            <div
              style={{ width: "calc(100% - 22px)" }}
              className="bg-[#FFE866] h-2 absolute bottom-0 left-2"
            ></div>
          </div>
          <div className="flex px-4 mb-4 relative">
            <Card className="!w-[210px] !pr-2">
              <div>
                <p className="text-xs mb-4 font-bold">
                  <BoldTag type="green" className="font-normal py-1 text-xs">
                    公式LINE(@desim)
                  </BoldTag>{" "}
                  で受付中！
                </p>
                <p className="text-sm  flex h-6">
                  <Check size={20} />
                  <div className="ml-1 font-bold leading-4">データ容量</div>
                </p>
                <p className="text-sm  flex h-6">
                  <Check size={20} />
                  <div className="ml-1 font-bold leading-4">チャージ</div>
                </p>
                <p className="text-sm flex h-6">
                  <Check size={20} />
                  <div className="ml-1 font-bold leading-4">
                    プレンゼント交換
                  </div>
                </p>
                <p className="text-xs flex h-6 font-bold mt-2">
                  （ 交換コードお持ちの方）
                </p>
              </div>
            </Card>
            <img
              src={Girl2}
              alt="Girl2"
              className="w-2/5 absolute right-2 top-9"
            />
          </div>
          <Button className="!w-[200px] text-sm mx-auto mb-8">
            <div className="flex-1">端末を購入</div>
            <Triangle size={16} color="#fff" />
          </Button>
        </div>
        <Card className="mt-4">
          <div className="w-full flex flex-col items-center gap-2 mt-4 font-bold text-base ">
            <div className="text-center  leading-7">
              <p>
                既に
                <span className="text-[#E05F5F]">DeSiM Wi-Fi Pro/Light</span>
              </p>
              <p>端末をご利用の方</p>
            </div>
            <div className="w-[150px] border-b-4 border-[#14B4DC] my-6 pb-2 text-center">
              チャージ方法
            </div>
            <Popover
              content={
                <div className="w-full h-full text-center flex flex-col items-center gap-4 my-4 font-bold">
                  <div className="w-full">
                    <p>DeSiM Wi-Fi Pro/Lightの端末を</p>
                    <p>すでに所有していますか？</p>
                  </div>
                  <Button className="!w-[200px] text-sm">
                    <div className="flex-1">チャージ方法</div>
                    <Triangle size={16} color="#fff" />
                  </Button>
                  <p className="underline">持っていない</p>
                  <div className="w-full border border-[#E05F5F] text-[#E05F5F] py-3 underline text-sm">
                    DeSiM Wi-Fi Pro/Light の端末とは？
                  </div>
                </div>
              }
              placement="bottom"
              trigger="click"
              visible={popoverVisible}
              onVisibleChange={setPopoverVisible}
            >
              <div>
                <Carousel
                  onImageClick={handleImageClick}
                  images={[
                    { img: Img1, title: "端末の接続方法" },
                    { img: Img2, title: "144の国と地域から利用する地域を選択" },
                    { img: Img3, title: "利用する地域のプランを決定" },
                  ]}
                />
              </div>
            </Popover>
            <Button
              className="!w-[200px] text-sm my-2"
              onClick={() => {
                navigate("/country");
              }}
            >
              <div className="flex-1">チャージする</div>
              <Triangle size={16} color="#fff" />
            </Button>
          </div>
        </Card>
      </div>

      <div className="w-full mt-4 mb-8 px-10">
        <CloseBtn />
      </div>
    </div>
  );
};
