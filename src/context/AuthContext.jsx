import { createContext, useContext, useState, useEffect } from 'react'
import {auth,db} from '../firebase'
import {doc,setDoc} from 'firebase/firestore'
import {createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut,
onAuthStateChanged} from 'firebase/auth'

//global state
const UserContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({})
    
    //sign up fuction
    const signUp = (email,password) => {
        createUserWithEmailAndPassword(auth, email,password)
        return setDoc(doc(db, 'users', email),
        { watchList:[],})
    }

    //sign in function
    const signIn = (email,password) => {
        return signInWithEmailAndPassword(auth, email,password)
    }

    //sign out function
    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
        })
        return () =>{
            unsubscribe()
        }
    },[])


    return(
        <UserContext.Provider value={{signUp,signIn,logOut,user}}>
            {children}
        </UserContext.Provider>
    )
}


export const UserAuth = () => {
    return useContext(UserContext)
}