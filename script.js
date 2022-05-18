var values=document.getElementById("values");
let button=document.querySelectorAll("button");
let srcValues="";
let i;
for (i=0; i<button.length; i++){
button[i].onclick=function(e){
    var numberEntered=e.target.innerHTML;
    if(numberEntered=="c")
    {
        values.value="";
    }else if (numberEntered=="=")
    {
        values.value=eval(srcValues);
    }else
    {
        srcValues+=numberEntered;
        values.value=srcValues;
    }  
}
};
