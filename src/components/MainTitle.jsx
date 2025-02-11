export const MainTitle = ({ children, title }) => {
  return (
    <div className="w-full h-[75px] bg-[#E05F5F] relative overflow-hidden">
      <p className="text-white font-bold text-center text-xl leading-[75px]">
        { title }
      </p>
      { children }
    </div>
  );
};
