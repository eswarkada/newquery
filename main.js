const popup = document.querySelector('.chat-window');
const chatBtn = document.querySelector('.chat-button');
const submitBtn = document.querySelector('.submit1');
const chatArea = document.querySelector('.chatbody1');
const inputElm = document.querySelector('.input');


//   chat button toggler 

chatBtn.addEventListener('click', ()=>{
    popup.classList.toggle('show');
})




// send message when click on submit button
submitBtn.addEventListener('click', ()=>{


  var aa = inputElm.value;
  if( aa === ''){return false;}
  else{
    let userInput = inputElm.value;
    var div = document.createElement("div");
    div.id="userqueries";
    div.innerHTML =`<div id="user1">${userInput}</div>`;
    chatArea.appendChild(div);

    inputElm.value = '';
    chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;}

});


//sedn message when press the Enter
document.addEventListener("DOMContentLoaded", () => {
  

  const inputField = document.getElementById("userinput");
  inputField.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
      var bb = inputElm.value;
      if( bb === ''){return false;}
      else{
        let userInput = inputElm.value;

            var div = document.createElement("div");
            div.id="userqueries";
            div.innerHTML =`<div id="user1">${userInput}</div>`;
            chatArea.appendChild(div);

            inputElm.value = '';
            chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
      //addChat(input);
    }}
  });
});





var x = bot();

function bot(){
  
  let botInputField = "Hi! I'm a Query Bot. Let me know if you have any questions regarding our university!"

  var botDiv = document.createElement("div");
  botDiv.id = "botqueries";
  botDiv.innerHTML =`<div id="bot1">${botInputField}</div><button id="botbutton" onclick="sendAdmissionMsg()">Admissions</button><button id="botbutton">Student</button><button id="botbutton">Faculty</button><button id="botbutton">Academics</button>`;
  chatArea.appendChild(botDiv);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;

 
}

function sendAdmissionMsg(){
  var admValue = "Admissions";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;






  var botDiv = document.createElement("div");
  botDiv.id = "botqueries";
  botDiv.innerHTML =`<button id="botbutton" onclick="sendAdmissionMsg()">Admissions</button><button id="botbutton">Student</button><button id="botbutton">Faculty</button><button id="botbutton">Academics</button><button id="botbutton">Student</button><button id="botbutton">Faculty</button><button id="botbutton">Academics</button>`;
  chatArea.appendChild(botDiv);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
 

}





