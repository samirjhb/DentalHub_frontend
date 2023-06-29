import { useState } from "react";
import DefaultLayout from "../layout/default_layout";
import { useAuth } from "../auth/auth_provider";
import { Navigate } from "react-router-dom";


export default function SignUp() {
  
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const auth = useAuth();

if(auth.isAuthenticated){
  return <Navigate to="/dashboard"/>
}

  return (
    <DefaultLayout>
      <form className="form">
        <h1>SignUp</h1>
        <label>Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>

        <label>email</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>

        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>

        <label>Confirm Password</label>
        <input type="password" />

        <button>Create user</button>
      </form>
    </DefaultLayout>
  );
}
