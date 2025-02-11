export const Triangle = ({ size = 22, color = "#221E1F" }) => {
  const width = (15 / 22) * size; // 保持原始宽高比

  return (
    <svg 
      width={width} 
      height={size} 
      viewBox="0 0 15 22" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M14.19 9.33042L3.26001 0.450415C1.95001 -0.609585 0 0.320403 0 2.0004V19.7504C0 21.4304 1.95001 22.3605 3.26001 21.3005L14.19 12.4204C15.18 11.6204 15.18 10.1204 14.19 9.3104V9.33042Z" 
        fill={color} 
      />
    </svg>
  );
};
