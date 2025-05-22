function submit() {
    let username = document.getElementById("a");
    let password = document.getElementById("b");
    if(username.value && password.value){
        localStorage.setItem("username", username.value);
        localStorage.setItem("password", password.value);
        console.log("Account Created");
        document.getElementById("e").style.visibility = "visible";
        document.getElementById("c").style.visibility = "hidden";
    }
}

function check(){
    let username = document.getElementById("a");
    let password = document.getElementById("b");
    if (username.value === localStorage.getItem("username") && password.value === localStorage.getItem("password")){
    window.location.assign("../Base/Farm city.htm");        
    }
}
function Homepage(){
    window.location.assign("../Homepage/Homepage.htm");
}