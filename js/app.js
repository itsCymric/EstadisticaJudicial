// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js"
import { collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtJ_9HA03nqj_tTE9Ls55xT5q_0WHZsAI",
  authDomain: "pruebasflourish.firebaseapp.com",
  projectId: "pruebasflourish",
  storageBucket: "pruebasflourish.appspot.com",
  messagingSenderId: "317144477986",
  appId: "1:317144477986:web:c7026e1af211bced13357b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Referencia a la base de datos
const db = getFirestore(app)

//función()
async function mostrarDatos(){
  const q = query(collection(db,"rankingsflourish"))
  var listaDatos = document.getElementById('lista-datos')
  listaDatos.innerHTML=''
  const querySnapshot = await getDocs(q)

  querySnapshot.forEach((doc) =>{
    const data = doc.data()

    const titulo = data.titulo
    const enlace = data.enlace

    //crear elementos HTML para mostrar los datos
    var listItem = document.createElement('li')
    listaDatos.appendChild(listItem)
    var salto = document.createElement('a')
    salto.href = enlace
    salto.target = "_blank"
    salto.textContent = titulo
    listaDatos.appendChild(salto)
  }
  )
}

document.addEventListener('DOMContentLoaded', function(){
  mostrarDatos()
})

