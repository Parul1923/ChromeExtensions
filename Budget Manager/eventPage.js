var eventPageItems={
    id:"spendMoney",
    title:"Spend Money",
    contexts:["selection"]
};
chrome.contextMenus.create(eventPageItems);
chrome.contextMenus.onClicked.addListener(function(clickData){
    if(clickData.menuItemID=="spendMoney" && clickData.selectionText){
    chrome.storage.sync.get(['total','limit'],function(budget){
        var inTotal=0;
        if(budget.total){
            inTotal+=parseInt(budget.total);
        }
        if(Number.isInteger(clickData.selectionText)){
            inTotal+=parseInt(clickData.selectionText);
        }
        chrome.storage.sync.set({total:inTotal},function(){
            if(inTotal>=budget.limit){
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
    });
    }
});
chrome.storage.onChanged.addListener(function(changes,storageName){
  chrome.browserAction.setBadgeText({'text':changes.total.newValue.toString()});
});