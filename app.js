var username = []
var password = []

function usernamePush(){
    username.push(document.getElementById("username").innerHTML)
}
function passwordPush(){
    password.push(document.getElementById("password").innerHTML)
}

function console(){
    console.log(username)
    console.log(password)
}