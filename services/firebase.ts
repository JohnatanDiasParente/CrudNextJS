import firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
    
    apiKey: "AIzaSyAgbwhP98wHKCrwoinSihIPJaSE_Ba4FtM",

    authDomain: "agendanext-943ad.firebaseapp.com",
  
    databaseURL: "https://agendanext-943ad-default-rtdb.firebaseio.com",
  
    projectId: "agendanext-943ad",
  
    storageBucket: "agendanext-943ad.appspot.com",
  
    messagingSenderId: "60592375316",
  
    appId: "1:60592375316:web:29d2a8f982a7d9bae3c901"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}else{
    firebase.app()
}

const database = firebase.database()

export{database, firebase}