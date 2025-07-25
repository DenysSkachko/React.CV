import Modal from './Modal';

const SoftSkillsModal = ({ isOpen, onClose, skills }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-8 max-w-[1100px] w-full mx-auto relative overflow-y-auto px-4">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="w-full relative bg-[var(--color-accent)] rounded-xl shadow-xl
               px-6 pt-4 pb-6 flex flex-col items-center justify-start text-center"
          >
            <p className="font-bold  text-lg">{skill.name}</p>
            <p className=" text-sm leading-relaxed mt-2">{skill.description}</p>
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default SoftSkillsModal;
