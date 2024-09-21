function checkAge(){
    console.log("test")
    let age = document.getElementById("input").value;
    let alt = document.getElementById("alt-output");
    let main = document.getElementById("main-output");
    if(Number(age) < 0){
        alt.innerHTML ="Negative number is unacceptable";
        alt.style.display ="inline";
    }
    else if (isNaN(age)) {
        alt.innerHTML ="Error: You have failed to enter a number.";
        alt.style.display ="inline";
    }
    else if (Number(age)%1 !== 0) {
        alt.innerHTML ="Error: You have not entered a valid age (whole number).";
        alt.style.display ="inline";
    }
    else if (Number(age) >= 18 && Number(age) <= 120){
        document.getElementById("image").style.display="block";
    }
    else{
        alt.innerHTML ="You cannot see this content.";
        alt.style.display ="inline";
    }
}
