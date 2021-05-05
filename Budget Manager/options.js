

chrome.storage.sync.get('limit',function(budget){
    document.querySelector("#limit").value=budget.limit;
});
document.querySelector("#saveLimit").addEventListener("click",function(){
    var limit=document.querySelector("#limit").value;
    if(limit){
        chrome.storage.sync.set({'limit':limit},function(){
            close();
        });
    }
})
document.querySelector("#resetTotal").addEventListener("click",function(){
    chrome.storage.sync.set({'total':0},function(){
        var notifOptions={
            type:"basic",
            iconUrl:"icons48.png",
            title:"Reset Total",
            message:"Total is reset to 0!"
       };
       chrome.notifications.create('resetNotif',notifOptions,function(){
           
       });
    });
})