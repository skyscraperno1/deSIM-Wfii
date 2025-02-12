   import { useState, useEffect, useRef } from 'react';
   import PropTypes from 'prop-types';
   import { motion, AnimatePresence } from 'framer-motion';
   import ReactDOM from 'react-dom';
   import { Close } from './icons/Close';

   const Popover = ({ 
     children, 
     content, 
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

     useEffect(() => {
       if (isVisible) {
         document.body.style.overflow = "hidden";
       } else {
         document.body.style.overflow = "";
       }
       return () => {
         document.body.style.overflow = "";
       };
     }, [isVisible]);

     return (
       <>
         <div className="relative inline-block">
           <div 
             ref={triggerRef}
             className="inline-block"
             {...(trigger !== "manual" ? {
               onClick: handleClick,
               onMouseEnter: handleMouseEnter,
               onMouseLeave: handleMouseLeave
             } : {})}
           >
             {children}
           </div>
         </div>
         
         {/* 将遮罩层和弹窗内容合并到一个 Portal 内 */}
         {ReactDOM.createPortal(
           <AnimatePresence>
             {isVisible && (
               <>
                 {/* 遮罩层 */}
                 <motion.div 
                   key="mask"
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 0.5 }}
                   exit={{ opacity: 0 }}
                   transition={{ duration: 0.1 }}
                   className="fixed inset-0 z-40 bg-black/70"
                   onClick={() => {
                     setIsVisible(false);
                     onVisibleChange?.(false);
                   }}
                 />
                 {/* 弹窗内容 */}
                 <motion.div 
                   ref={popoverRef}
                   key="popover"
                   initial={{ opacity: 0, scale: 0.95 }}
                   animate={{ opacity: 1, scale: 1 }}
                   exit={{ opacity: 0, scale: 0.95 }}
                   transition={{ duration: 0.1 }}
                   style={{
                     width: "calc(100% - var(--spacing) * 8)",
                     maxWidth: "calc(400px - var(--spacing) * 8)"
                   }}
                   className={`
                     fixed z-50 
                     bg-white 
                     rounded-lg 
                     shadow-lg 
                     border border-gray-200 
                     p-4 
                     top-1/2 left-1/2 
                     transform -translate-x-1/2 -translate-y-1/2
                     ${className}
                   `}
                   onMouseEnter={handleMouseEnter}
                   onMouseLeave={handleMouseLeave}
                 >
                   <div className='absolute -top-2 -right-2 bg-[#C9C9C9] rounded-full p-2' onClick={() => {
                     setIsVisible(false);
                     onVisibleChange?.(false);
                   }}>
                     <Close color='#fff' size={18}></Close>
                   </div>
                   {content}
                 </motion.div>
               </>
             )}
           </AnimatePresence>,
           document.body
         )}
       </>
     );
   };

   Popover.propTypes = {
     children: PropTypes.node.isRequired,
     content: PropTypes.node.isRequired,
     trigger: PropTypes.oneOf(['click', 'hover', 'manual']),
     visible: PropTypes.bool,
     onVisibleChange: PropTypes.func,
     className: PropTypes.string
   };

   export default Popover;