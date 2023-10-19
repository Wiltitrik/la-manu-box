//Gestion des imports
import { signInWithEmailAndPassword } from "firebase/auth";
import React, {useState} from "react";
import { auth } from "../../../firebase";



const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
       .then((userCredental) => {
        console.log(userCredental);
       }).catch((error)=> {
        console.log(error); //Gestion des erreurs 
       })
    }

    
  return (
    <div className='sign-in'>
    
        <form onSubmit={signIn} >
            <h1>Connexion</h1>
            <input type="email" placeholder="Entrez votre email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Entrez votre mot de passe" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit">Connexion</button>
        </form>
    </div>
  )
}

export default SignIn