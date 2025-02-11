export const GrayButton = ({ children, width, className, href, onClick, activeClassName }) => {
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
        bg-[#B3B3B3]
        hover:opacity-95
        ${activeClassName || 'active:translate-y-[1px]'}
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