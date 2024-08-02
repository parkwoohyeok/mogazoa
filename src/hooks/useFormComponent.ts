import SignupForm from "@/components/common/formComponent/signupForm/index";
import SigninForm from "@/components/common/formComponent/signinForm/index";
// import AddItemForm from './AddItemForm';
// import EditItemForm from './EditItemForm';
// import ReviewForm from './ReviewForm';
// import EditProfileForm from './EditProfileForm';

const useFormComponent = (formType: string) => {
  switch (formType) {
    case "signup":
      return SignupForm;
    case "signin":
      return SigninForm;
    case "additem":
    //   return AddItemForm;
    // case 'edititem':
    //   return EditItemForm;
    // case 'review':
    //   return ReviewForm;
    // case 'editprofile':
    //   return EditProfileForm;
    default:
      return null;
  }
};

export default useFormComponent;
