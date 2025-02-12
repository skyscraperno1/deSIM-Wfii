import { Card } from "../components/Card";
import { CloseBtn } from "../components/CloseBtn";
import BeeTail from "../assets/bee-tail.png";

const lists = [
  { label: "IMEI ID", content: "123456789012345" },
  { label: "国", content: "日本" },
  { label: "開始日", content: "2024年11月19日" },
  { label: "終了日", content: "2024年11月19日" },
];
const ListItem = ({ label, content }) => {
  return (
    <div className="text-[#6B7280]">
      <label className="text-sm">{label}：</label>
      <p className="text-lg font-bold">{content}</p>
    </div>
  );
};
export const Info = () => {
  return (
    <div className="content">
      <Card>
        <div className="flex flex-col justify-center items-center w-full relative">
          <div className="w-[150px] border-b-4 border-[#14B4DC] mt-6 pb-2 font-bold text-center relative mb-4">
            利用国を選択
          </div>
          <img
            src={BeeTail}
            alt="bee-fly"
            className="absolute top-0 right-2 w-[50-px] h-[77px]"
          />
          <div className="flex flex-col gap-4 w-full mb-4 rounded-lg border border-[#B3B3B3] p-4">
            {lists.map((list) => (
              <ListItem key={list.label} {...list} />
            ))}
          </div>
        </div>
      </Card>
      <div className="w-full mt-8 mb-8 px-10">
        <CloseBtn />
      </div>
    </div>
  );
};
