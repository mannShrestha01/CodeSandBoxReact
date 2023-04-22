import { useState, useEffect } from "react";
function Login() {
  const [wordCount, setWordCount] = useState(0);
  const [name, setName] = useState("");

  const changeCount = (event) => {
    setWordCount(event.target.value.length);
  };

  useEffect(() => {
    console.log("mann");
  }, [wordCount, name]);

  const changeName = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      you have typed {wordCount} characters and your name is {name}
      <br />
      <input placeholder="type something" onChange={changeCount} />
      <input placeholder="type you name" onChange={changeName} />
    </div>
  );
}
export default Login;

//performance optimization
//rerender unnecessary
//
