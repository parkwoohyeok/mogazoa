import FormComponent from "@/components/common/formComponent";
import InputComponent from "@/components/common/InputComponent";

const Signup = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#17171C]">
      <div className="w-750 p-6 rounded-lg">
        <FormComponent formType={"signup"} />
      </div>
    </div>
  );
};

export default Signup;
