export const Button = ({ children, width, className, href, onClick, activeClassName }) => {
  const handleClick = () => {
    if (href) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <button 
      onClick={handleClick}
      className={`
        flex items-center px-4 py-2 rounded-full min-h-12 font-bold 
        bg-[#14B4DC] shadow-[0_4px_0_#036093] 
        hover:opacity-95
        ${activeClassName || 'active:translate-y-[2px] active:shadow-[0_2px_0_#02476c]'}
        transition-all
        text-white
        ${width ? width : 'w-auto'}
        ${className || ''}
      `}
    >
      {children}
    </button>
  )
}