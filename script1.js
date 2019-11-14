$(".more").toggle(function(){
    $(this).text("less..").siblings(".cards_item").show();    
}, function(){
    $(this).text("more..").siblings(".cards_item_hidden").hide();    
});