function btnclick(val)
{
    console.log(val);
 document.getElementById("screen").value+=val;
}
function btnclear()
{
    document.getElementById("screen").value="";
}
function equalclick()
{
    var text=document.getElementById("screen").value;
    var result=eval(text);
    document.getElementById("screen").value=result;
}
function btnbackspace()
{
   
    var res=document.getElementById("screen").value;
    res=res.toString();
    res=res.substr(0,res.length-1);
    document.getElementById('screen').value=res;
    
}