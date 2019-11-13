

(function(){
    var preload=document.getElementById('index');
    var loading=0;
    var id=setInterval(frame,60);
    function frame(){
        if(loading==80){
            preload.style.animation="fadeout";
            clearInterval(id);
            
            window.open("index.html","_self");

        } else{
            loading=loading+1;
            if(loading==60){
                preload.style.animation="fadeout";

            }
        }
    }
})();