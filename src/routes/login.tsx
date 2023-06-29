import { useAuth } from "../auth/auth_provider";
import DefaultLayout from "../layout/default_layout";
import { useState } from "react";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <DefaultLayout>
      <form className="form">
        <h1>Login</h1>
        <label>email</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>

        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>


        <button>Login</button>
      </form>
    </DefaultLayout>
  );
}
