import Firebase from "firebase/compat/app";
import "firebase/compat/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDee2500rwEuCcXEEZaYJiRFfynrTBfziA",
  authDomain: "react-contact-form-43729.firebaseapp.com",
  projectId: "react-contact-form-43729",
  storageBucket: "react-contact-form-43729.appspot.com",
  messagingSenderId: "989838379144",
  appId: "1:989838379144:web:9d8abda99399154ca1f73d"
};

// Initialize Firebase
Firebase.initializeApp(firebaseConfig);
export default Firebase;