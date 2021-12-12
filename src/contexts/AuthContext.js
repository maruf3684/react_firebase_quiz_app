import React, { useState ,useContext,useEffect } from "react";
import {createUserWithEmailAndPassword,
getAuth,
signInWithEmailAndPassword,
signOut,
updateProfile,
onAuthStateChanged
} from 'firebase/auth'
import "../firebase"


const AuthContext = React.createContext();
export function useAuth(){
    return useContext(AuthContext);
}



//simple react component
export function AuthProvider(props) {

	const { children } = props;
	const [loading, setLoading] = useState(true);
	const [currentUser, setCurrentUser] = useState();
    
    useEffect(()=>{
        const auth=getAuth()
        const unSubscribe=onAuthStateChanged(auth,(user)=>{
            setCurrentUser(user)
            console.log("1",currentUser);
            setLoading(false)
        });
        return unSubscribe;
    },[])

    useEffect(()=>{
        console.log("2",currentUser);
    },[currentUser])
   


    //signup function
    async function signUp(email, password,username){
         const auth=getAuth()
         await createUserWithEmailAndPassword(auth, email, password)
        
         //updateProfile
         await updateProfile(auth.currentUser,{
             displayName: username
         })
        
        //  update our state
         const user=auth.currentUser
         setCurrentUser({
             ...user
         })
    }

    //login function
    async function login(email, password){
        const auth=getAuth()
        signInWithEmailAndPassword(auth, email, password)

        //update our state
        // const user=auth.currentUser
        // setCurrentUser({
        //     ...user
        // })
    }

    //logut function
    async function logout(){
        const auth=getAuth()
        return signOut(auth)
    }

    const value={
        currentUser,
        signUp,
        login,
        logout,
    }

	return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
        );
}
