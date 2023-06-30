 import { useState,useContext,useEffect,createContext } from "react";
 import { auth, db } from "../firebase";
 import {createUserWithEmailAndPassword
    ,signInWithEmailAndPassword
    ,signOut
    ,onAuthStateChanged
,sendEmailVerification,GoogleAuthProvider ,signInWithPopup, updateProfile }
 from 'firebase/auth'
 import {setDoc,doc ,getDoc} from 'firebase/firestore'

 const AuthContext = createContext()
 export function AuthContextProvider({children}){
    const [user,setuser] =useState({})

    function signup(email, password, name) {
      return createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          return updateProfile(user, { displayName: name }).then(() => {
            setDoc(doc(db, 'users', email), {
              savedshow: []
            });
            return user;
          });
        });
    }
    
    
    function login(email,password){
        return signInWithEmailAndPassword(auth,email,password)
    }
    function logout(){
        return signOut(auth)
    }


  


    async function sendVerification() {
        try {
          const user = auth.currentUser;
          if (user) {
            await sendEmailVerification(user);
            console.log('Email verification sent');
          } else {
            console.log('No user found');
          }
        } catch (error) {
          console.log('Error sending email verification:', error);
        }
      }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentuser)=>{
            setuser(currentuser);
        });
        return ()=> {
            unsubscribe();
        };
    },[]);
    
   
    async function signInWithGoogle() {
      const provider = new GoogleAuthProvider();
      try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
    
        const userRef = doc(db, 'users', user.email);
        const userSnap = await getDoc(userRef);
    
        // Check if the user document already exists
        if (!userSnap.exists()) {
          // Create the document only if it doesn't exist
          await setDoc(userRef, {
            savedshow: []
          });
        }
    
        console.log('Successfully signed in with Google:', user);
      } catch (error) {
        console.log('Error signing in with Google:', error);
      }
    }
    
    
 

    return(
        <AuthContext.Provider value={{signup,login,logout,sendVerification,signInWithGoogle  ,user}}> 
        {children}  
        </AuthContext.Provider>
    )
 }

 export function UserAuth(){
    return(
        useContext(AuthContext)
    )
 }