import CustomButton from "../components/CustomButton";
import { Link } from "react-router-dom";
function Register() {
  return (
    <div>
      Please Register
      <br />
      <input placeholder="username" />
      <br />
      <input placeholder="pasword" />
      <br />
      <CustomButton />
      <br />
      Already have an account yet? <Link to="/">Sign in</Link> instead
    </div>
  );
}
export default Register;
