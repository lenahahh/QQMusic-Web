/*-------------------------歌单推荐轮播图-------------------------*/
function onLoadA () { 
    var container = document.getElementById("hot_song_list")
    var list = document.getElementById("playlist");
    var buttons = document.getElementById("Hot_song_list_buttons").getElementsByTagName("span");
    var prev = document.getElementById("Hot_song_list_prev");
    var next = document.getElementById("Hot_song_list_next");
    var index = 1;//小圆点索引
    var animated = false;//定时器
    /*事件绑定：触发这个事件后要做什么，这一整个操作成为事件绑定*/

    /*图片切换时小圆点切换 */
    function showButton(){
        for(var i=0;i<buttons.length;i++){
            if(buttons[i].className=='on'){
                buttons[i].className='';
                break;
            }
        }
        buttons[index-1].className = 'on';
    }

    /*图片切换*/
    function animate(offset){
        animated = true;
        var newLeft = parseInt(list.style.left) + offset;
        var time = 900;//位移总时间
        var interval = 15; //位移间隔时间
        var speed = offset / (time / interval); //每次位移量
        var timer;

        function go(){
            if((speed < 0 && parseInt(list.style.left) > newLeft)||(speed > 0 && parseInt(list.style.left) < newLeft)){
                list.style.left = parseInt(list.style.left) + speed + 'px';
                setTimeout(go,interval);
            }
            else{
                animated = false;
                list.style.left = newLeft + 'px';
                if(newLeft > -1220){
                    list.style.left = -3660 + 'px';
                }
                if(newLeft < -3660){
                    list.style.left = -1220 + 'px';
                }
            }
        }
        go();
    }
    //自动切换
    function play() {
        timer = setInterval(function(){
            next.onclick(); 
        },3000);//定时器，触发右箭头，时间间隔300ms
    }
    //切换停止
    function stop() {
        clearInterval(timer);
    }
    /*左右箭头的点击事件 */
    next.onclick = function(){
        if(index==3){
            index = 1;
        }
        else{
            index+=1;
        }
        showButton();
        if(animated == false){
            animate(-1220);
        }
        
    }
    prev.onclick = function(){
        if(index==1){
            index = 3;
        }
        else{
            index-=1;
        }
        showButton();
        if(animated == false){
            animate(1220);
        }
    }

    /*点击小圆点切换 */
    for(var i =0 ;i<buttons.length;i++){
        buttons[i].onclick = function (){
            if(this.className=='on'){
                return;
            }
            var myIndex = this.getAttribute('index');
            var offset = -1220 * (myIndex - index);
            if(animated == false){
                animate(offset);
            }
            index = myIndex;
            showButton();
        }
    }
    container.onmouseover = stop;
    container.onmouseout = play;
}