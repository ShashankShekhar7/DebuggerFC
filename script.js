

document.getElementById('launchQuizBtn').addEventListener('click', function() {
  // Open the quiz game in a new window
  window.open("quix.html", '_blank', 'width=800,height=600');
});
document.getElementById('launchQuizBtn2').addEventListener('click', function() {
  // Open the quiz game in a new window
  window.open("tetris.html", '_blank', 'width=800,height=600');
});
function scrollAppear() {
  var introText = document.querySelector('.side-text');
  var sideImage = document.querySelector('.sideImage');
  var introPosition = introText.getBoundingClientRect().top;
  var imagePosition = sideImage.getBoundingClientRect().top;
  
  var screenPosition = window.innerHeight / 1.2;

  if(introPosition < screenPosition) {
    introText.classList.add('side-text-appear');
  }
  if(imagePosition < screenPosition) {
    sideImage.classList.add('sideImage-appear');
  }
}

window.addEventListener('scroll', scrollAppear);

var i = 2;
function switchTAB() {
	var x = document.getElementById("list-switch");
	if(i%2 == 0) {
		document.getElementById("list-switch").style= "display: grid; height: 50vh; margin-left: 5%;";
		document.getElementById("search-switch").style= "display: block; margin-left: 5%;";
	}else {
		document.getElementById("list-switch").style= "display: none;";
		document.getElementById("search-switch").style= "display: none;";
	}
	i++;
}

// For LOGIN
var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");
var a = document.getElementById("log");
var b = document.getElementById("reg");
var w = document.getElementById("other");

function register() {
  x.style.left = "-400px";
  y.style.left = "50px";
  z.style.left = "110px";
  w.style.visibility = "hidden";
  b.style.color = "#fff";
  a.style.color = "#000";
}

function login() {
  x.style.left = "50px";
  y.style.left = "450px";
  z.style.left = "0px";
  w.style.visibility = "visible";
  a.style.color = "#fff";
  b.style.color = "#000";
}
  
// CheckBox Function
function goFurther(){
  if (document.getElementById("chkAgree").checked == true) {
    document.getElementById('btnSubmit').style = 'background: linear-gradient(to right, #FA4B37, #DF2771);';
  }
  else{
    document.getElementById('btnSubmit').style = 'background: lightgray;';
  }
}

function google() {
  	window.location.assign("https://accounts.google.com/signin/v2/identifier?service=accountsettings&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3Dsign_in_no_continue&csig=AF-SEnbZHbi77CbAiuHE%3A1585466693&flowName=GlifWebSignIn&flowEntry=AddSession", "_blank");
}


function startquiz() {
  document.getElementById('title').style = 'display: none;'; 

  document.getElementById('panel').style = 'display: inline-flex;'; 
  document.getElementById('left').style = 'display: block;'; 
  document.getElementById('right').style = 'display: block;'; 
}
function searchdisplay() {
  document.getElementById('searchpanel').style.display="block";
}





function sideMenu(side) {
  var menu = document.getElementById('side-menu');
  if(side==0) {
    menu.style = 'transform: translateX(0vh); position:fixed;';
  }
  else {
    menu.style = 'transform: translateX(-100%);';
  }
  side++;
}


document.addEventListener('DOMContentLoaded', function() {
  const chatBtn = document.getElementById('chatBtn');
  const chatWindow = document.getElementById('chatWindow');
  const closeChat = document.getElementById('closeChat');
  const sendBtn = document.getElementById('sendBtn');
  const userInput = document.getElementById('userInput');
  const chatBody = document.getElementById('chatBody');

  chatBtn.addEventListener('click', function() {
    chatWindow.style.display = 'flex';
  });

  closeChat.addEventListener('click', function() {
    chatWindow.style.display = 'none';
  });

  sendBtn.addEventListener('click', sendMessage);
  userInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });

  function sendMessage() {
    const userMessage = userInput.value.trim();
    if (userMessage !== '') {
      const userMsgDiv = document.createElement('div');
      userMsgDiv.classList.add('message', 'user');
      userMsgDiv.innerText = userMessage;
      chatBody.appendChild(userMsgDiv);

      userInput.value = '';

      chatBody.scrollTop = chatBody.scrollHeight;

      setTimeout(function() {
        const botMessage = document.createElement('div');
        botMessage.classList.add('message', 'bot');
        botMessage.innerText = getBotResponse(userMessage);
        chatBody.appendChild(botMessage);


        chatBody.scrollTop = chatBody.scrollHeight;
      }, 1000);
    }
  }


  function getBotResponse(userMessage) {
    const responses = {
      'hello': 'Hello! How can I assist you today?',
      'hi': 'Hi there! What can I do for you?',
      'help': 'Sure, I\'m here to help. What do you need assistance with?',
      'bye': 'Goodbye! Have a great day!',
      'thank you': 'You\'re welcome!'
    };


    const message = userMessage.toLowerCase();
    return responses[message] || 'I\'m sorry, could you please rephrase that?';
  }
});