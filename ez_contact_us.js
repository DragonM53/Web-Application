function validate(){
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    var url = "https://wa.me/60162409657?text=";
    var end_url = `${url}*Name       :* ${name}%0a*Phone      :* ${phone}%0a*Email        :* ${email}%0a*Message  :* ${message}`;
    error_message.style.padding = "10px";    
    var text;
    
    if(!isNaN(name) || name.length < 5){
      text = "Please Enter valid Name";
      error_message.innerHTML = text;
      return false;
    }
    if(isNaN(phone) || phone.length != 11){
      text = "Please Enter valid Phone Number";
      error_message.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1){
      text = "Please Enter valid Email";
      error_message.innerHTML = text;
      return false;
    }
    window.open(end_url,'_blank');
    alert("Form Submitted Successfully!");
    return true;    
}  

function init() {
  document.forms[1].onsubmit = function() {
  if (this.checkValidity()) alert("Registered successfully!\nThank you.");
      return true;
  }
}
window.onload = init;
