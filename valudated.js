function validfname(){
    console.log("helloo ggg") 
let fname=document.getElementById("firstname").value
if(fname==""){
   // document.getElementById("fnamemsg").innerHTML="first name is required"
   //document.getElementById("fnamemsg").style.color="red"
   displaymsg("first name is required","fnamemsg","red");
    return false;
}
else if(fname.length<3){
   // document.getElementById("fnamemsg").innerHTML="first name is greater the 2 character"
    //document.getElementById("fnamemsg").style.color="red"
    displaymsg("first name is greater then 2 character","fnamemsg","red")
    return false
}
else if(!fname.match(/^([a-zA-Z])+$/)){
displaymsg("First Name only Accept alphabets","fnamemsg","red")
return false
}
else{
   // document.getElementById("fnamemsg").innerHTML="valid first name"
//document.getElementById("fnamemsg").style.color="green"
displaymsg("valid first name","fnamemsg","green")
    return true;
}
}
function validlname(){
    let lname=document.getElementById("lastname").value
    if(lname==""){
        //document.getElementById("lnamemsg").innerHTML="last name is required"
      //  document.getElementById("lnamemsg").style.color="red"
      displaymsg("Last name is required","lnamemsg","red")
        return false;
    }
    else if(lname.length<3){

         displaymsg("Last name is greater then 2 character","lnamemsg","red")
         return false
     }
     else if(!lname.match(/^([a-zA-Z])+$/)){
        displaymsg("last name only accept alphabets","lnamemsg","red")
        return false
     }
    else{
        //document.getElementById("lnamemsg").innerHTML="valid last name"
       // document.getElementById("lnamemsg").style.color="green"
       displaymsg("valid last name","lnamemsg","green")
    }
}
function validemail(){
    console.log("helloo")
    let email=document.getElementById("email").value
    if(email==""){
        displaymsg("enter correct email address","emailmsg","red")
        return false
    } 
    else if (email.lenght<3){
        displaymsg("valid email address","emailmsg","red")
        return false
    
    }
    else if(!email.match(/^([a-z0-9])[a-z0-9\_\-\.]+\@+(([a-z])+\.)+([a-z])+$/))
    {
        displaymsg("invalid email","emailmsg","red")
        return false
    }

   else{
           displaymsg("valid email","emailmsg","green")
           return true
       
    }
}

function validpassword(){
    let password=document.getElementById("password").value
    if(password==""){
        displaymsg("needs at least 8 characters in total ","passwordmsg","red")
        return false
    } 
    else if (password.lenght<3){
        displaymsg("valid password","passwordmsg","green")
        return false
    }
    else if(!password.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\@\#\$\&\*\.\-\_]).{8,50}$/)){
        displaymsg("invalid password","passwordmsg","red")
        return false
    }
   // else if(!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/)){
     //   displaymsg("invalid password","passwordmsg","red")
    //}
    else{
        
       displaymsg("valid password ","passwordmsg","green")
       return true
    }
}
function validfrom(){
 

    if(validfname() && validlname() && validemail() && validpassword()){
        return true
    }
    else{
        return false
    }
}
function displaymsg(msg,idvalue,colorvalue){
    document.getElementById(idvalue).innerHTML=msg
    document.getElementById(idvalue).style.color=colorvalue;

}