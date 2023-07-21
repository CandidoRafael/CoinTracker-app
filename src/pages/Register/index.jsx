/* eslint-disable no-unused-vars */
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

export const Register = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  // const navigate = useNavigate();

  // const handleRegister = async () => {
  //   try {
  //     const user = await createUserWithEmailAndPassword(
  //       registerEmail,
  //       registerPassword
  //     );

  //     console.log(user);
  //     // navigate("/dashboard/overview");
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  return (
    <div>
      <h3>Register user</h3>
      <form>
        <input
          type="text"
          value={registerEmail}
          placeholder="Email..."
          onChange={(e) => setRegisterEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password..."
          onChange={(e) => setRegisterPassword(e.target.value)}
        />
      </form>
      <button>Create User</button>
    </div>
  );
};
