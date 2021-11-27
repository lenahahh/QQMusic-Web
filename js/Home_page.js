//-----------------------搜素功能----------------------
function Search(){
    var content = document.getElementById("search_txt").value.toString();
    var address = "https://y.qq.com/n/ryqq/search?w="+content+"&t=song";
    window.location = address.toString();
}


//-------------------导入轮播图JS文件--------------------
document.write('<script type="text/javascript" src="js/Event_recomment_lbt.js"></script>');
document.write('<script type="text/javascript" src="js/Hot_song_list_lbt.js"></script>');

/*window.onload当页面加载完毕执行以下代码*/
window.onload = function(){
    onLoadA();onLoadB();
    //两个JS文件，分别将轮播图方法定义为onLoadA(),onLoadB()
}
