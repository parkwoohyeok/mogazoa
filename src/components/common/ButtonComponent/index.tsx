type ButtonComponentProps = {
  children: string;
  type: "primary" | "secondary" | "tertiary";
};

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  children,
  type,
}) => {
  const baseClass = "border-1 rounded-s p-5 h-50 text-center";
  let typeClass = "";

  switch (type) {
    case "primary":
      typeClass = "border-[#3e3edd] bg-[#3e3edd] text-white";
      break;
    case "secondary":
      typeClass = "border-[#5097FA] bg-transparent text-[#5097FA]";
      break;
    case "tertiary":
      typeClass = "border-white bg-transparent text-white";
      break;
    default:
      break;
  }

  return (
    <button type="submit" className={`${baseClass} ${typeClass}`}>
      {children}
    </button>
  );
};

export default ButtonComponent;
