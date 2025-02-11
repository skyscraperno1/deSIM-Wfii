export const ArrowDown = ({ size = 21.5 }) => {
  // 保持原始宽高比 21.5:13
  const ratio = 13/21.5;
  const height = size * ratio;
  
  return (
    <svg 
      width={size} 
      height={height} 
      viewBox="0 0 43 26" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M21.5816 25.2657H21.3619L0 1.57752L3.37556 0.600586L21.3619 20.7134H21.5317L39.518 0.600586L42.8936 1.57752L21.5916 25.2657H21.5816Z" fill="black" />
    </svg>
  );
};
