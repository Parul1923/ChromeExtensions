
chrome.storage.sync.get(['total','limit'],function(budget){
    document.querySelector("#total").textContent=budget.total;
    document.querySelector("#limit").textContent=budget.limit;
});

document.querySelector("#spendAmount").addEventListener("click",function(){
   chrome.storage.sync.get(['total','limit'],function(budget){
       var inTotal=0;
       if(budget.total){
           inTotal+=parseInt(budget.total);
       }
       var amount=document.querySelector("#amount").value;
       if(amount){
           inTotal+=parseInt(amount);
       }
       chrome.storage.sync.set({'total':inTotal},function(){
           if(amount && inTotal>=budget.limit){
           var notifOptions={
                type:'basic',
                iconUrl:'icons48.png',
                title:'Limit Reached!',
                message:"You've reached your limit!"
           };
           chrome.notifications.create('limitNotif',notifOptions,function(){
               
           });
        }
       });
       document.querySelector("#total").textContent=inTotal;
       document.querySelector("#amount").value="";
   });
});