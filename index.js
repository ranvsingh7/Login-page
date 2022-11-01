function myFunction(x){
    if(x.type=="email"){
        let email= document.getElementById("signin--email").className="hrStyle"
        document.getElementById("signin--emailHeading").innerText="Email address"
    }
    else{
        let password= document.getElementById("signin--password").className="hrStyle"
        document.getElementById("signin--passHeading").innerText="Password"
    }
    
    
    x.placeholder="";
    return
}

function myFunction1(x){
    if(x.type=="email"){
        x.placeholder="Email address"

    }
    else{
        x.placeholder="Password"
    }
    document.getElementById("signin--password").classList.remove("hrStyle")
    document.getElementById("signin--email").classList.remove("hrStyle")
    document.getElementById("signin--passHeading").innerText=""
    document.getElementById("signin--emailHeading").innerText=""

    return
}

function removeEye(){

    let type= document.getElementById("signin--passwordInput").type
    let type1
    let eye
        type == "password" ? type1="Text":type1="password"
        type =="password" ? eye="./images/hide.png":eye="./images/view.png"
        document.getElementById("signin--passwordInput").type=type1
        document.getElementById("password--eye").src=eye
    // let eye=document.getElementById("password--eye").src=="./images/eye.png"
    // console.log(eye)
}

