import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion'; // 可选，用于更好的动画效果

const getPopoverPosition = (placement) => {
  const positions = {
    top: 'bottom-full left-1/2 -translate-x-1/2 -translate-y-2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 translate-y-2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 -translate-x-2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 translate-x-2 ml-2'
  };
  return positions[placement];
};

const Popover = ({ 
  children, 
  content, 
  placement = 'bottom',
  trigger = 'click',
  visible,
  onVisibleChange,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(visible);
  const triggerRef = useRef(null);
  const popoverRef = useRef(null);

  const handleClick = () => {
    if (trigger === 'click') {
      const newVisible = !isVisible;
      setIsVisible(newVisible);
      onVisibleChange?.(newVisible);
    }
  };

  const handleMouseEnter = () => {
    if (trigger === 'hover') {
      setIsVisible(true);
      onVisibleChange?.(true);
    }
  };

  const handleMouseLeave = () => {
    if (trigger === 'hover') {
      setIsVisible(false);
      onVisibleChange?.(false);
    }
  };

  useEffect(() => {
    setIsVisible(visible);
  }, [visible]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        triggerRef.current && 
        !triggerRef.current.contains(event.target) &&
        popoverRef.current &&
        !popoverRef.current.contains(event.target)
      ) {
        setIsVisible(false);
        onVisibleChange?.(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block">
      <div 
        ref={triggerRef}
        className="inline-block"
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
      
      <AnimatePresence>
        {isVisible && (
          <motion.div 
            ref={popoverRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.1 }}
            className={`
              absolute z-50 
              min-w-[200px]
              bg-white 
              rounded-lg 
              shadow-lg 
              border border-gray-200
              p-4
              ${getPopoverPosition(placement)}
              ${className}
            `}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

Popover.propTypes = {
  children: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
  placement: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  trigger: PropTypes.oneOf(['click', 'hover']),
  visible: PropTypes.bool,
  onVisibleChange: PropTypes.func,
  className: PropTypes.string
};

export default Popover;
