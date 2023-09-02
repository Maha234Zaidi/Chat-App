import{initializeApp} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js"
import{getDatabase} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js"

const firebaseConfig = {
    apiKey: "AIzaSyDw6txZf7EVVavxCFEVdMiSovS0SjAFfLY",
    authDomain: "chat-app-886f1.firebaseapp.com",
    projectId: "chat-app-886f1",
    storageBucket: "chat-app-886f1.appspot.com",
    messagingSenderId: "313113220379",
    appId: "1:313113220379:web:49a9d3e10ab7f786abafbe",
    measurementId: "G-XX8FVSE01Q"
  };

  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);

  export{db}