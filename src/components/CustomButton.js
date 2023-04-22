import { useNavigate } from "react-router-dom";
const CustomButton = () => {
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/");
  };
  return (
    <button onClick={navigateToLogin} className="Submit">
      Submit
    </button>
  );
};

export default CustomButton;

//1 url
// link     <Link>
// programmatically useNaviate hooks
