var color=document.querySelector("#changeColour").value;
$("#changeColour").on("change paste keyup",function(){
    color=$(this).val();
});
$('#button').click(function(){      
    chrome.tabs.query({active:true,currentWindow: true}, function(tabs){
       chrome.tabs.sendMessage(tabs[0].id, {todo: "changeColor", clickedColor: color });
   });
});