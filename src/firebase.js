// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, doc, getDoc,setDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfZXdJMGGSDz8pxJRpg9jjVHWCmM3KnKY",
  authDomain: "movhub-b3869.firebaseapp.com",
  projectId: "movhub-b3869",
  storageBucket: "movhub-b3869.firebasestorage.app",
  messagingSenderId: "82402169424",
  appId: "1:82402169424:web:5c5adaad2b7bffc87d3755"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
    try{
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await setDoc(doc(db, "user", user.uid),{
        uid: user.uid,
        name,
        addProvide: "local",
        email,
    })} catch(error){
        console.log(error);
        alert(error.message);
    }
}

const login = async (email, password)=>{
    try{
        await signInWithEmailAndPassword(auth, email, password);
    }catch(error){
        console.log(error);
        alert(error.message)
    }

}

const logout = async()=>{
    await signOut(auth);
}


const getUserData = async (uid) => {

    const docRef = doc(db, "user", uid)
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()){
        return docSnap.data()   
    }else{
        console.log("no such document")
        return null;
    }
}

export { auth, db, signup, login, logout, getUserData };

