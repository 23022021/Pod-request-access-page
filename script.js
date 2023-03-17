
const email = document.getElementById("email-input");

const submitBut = document.getElementById("submit-email");
const error2 = document.querySelector(".p-error");
const succes =  document.querySelector(".p-success");

let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function testMail(input){

    if(emailRegex.test(input.value)){
        console.log("this is true");
        error2.style.display = "none";
        succes.style.display = "block";
    
    }else if(!emailRegex.test(input.value)){
        console.log("this is false");
        error2.style.display = "block";
        succes.style.display = "none";

    }

}

    submitBut.addEventListener('click', (event)=>{
        event.preventDefault();
        testMail(email);
        console.log("clicked");
    })

   