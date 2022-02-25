if ("webkitSpeechRecognition" in window) {
    let speechRecognition = new webkitSpeechRecognition();
    let final_transcript = "";
  
    speechRecognition.continuous = true;
    speechRecognition.interimResults = true;
    speechRecognition.lang = document.querySelector("#select_dialect").value;
  
    speechRecognition.onstart = () => {
      document.querySelector("#status").style.display = "block";
    };
    speechRecognition.onerror = () => {
      document.querySelector("#status").style.display = "none";
      console.log(alert("Speech Recognition Error Due to Network Failure"));
    };
    speechRecognition.onend = () => {
      document.querySelector("#status").style.display = "none";
      console.log(alert("Sorry!Work still in progress.Speech Recognition Ended"));
    };
  
    speechRecognition.onresult = (event) => {
      let interim_transcript = "";
  
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          final_transcript += event.results[i][0].transcript;
        } else {
          interim_transcript += event.results[i][0].transcript;
        }
      }
      document.querySelector("#final").innerHTML = final_transcript;
      document.querySelector("#interim").innerHTML = interim_transcript;
      dsp;
    };
  
    document.querySelector("#start").onclick = () => {
      speechRecognition.start();
    };
    document.querySelector("#stop").onclick = () => {
      speechRecognition.stop();
    };
    function dsp(){
      if( final_transcript.value == "take me to the hall"){
        location.href = 'cinema.html'
      }
      else if( final_transcript == "i want to register" || final_transcript == "i want to sign up"){
        location.href = 'registration.html'
      }
      else if( final_transcript == "i want to sign in"){
        location.href = 'login.html'
      }
    }
   
  } 
  else{
    console.log("Speech Recognition Not Available");
  }
 
  