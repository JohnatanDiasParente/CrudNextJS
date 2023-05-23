import firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
    
    API_KEY :  "AIzaSyAgbwhP98wHKCrwoinSihIPJaSE_Ba4FtM",

    AUTH_DOMAIN : "agendanext-943ad.firebaseapp.com",
   
    DATABASE_URL : "https://agendanext-943ad-default-rtdb.firebaseio.com",
   
    PROJECT_ID : "agendanext-943ad",
   
    STORAGE_BUCKET : "agendanext-943ad.appspot.com",
   
    MESSAGING_SENDER_ID :  "60592375316",
   
    APP_ID : "1:60592375316:web:29d2a8f982a7d9bae3c901",

}

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}else{
    firebase.app()
}

const database = firebase.database()

export{database, firebase}