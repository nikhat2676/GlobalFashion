
document.getElementById("clickButton").addEventListener("click", function(){
    var menuBox = document.getElementById("menuArea");
    if(menuBox.style.display == "none"){
        menuBox.style.display = "block";
    }else{
        menuBox.style.display = "none";
    }
});