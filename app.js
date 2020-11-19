
var input = document.getElementById("todo");
var enter =document.getElementById("enter");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");
enter.addEventListener("click",addclick);

input.addEventListener("keypress",addkey);

var inputLength =()=>{
	return input.value.length;
} 

function view(){
   var li = document.createElement("li");

   li.appendChild(document.createTextNode(input.value));

   ul.appendChild(li);

   input.value="";

   function crossOut() {
    li.classList.toggle("done");
}

li.addEventListener("click",crossOut);
   //cloes btn
   var delbtn= document.createElement("button");
   delbtn.appendChild(document.createTextNode("X"));
   li.appendChild(delbtn);
   delbtn.addEventListener("click",deletetodo);
    // add class delete (display:none)
   function deletetodo(){
       li.classList.add("delete");
   }


}

function addclick (){
    if(inputLength()>0){
        view();
    }
}
function addkey(event){
    if(inputLength()> 0 && event.which === 13){
        view();
    }

}