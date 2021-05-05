chrome.runtime.sendMessage({todo:"showPageAction"});
chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){
    if(request.todo=="changeColor"){
        var color="#"+request.clickedColor;
        $('h1').css('font-style','italic');
        $('h1').css('color', Color);
    }
});