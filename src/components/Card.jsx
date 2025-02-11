export const Card = ({ children, className }) => {
  return (
    <div
      className={`min-h-[60px] w-full rounded-[13px] bg-white flex items-center px-4 text-xl
      py-4
      ${className}
      `}
    >
      {children}
    </div>
  );
};
