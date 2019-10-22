window.onload=function (){
this.document.getElementById("biggerBtn").onclick=fontTimer;
this.document.getElementById("blingBox").onchange=checkBoxbling;
this.document.getElementById("malkovitchBtn").onclick = malkcheckHandler
this.document.getElementById("igpayBtn").onclick = piggify
}
function fontTimer() {
    setInterval(btnalert, 500);
}
var iterations =7;
function btnalert(){
    if (iterations >0){
    var textArea=document.getElementById("txtArea");

    //alert("Hello, world!");
    var size= window.getComputedStyle(txtArea, null).getPropertyValue('font-size');
   size=parseInt(size)+2;
   document.getElementById("txtArea").style.fontSize=size + "px";
   iterations--;
    }
    else{
        clearInterval(timer);
    }
}

function checkBoxbling(){
    var page = document.getElementById("page");
    var textArea=document.getElementById("txtArea");
    var checkBox= document.getElementById("blingBox");
    if(checkBox.checked===true)
    {
        textArea.style.fontWeight="bold";
        textArea.style.color="green";
        textArea.style.textDecoration="underline";
        page.style.backgroundImage = "url(\"http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg\")";
    
    }
    else
    {
        txtArea.style.fontWeight = "normal";
        txtArea.style.color = "";
        txtArea.style.textDecoration = "none";
        page.style.backgroundImage = "";

    }
}
    function malkcheckHandler() {
        var txtArea = document.getElementById("txtArea");
        var str = txtArea.value.split(" ");
        var txtValue = "";
        for (var i = 0; i < str.length; i++) {
            if (str[i].length >= 5) {
                str[i] = "Malkovich";
                txtValue = str.join(" ");
            }
        }
        document.getElementById("txtArea").value = txtValue;
    }
    
    function piggify() {
        var txtArea = document.getElementById("txtArea");
        var str = txtArea.value.toLowerCase();
        var st = "";
        for (var j = 0; j < str.length; j++) {
            if ("aeiouAEIOU".indexOf(str.charAt(j)) !== -1) {
                st = st + str.substr(j, str.length);
                st = st + str.substr(0, j) + "ay";
                break;
            }
        }
        document.getElementById('txtArea').value = st;
}