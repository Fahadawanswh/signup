const signupBtn= document.querySelector("#Sign-Up");
const fname=document.querySelector(".fname");
const sname=document.querySelector(".sname");
const email=document.querySelector(".email");
const pass=document.querySelector(".pass");
const datebirth=document.querySelector(".datebirth");
const gender=document.getElementsByName("gender");
const triangle1=document.querySelector(".triangle1");
const triangle2=document.querySelector(".triangle2");
const triangle3=document.querySelector(".triangle3");
const triangle4=document.querySelector(".triangle4");
const triangle5=document.querySelector(".triangle5");
const triangle6=document.querySelector(".triangle6");
const exclamation1=document.querySelector(".exclamation1");
const exclamation2=document.querySelector(".exclamation2");
const exclamation3=document.querySelector(".exclamation3");
const exclamation4=document.querySelector(".exclamation4");
const exclamation5=document.querySelector(".exclamation5");
const exclamation6=document.querySelector(".exclamation6");
const byear=document.querySelector("#year");
const bday=document.querySelector("#day");
const bmonth=document.querySelector("#month");
const radio= document.querySelector(".class");


function validate() {
      
    if( fname.value == "" ) {
      exclamation1.style.display="inline"
      
      fname.style.borderColor="red"
    }
    else{
      exclamation1.style.display="none"
      
      fname.style.borderColor="#ccd0d5"
      fname.style.outline="none"
    }
    

  
   if(sname.value == "") {
    exclamation2.style.display="inline"
   
    sname.style.borderColor="red"
    }
    else{
      exclamation2.style.display="none"
      
      sname.style.borderColor="#ccd0d5"
      sname.style.outline="none"
    }

    if(email.value == "") {
      exclamation3.style.display="inline"
      
      email.style.borderColor="red"
      }
      else{
        exclamation3.style.display="none"
        
        email.style.borderColor="#ccd0d5"
        email.style.outline="none"
      }
     
        if(pass.value == "") {
          exclamation4.style.display="inline"
          
          pass.style.borderColor="red"
          } 
          else{
            exclamation4.style.display="none"
            
            pass.style.borderColor="#ccd0d5"
            pass.style.outline="none"
          }
          
          if(byear.value>2013 || byear.value=='year'){
            exclamation5.style.display="inline"
           
            byear.style.borderColor="red"
           
          } 
          else{
            exclamation5.style.display="none"
            
            byear.style.borderColor="#ccd0d5"
            byear.style.outline="none"
          }
          if(bday.value=='day'){
            exclamation5.style.display="inline"
            
            bday.style.borderColor="red"
           
          } 
          else{
            exclamation5.style.display="none"
            
            bday.style.borderColor="#ccd0d5"
            bday.style.outline="none"
          }
          if(bmonth.value=='month'){
            exclamation5.style.display="inline"
            
            bmonth.style.borderColor="red"   

          } 
          else{
            exclamation5.style.display="none"
            
            bmonth.style.borderColor="#ccd0d5"
            bmonth.style.outline="none"
          }

if(gender[0].checked==false && gender[1].checked==false && gender[2].checked==false){

  exclamation6.style.display="inline"
 

}
else{
  
  exclamation6.style.display="none";
}


}
fname.addEventListener("focus",(e)=>{
  exclamation1.style.display="none"
  fname.style.outline="none"
  fname.style.borderColor="#ccd0d5"
  triangle1.style.display="inline"
  sname.style.borderColor="red"
  exclamation2.style.display="inline"
  triangle2.style.display="none"
  triangle3.style.display="none"
  triangle4.style.display="none"
  pass.style.borderColor="red"
  exclamation4.style.display="inline"
  email.style.borderColor="red"
  exclamation3.style.display="inline"
  

})
sname.addEventListener("focus",(e)=>{
  exclamation2.style.display="none"
  sname.style.outline="none"
  sname.style.borderColor="#ccd0d5"
  exclamation1.style.display="inline"
  fname.style.borderColor="red"
  triangle1.style.display="none"
  triangle2.style.display="inline"
  triangle3.style.display="none"
  triangle4.style.display="none"
  pass.style.borderColor="red"
  exclamation4.style.display="inline"
  email.style.borderColor="red"
  exclamation3.style.display="inline"

})
email.addEventListener("focus",(e)=>{
  exclamation3.style.display="none"
  email.style.outline="none"
  email.style.borderColor="#ccd0d5" 
  exclamation1.style.display="inline"
  exclamation2.style.display="inline"
  exclamation4.style.display="inline"
  fname.style.borderColor="red"
  sname.style.borderColor="red"
  pass.style.borderColor="red"
  triangle1.style.display="none"
  triangle2.style.display="none"
  triangle4.style.display="none"
  triangle3.style.display="inline"
  

})
pass.addEventListener("focus",(e)=>{
  exclamation4.style.display="none"
  pass.style.outline="none"
  pass.style.borderColor="#ccd0d5" 
  exclamation1.style.display="inline"
  exclamation2.style.display="inline"
  exclamation3.style.display="inline"
  fname.style.borderColor="red"
  sname.style.borderColor="red"
  email.style.borderColor="red"
  triangle1.style.display="none"
  triangle2.style.display="none"
  triangle3.style.display="none"
  triangle4.style.display="inline"

})