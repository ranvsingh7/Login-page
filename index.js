let signUpData= JSON.parse(localStorage.getItem("signupData"))||[]
function signupAccount(event){
    event.preventDefault()
    let email=document.getElementById("signup--input").value 
    let password=document.getElementById("signin--passwordInput").value
    if(dataLength==0){
        noAccountFound()
    }
    else{
        signUpData.forEach((el,index)=>{
            if(email==el.email){
                alert("You have already sign up, Please login.")
                window.location="./index.html"
            }
            else if(dataLength==index+1){
                noAccountFound()
            }
        })
    }
    function noAccountFound(){
        if(email.includes("@"&&".")){
            if(password.length>=8){
                let data=  {
                    "email":email,
                    "password":password
                }
                signUpData.push(data)
                localStorage.setItem("signupData", JSON.stringify(signUpData))
                alert("SignUp successfully, SignIn with your account.")
                document.getElementById("signup--input").value=""
                document.getElementById("signin--passwordInput").value=""
                window.location="./index.html"
            }
            else{
                alert("Please enter 8 digit password")
            }
        }
        else{
            alert("Please enter valid email.")
        }    
    }
        
}










function myFunction(x) {
    if (x.type == "email") {
        let email = document.getElementById("signin--email").className = "hrStyle"
        document.getElementById("signin--emailHeading").innerText = "Email address"
    }
    else {
        let password = document.getElementById("signin--password").className = "hrStyle"
        document.getElementById("signin--passHeading").innerText = "Password"
    }
    x.placeholder = "";
    return
}
function support(){
    alert("Please contact with support team.")
}
function myFunction1(x) {
    if (x.type == "email") {
        x.placeholder = "Email address"

    }
    else {
        x.placeholder = "Password"
    }
    document.getElementById("signin--password").classList.remove("hrStyle")
    document.getElementById("signin--email").classList.remove("hrStyle")
    document.getElementById("signin--passHeading").innerText = ""
    document.getElementById("signin--emailHeading").innerText = ""

    return
}

function removeEye() {

    let type = document.getElementById("signin--passwordInput").type
    let type1
    let eye
    type == "password" ? type1 = "Text" : type1 = "password"
    type == "password" ? eye = "./images/hide.png" : eye = "./images/view.png"
    document.getElementById("signin--passwordInput").type = type1
    document.getElementById("password--eye").src = eye
}

function signin(){
    window.location="./index.html"
}
function signup() {
    window.location="./signup.html"
}

let dataLength=signUpData.length
function signIn(event) {
    event.preventDefault()
    let email=document.getElementById("signin--input").value
    

    // let signUpData= JSON.parse(localStorage.getItem("signupData"))||[]
    console.log(signUpData.length)
    if(signUpData.length==0){
        alert("No account found, Please sign up first.")
        window.location="./signup.html"
    }
    let account=false
    signUpData.forEach((el,index)=>{
        
        
        if(email==el.email){

            accountGet(el)
            account=true
            
        }
        else if(index+1==dataLength && account==false){
            alert("Email is Incorrect.")
            console.log(index)
            console.log(dataLength)
        }
        
    })

}

function accountGet(el){
    let password=document.getElementById("signin--passwordInput").value
    if(password==el.password){
        alert("SignIn Successfully.")
        document.getElementById("signin--passwordInput").value=""
        document.getElementById("signin--input").value=""
        
    }
    else{
        alert("Password is Incorrect.")
    }
}


// signup page 


function signupFunction(x){
    if (x.type == "email") {
        let email = document.getElementById("signup--email").className = "hrStyle"
        document.getElementById("signup--emailHeading").innerText = "Enter new email"
    }
    else {
        let password = document.getElementById("signup--password").className = "hrStyle"
        document.getElementById("signup--passHeading").innerText = "Enter new password"
    }
    x.placeholder = "";
    return
    }

    function signupFunction1(x) {
    if (x.type == "email") {
        x.placeholder = "Enter new email"

    }
    else {
        x.placeholder = "Enter new password"
    }
    document.getElementById("signup--password").classList.remove("hrStyle")
    document.getElementById("signup--email").classList.remove("hrStyle")
    document.getElementById("signup--passHeading").innerText = ""
    document.getElementById("signup--emailHeading").innerText = ""

    return
}


// signup data 

// let signUpData=[]
// let signinData=JSON.parse(signUpData)||[]
