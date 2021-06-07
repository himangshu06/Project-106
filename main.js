var synth = window.speechSynthesis;

    speak_data = "Welcome to Hand Gestures ";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis)