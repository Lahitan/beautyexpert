// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCi4afRiIKfzO8zrJX17_lhH1nxgCWt7GA",
	authDomain: "wtf-capstone.firebaseapp.com",
	projectId: "wtf-capstone",
	storageBucket: "wtf-capstone.appspot.com",
	messagingSenderId: "316878651949",
	appId: "1:316878651949:web:ceab12c8631f827b986ea4",
	measurementId: "G-TXN236SJ6K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;

// function logIn(email, password) {
// 	return signInWithEmailAndPassword(auth, email, password);
// }
// function signUp(email, password) {
// 	return createUserWithEmailAndPassword(auth, email, password);
// }
// function logOut() {
// 	return signOut(auth);
// }
// function googleSignIn() {
// 	const googleAuthProvider = new GoogleAuthProvider();
// 	return signInWithPopup(auth, googleAuthProvider);
// }

// useEffect(() => {
// 	const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
// 		console.log("Auth", currentuser);
// 		setUser(currentuser);
// 	});

// 	return () => {
// 		unsubscribe();
// 	};
// }, []);
