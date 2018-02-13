//function to log in user
var counter =0;
function login(){
 
    //get reference from template file 
    var username = document.getElementById('username');
    var password = document.getElementById('password');
    
    console.log('username', username.value, 'password', password.value);
    if(username.value == 'lucas' && password.value == 'lucas123'){
       window.location.href = './index.html'
    } else {
        counter ++;
        if(counter >= 5) {
            window.location.href = './error.html';
        } else {
            console.log ('counter....', counter);
            //perform error handeling 
            var span = document.getElementById('error');
            console.log('span', span);
            handelError (span, counter); // calling handle error function
        }
        
    }
}
// set and display error
function handelError(span, counter){
    var errMsg = `Login error! Please try again! You have ${5 - counter} tries left!`;
        span.innerHTML = errMsg;
        span.style = 'display:block;';
        resetError(span);
        return errMsg;
}
//reset error after 3 seconds
function resetError(span){
    setTimeout(function() {
        span.style ='display:none;';
    }, 3000);
    
}