import React, { createContext, useEffect, useState } from 'react'
import app from '../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";

// fireBase User set by create user by method using 
const auth = getAuth(app);

// here Firebase create with Email and Password part working Here 
const createUser = (email,password)=>{
return createUserWithEmailAndPassword(auth , email , password)
};




// 1st Create a context to use everywhere 
export const  AuthContext = createContext();

function AuthProvider({children}) {
    const [user, setUser] = useState(null)

// Firebase work here 🔥🔥🔥
// Page Re-load This use information gone this part do here 
// If the user before set in fireBase and then show the user reload also page That work here
useEffect(()=>{
 const unSubscribe =   onAuthStateChanged(auth , (currentUser)=>{
setUser(currentUser)
    });
    return ()=> {
        unSubscribe();
    }
}, [])

    const AUthData ={
        user,
        setUser,
        createUser
    };

    console.log(user)
    return (
       <AuthContext value={AUthData}>
        {children}
       </AuthContext>
    )
}

export default AuthProvider
