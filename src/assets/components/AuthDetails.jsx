import React, {useEffect, useState} from 'react';
import { auth } from '../../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

const AuthDetails = () => {
    const[authUser, setAuthUser] = useState(null);

    useEffect(() =>{
        const listen = onAuthStateChanged(auth, (user) => {
            if(user){
                setAuthUser(user)
            } else{
                setAuthUser(null)
            }
        })



        return () =>{
            listen();
        }
    }, []);

    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log('Vous vous etes bien déconnecté')
        }).catch(error => console.log(error))
    }
  return  <div> 
    {authUser ? <><p>{`Votre identifiant de connexion est ${authUser.email}`}</p><button onClick={userSignOut}>Déconnexion</button></> : <p>Déconncté</p> }
     </div>
  
};

export default AuthDetails;