export const Plus = ({ size = 15, color = "black" }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 20 20" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M19.36 10.9495H11.092V19.2435H8.908V10.9495H0.64V8.79155H8.908V0.523546H11.092V8.79155H19.36V10.9495Z" 
        fill={color} 
      />
    </svg>
  );
};
