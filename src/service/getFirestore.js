import firebase from "firebase"
import 'firebase/firestore'

const firebaseConfig = {

    apiKey: "AIzaSyCIKTkQcAWkRRSaObHCeDOALyThoceROf8",
    authDomain: "e-commerce-prado.firebaseapp.com",
    projectId: "e-commerce-prado",
    storageBucket: "e-commerce-prado.appspot.com",
    messagingSenderId: "822206602691",
    appId: "1:822206602691:web:d3b01fad8d266bf71bb176"
  
  };


const app = firebase.initializeApp(firebaseConfig);


export function getFirestore(){
    return firebase.firestore(app)
}

  