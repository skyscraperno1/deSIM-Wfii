export const Close = ({ size = 16, color = 'black' }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M28.7029 31.4681L15.6001 18.2543L2.53732 31.4681L0.19043 29.1516L13.2932 15.9378L0.19043 2.76427L2.53732 0.397461L15.6001 13.6113L28.7029 0.397461L30.9999 2.71391L17.937 15.9277L30.9999 29.1416L28.7029 31.458V31.4681Z" fill={color} />
    </svg>
  );
};
