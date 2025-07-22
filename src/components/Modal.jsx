import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            onClick={onClose}
            className="fixed inset-0 bg-[var(--color-dark)]/50 backdrop-blur-sm z-[999]"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.3 }}
          />
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="fixed top-1/2 left-1/2 z-[1000] max-w-[900px] w-[90vw] max-h-[80vh]
              bg-[var(--color-dark)]
              flex flex-col justify-center items-center
              backdrop-filter backdrop-blur-lg rounded-3xl p-8 xl:p-14 shadow-xl
              transform -translate-x-1/2 -translate-y-1/2
              overflow-hidden
              text-white"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            
            {children}
            <button
              aria-label="Close modal"
              onClick={onClose}
              className="absolute -top-2 md:-top-3 right-4 md:right-2 text-[var(--color-alt)] hover:text-[var(--color-light)] text-6xl leading-none select-none cursor-pointer"
            >
              ×
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default Modal;
