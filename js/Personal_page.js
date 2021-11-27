function $(id){return document.getElementById(id);}//根据ID获取文档对象

function ALLSongPlay(){
	document.getElementById("checkAll").checked = true;
	CheckAll();
	var audio = document.getElementById("mp3Btn");
	audio.play();
}

//复选框 --  全选和取消全选
function CheckAll(){
	var checkAllBox = document.getElementById("checkAll");
	var checkInBox = document.getElementsByClassName("checkIn");
	if(checkAllBox.checked == true){
		for(i=0;i<checkInBox.length;i++){
			checkInBox[i].checked = true;
		}
	}
	else{
		for(i=0;i<checkInBox.length;i++){
			checkInBox[i].checked = false;
		}
	}
}
//收藏 --- 点亮爱心图标
function Collect_songs(id){
	if($(id).checked == false){
		$(id).style.cssText = "background-position: 0 -231px";
		$(id).checked = true;
		alert("已取消收藏");
	}
	else{
		$(id).style.cssText = "background-position: 0 -195px";
		$(id).checked = false;
		alert("已收藏");
	}
}

function Song_delete(id){
	id.parentNode.parentNode.parentNode.remove();
}

//点击播放按键 --- 播放歌曲 --修改底部状态条的信息
function Audio_play(id){
	// 获取歌曲歌曲名

	var sid = $(id).getAttribute("id");   /*getAttribute()  获取ID名 */
	var audio = document.getElementById("mp3Btn");
	audio.src = "audio/"+ sid +".mp3";
	audio.play();

	// 获取歌曲名、歌手名
	
	// parentNode  获取当前节点的父节点
	// nextElementSibling  获取当前节点的兄弟节点

	var elem1 = $(id).parentNode.nextElementSibling.id;         //获取歌曲的ID名
	var elem2 = $(id).parentNode.nextElementSibling.nextElementSibling.id;   //获取歌手的ID名
	var Songname = document.getElementById(elem1).innerHTML;
	var Songplayer = document.getElementById(elem2).innerHTML;

	// 将底部播放栏的歌曲信息进行修改
	document.getElementById("songName").innerHTML = Songname;
	document.getElementById("songPlayer").innerHTML = SongPlayer;
}

