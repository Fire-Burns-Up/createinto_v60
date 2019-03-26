window.addEventListener("load", onLoad);
function onLoad(){
  initEventListeners();

}
function initEventListeners(){
  $(".readme button").click(onReadmeClick);
}
function onReadmeClick(e){
  let copy = $(this).parent().find(".copy");
  copy.css( "background-color", "red" );
  var msg = new SpeechSynthesisUtterance(copy.html());
  // var msg = new SpeechSynthesisUtterance();
  // msg.text = '<?xml version="1.0"?><speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="en-US"><emphasis>Welcome</emphasis> to the Bird Seed Emporium.  Welcome to the Bird Seed Emporium.</speak>';
  msg.rate = 1.5;
  msg.voice = window.speechSynthesis.getVoices()[1];
  window.speechSynthesis.speak(msg);
}
