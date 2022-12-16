var a=parseInt(prompt("enter the first text"));
var b=parseInt(prompt("enter the second text"));
var c=0;
function swap(){
    c=a;
    a=b;
    b=c;
    document.write(a+"<br>")
    document.write(c)
}
swap()