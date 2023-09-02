import {db} from "./config.js"
import{ref,push,onChildAdded} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js"

document.addEventListener("DOMContentLoaded",()=>{
    // GET ALL REQUIRED ELEMENTS //
    const messageInput = document.getElementById("message-input");
    const sendButton = document.getElementById("send-button");
    const logoutButton = document.getElementById("logout-button");
    const messageContainer = document.getElementById("messages")

    // GET NAME FOR USING IN CHAT

    const savedName = localStorage.getItem("name");
    if (!savedName){
    const newName = prompt("Enter your name").trim()
    if (newName) {
        localStorage.setItem("name",newName)
    }else{
        window.location.reload()
    }   
    }
// ====logout btn===//
    logoutButton.addEventListener("click",()=>{
        localStorage.removeItem("name")
        window.location.reload();
    })
// add message on database //
    const sendMessage = () => {
        const name = localStorage.getItem("name")
        const message = messageInput.value.trim()

        if(name && message){
            const messagesRef = ref(db,"messages")
            push(messagesRef, {
                name: name,
                message: message,
                timestamp : new Date().getTime()
            })
            messageInput.value = ""
        }
    }
// send btn //
    sendButton.addEventListener("click",sendMessage)

// on enter key press on input//
    messageInput.addEventListener("keypress",event => {
        if(event.key === "Enter"){
            sendMessage()
        }
    })

    // add message function//

    const addMessage = (name , message)=>{
        const messageDiv= document.createElement("div")
        messageDiv.innerHTML = `<strong>${name}:</strong> ${message}`
        messageContainer.appendChild(messageDiv)
        messageContainer.scrollTop = messageContainer.scrollHeight
    }

    const messagesRef = ref(db , "messages")
    onChildAdded(messagesRef,(snapshot)=>{
        const messageData = snapshot.val()
        addMessage(messageData.name, messageData.message)
    })
})