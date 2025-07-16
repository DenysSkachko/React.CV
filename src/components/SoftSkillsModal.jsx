import Modal from './Modal';

const SoftSkillsModal = ({ isOpen, onClose, skills }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <header className="mb-6">
        <h3 className="text-4xl ml-3 font-extrabold text-[var(--color-alt)] tracking-wide">
          Soft Skills
        </h3>
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
    </Modal>
  );
};

export default SoftSkillsModal;
