import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

const SoftSkillsModal = ({ isOpen, onClose, skills }) => {
  const modalRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setVisible(true);
    } else {
      document.body.style.overflow = '';
      setTimeout(() => setVisible(false), 300);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen && !visible) return null;

  return ReactDOM.createPortal(
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-[#141024cc] backdrop-blur-sm z-[999] transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />

      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        className={`fixed top-1/2 left-1/2 z-[1000] max-w-[700px] w-[90vw] max-h-[80vh] bg-gradient-to-br from-[#1a1a2e]/90 to-[#141024]/90
          backdrop-filter backdrop-blur-lg
          border border-[#FFD369]/40 rounded-3xl p-8 shadow-xl
          transform -translate-x-1/2 -translate-y-1/2
          overflow-hidden
          text-white
          cursor-default
          pointer-events-auto
          flex flex-col
          transition-transform duration-300 ease-out
          ${
            isOpen
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-95 pointer-events-none'
          }`}
      >
        <header className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-extrabold text-[#FFD369] tracking-wide ">
            Soft Skills
          </h3>
          <button
            aria-label="Close Soft Skills Modal"
            onClick={onClose}
            className="text-[#FFD369] hover:text-white transition-colors text-3xl leading-none select-none"
          >
            ×
          </button>
        </header>

        <div
          className="flex-1 overflow-y-auto py-8 px-3
          grid grid-cols-1 sm:grid-cols-2 gap-6
          scrollbar-thin scrollbar-thumb-[#FFD369]/70 scrollbar-track-transparent"
          style={{ overscrollBehavior: 'contain' }}
        >
          {skills.map((skill, i) => (
            <div
              key={i}
              className="bg-[#2a2a44]/80 border border-[#FFD369]/30 rounded-xl p-5
                hover:bg-[#3a3a60]/90 hover:scale-[1.02] hover:shadow-lg
                transition-transform duration-300 cursor-default"
            >
              <p className="font-semibold text-white text-lg">{skill.name}</p>
              <p className="text-[#fffacdcc] text-sm leading-relaxed mt-2">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>,
    document.body
  );
};

export default SoftSkillsModal;
