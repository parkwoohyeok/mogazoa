type ButtonComponentProps = {
  text: string;
};

const ButtonComponent: React.FC<ButtonComponentProps> = ({ text }) => {
  return (
    <button
      type="submit"
      className="border-1 border-[#3e3edd] bg-[#3e3edd] rounded-s p-5 h-50 text-white text-center"
    >
      {text}
    </button>
  );
};

export default ButtonComponent;
