import { Close } from '../components/icons/Close.jsx'
export const CloseBtn = () => {
  return (
    <div className="w-full border border-[#4D4D4D] bg-white h-[40px] flex items-center justify-center cursor-pointer">
      <Close color="black" size={11} />
      <div className='ml-2'>
        閉じる
      </div>
    </div>
  );
};
