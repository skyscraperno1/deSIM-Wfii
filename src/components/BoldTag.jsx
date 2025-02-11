export const BoldTag = ({ children, type = 'red', className = '' }) => {
  const bgColor = type === 'green' ? 'bg-[#06BC55]' : 'bg-[#E05F5F]'
  
  return (
    <span className={`text-sm font-bold ${bgColor} text-white w-fit rounded-sm px-2 ${className}`}>
      {children}
    </span>
  )
}