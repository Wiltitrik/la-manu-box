//Gestion des imports
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, {useState} from "react";
import { auth } from "../../../firebase";



const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
       .then((userCredental) => {
        console.log(userCredental);
       }).catch((error)=> {
        console.log(error); //Gestion des erreurs 
       })
    }

    
  return (
    <div className='sign-up'>
    
        <form onSubmit={signUp} >
            <h1>Creez votre compte</h1>
            <input type="email" placeholder="Entrez votre email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Entrez votre mot de passe" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit">Inscription</button>
        </form>
    </div>
  )
}

export default SignUp