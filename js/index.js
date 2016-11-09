
$(function(){
    // 时间转化
	function time(v){ 
		var v=Math.floor(v); 
		var s=v%60;  
		var m=Math.floor(v/60);
		s=(s<10)?('0'+s):s; 
		return m+':'+s;
	}
    

    // 取对象
	var audio=$("audio")[0];
	var process=$(".tiao1")
	var process1=$(".tiao2")
	var pi=$(".pi");
	var back=$(".next");
	var play=$(".play");
	var shang=$(".prev");
	var start=$(".start");
	var end=$(".end");
	var name=$(".name");
	var author=$(".author");
	var bg=$(".pic");
	var center=$(".center")
	var imgs=$(".img")
	var ci=$(".lyric")
	var block=$(".block");
	var model=$(".round")
	var m_start;
	
	// 播放列表
	var s_list=[{
		name:"大梦",
		src:"music/陈粒 - 大梦.mp3",
		author:"陈粒",
		img:"image/1.jpg",
		album:"小梦大半",
		state:"0",
		content:"[00:00.56]大梦[00:06.42]作词：一只团子[00:08.02]作曲：陈粒[00:10.38]演唱：陈粒[00:11.84][00:16.28]天地昏黄  我于其间[00:23.80]尘沙漫卷  遮日蔽天[00:30.39][00:30.89]我的左眼火山喷发[00:35.53]熔岩如瀑[00:38.75]右眼中星云闪烁[00:42.61]一瞬间宇宙生[00:46.19]一瞬间宇宙灭[00:48.94]  [00:50.73]双手托住奔啸巨河[00:54.83]不知来处[00:56.40]不见尽头[00:58.28]足趾有黑发缠绕[01:01.98]大风卷来[01:03.93]如如不动[01:09.80]  [01:21.42]天地昏黄  我于其间[01:28.79]风烟滚滚  流云如焰[01:35.25]  [01:36.57]我的左眼火山喷发[01:40.80]熔岩如瀑[01:43.92]右眼中星云闪烁[01:47.83]一瞬间宇宙生[01:51.22]一瞬间宇宙灭[01:54.78]  [01:59.57]双手托住奔啸巨河[02:03.30]不知来处[02:05.39]不见尽头[02:07.29]足趾有黑发缠绕[02:11.13]大风卷来[02:13.15]如如不动[02:23.40] "
	},{
		name:"Young And Beautiful",
		src:"music/Lana Del Rey - Young And Beautiful.mp3",
		author:"Lana Del Rey",
		img:"image/33.png",
		album:"In heaven",
		state:"0",
		content:"[00:00.68]Young And Beautiful[00:01.60]Lana Del Rey[00:02.38][00:16.20]I've seen the world[00:18.17]Done it all, had my cake now[00:24.28]Diamonds, brilliant, and Bel-Air now[00:32.09]Hot summer nights, mid-July[00:36.61]When you and I were forever wild[00:40.60]The crazy days, the city lights[00:44.57]The way you'd play with me like a child[00:49.07][00:50.20]Will you still love me when I'm no longer young and beautiful[00:58.39]Will you still love me when I got nothing but my aching soul[01:05.43]I know you will, I know you will[01:09.37]I know that you will[01:13.26]Will you still love me when I'm no longer beautiful[01:20.57][01:22.15]I've seen the world, lit it up as my stage now[01:30.22]Channeling angels in the new age now[01:38.09]Hot summer days, rock and roll[01:42.55]The way you'd play for me at your show[01:46.78]And all the ways I got to know[01:50.70]Your pretty face and electric soul[01:55.00][01:56.42]Will you still love me when I'm no longer young and beautiful[02:04.59]Will you still love me when I got nothing but my aching soul[02:12.43]I know you will, I know you will[02:16.40]I know that you will[02:20.35]Will you still love me when I'm no longer beautiful[02:27.56][02:29.77]Dear lord when I get to heaven[02:33.78]Please let me bring my man[02:37.88]When he comes tell me that you'll let me[02:42.00]Father tell me if you can[02:45.44][02:45.80]Oh that grace, oh that body[02:49.74]Oh that face makes me wanna party[02:54.01]He's my sun, he makes me shine like diamonds[03:01.39][03:03.23]Will you still love me when I'm no longer young and beautiful[03:11.44]Will you still love me when I got nothiyg but my aching soul[03:18.60]I know you will, I know you will[03:22.66]I know that you will[03:26.73]Will you still love me when I'm no longer beautiful[03:35.16]Will you still love me when I'm no longer beautiful[03:44.01]Will you still love me when I'm no longer young and beautiful[03:51.05]"
	},{
		name:"陆垚知马俐",
		src:"music/火星电台 - 陆垚知马俐.mp3",
		author:"火星电台",
		img:"image/22.jpg",
		album:"陆垚知马俐",
		state:"0",
		content:"[00:00.00]轻音乐，请欣赏。"
	},{
		name:"You",
		src:"music/Approaching Nirvana - You.mp3",
		author:"Approaching Nirvana",
		img:"image/4.jpg",
		album:"touch sky",
		state:"0",
		content:"[00:00.00]轻音乐，请欣赏。"
	}
	,{
		name:"我从悬崖跌落",
		src:"music/谢春花-我从崖边跌落.mp3",
		author:"谢春花",
		img:"image/5.jpg",
		album:"算云烟",
		state:"0",
		content:"[00:00.00]轻音乐，请欣赏。"
	}]

    

    var now=0;
	var left;		     
	var show=1;
	var volumeleft;
	var t;
	var num=0;

    // 切换歌曲
	function next(){
		
		now=now+1;
		if(now>=s_list.length){
			now=0;
		}
		audio.src=s_list[now].src;
		render(s_list,songlist);
	}
	function prev(){
		
		now=now-1;
		if(now<0){
			now=s_list.length-1;
		}
		audio.src=s_list[now].src;
		render(s_list,songlist);
	}


	function render(obj,obj2){				
		obj2.empty();
		for(var i=0;i<obj.length;i++){
			if(i==now){
				audio.src=obj[i].src;
				audio.play()
				c="active"
			}else{
				c=""
			}
			$("<li class='"+c+"'><p class='author1'>"+s_list[i].author+"</p><span class='iphone'>&#xe878;</span><span class='name'>"+s_list[i].name+"</span><span>-</span><span class='album'>"+s_list[i].album+"</span><span class='set'>&#xe60a;</span></li>").
			appendTo(obj2)
		}
	}
	
	//事件
	play.on("touchend",function(){
		if(audio.paused){
			audio.play();
		}else{
			audio.pause();
		}
		return false;
	})										
	//进度条点击
	process.on("touchend",function(e){						
		show=0;
	    left=e.originalEvent.changedTouches[0].clientX-process.offset().left;
		audio.currentTime=audio.duration* left/process.width();
		return false;
	})
	
	pi.on("click",false)
	// 进度条拖进
	pi.on("touchstart",function(e){							
		ox=e.originalEvent.changedTouches[0].clientX-pi.offset().left;
		var start=pi.width()/2-ox;
		$(document).on("touchmove",function(e){
			var left1=e.originalEvent.changedTouches[0].clientX-process.offset().left+start;
				if(left1>=process.width()||left1<=0){
					return;	
				}
			audio.currentTime=left1/process.width()*audio.duration;
			
		})
		return false;
	})
	pi.on("touchend",function(){
		$(document).off("touchmove")
		return false;
	})
    // 下一首
	back.on("touchend",function(){
		
		show=0;
		next();
		return false;
	});														
	// 上一首
	shang.on("touchend",function(){
		
		show=0;
		prev();
		return false;
	});														
	
	block.on("touchstart",function(e){
		 m_start=e.originalEvent.changedTouches[0].clientX;
		 return false;
	})
	block.on("touchend",function(e){
		var bend=e.originalEvent.changedTouches[0].clientX;
		if(bend-m_start>=50){
			next();
		}
		if(bend-m_start<=-50){
			prev();
		}
		return false;
	})
	
	
	var round=$(".round")
	round.on("touchend",function(){
		if(round.attr("type")==1)
			{round.html("&#xe67a;")
			round.removeAttr("type")
			}
		else{
			round.html("&#xe62f;")
			round.attr("type",1)
		}
		return false;
	})


	//播放列表
	var songlist=$(".songlist")  
	var boxs=$(".boxs")
	var ss=$(".zhe");
	var tx=$(".tc1");
	var th=tx.height();
	var set=$(".set");
	var p_list=$(".lists")
	tx.css("bottom",-th);
	var now1;
	var next1=$("#next")
	var delete1=$("#delete")
	var list=$(".list")
	var num=$("#num")
	var lists=$("#lists")
	var top;
	var clear=$("#clear")
	render(s_list,songlist);
	ren(s_list,lists)
	

	function hidden(){
		ss.animate({"opacity":0},200,"linear",function(){
			ss.css("display","block")
		})
		tx.animate({"bottom":-th},200,"linear",function(){
			tx.css("display","block")
		})
	}
	
	function del(){
		if(now1==now){
			s_list.splice(now1,1)
			localStorage.s_list=JSON.stringify(s_list);
			render(s_list,songlist);
			ren(s_list,lists);
		}
		if(now1<now){
			now--;
			s_list.splice(now1,1)
			localStorage.s_list=JSON.stringify(s_list);
			render(s_list,songlist);
			ren(s_list,lists);
		}
		if(now1>now){
			s_list.splice(now1,1)
			localStorage.s_list=JSON.stringify(s_list);
			render(s_list,songlist);
			ren(s_list,lists);
		}
	}
	
	function ren(obj,obj2){				
		obj2.empty();
		num=$("#num")
		num.html(s_list.length);
		for(var i=0;i<obj.length;i++){
			if(i==now){
				
				d="active"
			}else{
				d=""
			}
			$("<li class='"+d+"'><a>&#xe827;</a><span>"+s_list[i].name+"</span><span>-</span><span>"+s_list[i].author+"</span><span class='delete'>&#xe609;</span></li>").appendTo(lists)
		}
	}

	//播放列表点击
	songlist.on("touchend","li",function(){			
		var index=$(this).index();
		if(index==now){
			if(audio.paused){
				audio.play();
				
			}
			else{
				audio.pause()
			}
			return;
		}
		now=index;
		show=0;
		render(s_list,songlist);
		return false;
	})
	
	// boxs.on("touchend",function(){				  /////播放列表添加
		
	// 	var index=$(this).index();
	// 	var music=JSON.parse($(this).attr("data-role"))
	// 	s_list.push(music)
	// 	localStorage.s_list=JSON.stringify(s_list);
	// 	render(s_list,songlist);
	// 	return false;
	// })	

	//播放列表删除
	songlist.on("touchend",".set",function(){		
		ss.css("display","block").animate({"opacity":1},200,"linear")
		tx.css("display","block").animate({"bottom":0},200,"linear")
		var lis=$(this).closest("li")
		now1=lis.index();
		return false;
	})
	
	ss.on("touchend",function(){
		hidden();
		p_list.animate({"bottom":-top},200,function(){
			p_list.css("display","none")
			return false;
		})
		return false;
	})
	tx.on("touchend",function(){
		hidden();
		return false;
	})
	delete1.on("touchend",function(){
		hidden();
		del();
		return false;
	})
	
	next1.on("touchend",function(){
		show=audio.paused;
		next();
		hidden()
		return false;
	})
	
	list.on("touchend",function(){///////通过lists第二种删除
		ren(s_list,lists)
		top=p_list.height();
		p_list.css({"bottom":-top,"display":"block"})
		p_list.animate({"bottom":0},200,"linear")
		ss.css("display","block").animate({"opacity":1},200,"linear")
		return false;
	})
	
	lists.on("touchend","li",function(){
		var index=$(this).index();
		if(index==now){
			if(audio.paused){
				audio.play();
				
			}
			else{
				audio.pause()
			}
			return;
		}
		now=index;
		show=0;
		render(s_list,songlist);
		ren(s_list,lists);
		return false;
	})
	
	lists.on("touchend",".delete",function(){
		var index=$(this).closest("li").index();
		now1=index;
		del();
		return false;
	})
	
	clear.on("touchend",function(){			/////清空列表
		s_list=[]
		localStorage.s_list=JSON.stringify(s_list)
		render(s_list,songlist);
		ren(s_list,lists);
		return false;
	})
	
	//屏幕相互切换
    imgs.on("touchend",function(){
    	
		$(".main").css("display","none");
		$(".lyric").css("display","block");
    })
    ci.on("touchend",function(){
    	$(".main").css("display","block");
		$(".lyric").css("display","none");
    })


    //音量
    //点击事件
	$(".block").css("display","block")
	$("display").css("display","block")
	var volume=$(".volume1")
	var volume1=$(".volume2")
	var vi=$(".vi")
	var vx;									
	vi.on("touchend",false)							
	var mute=$("#mute")
	
	vi.on("touchstart",false)
	
	volume.on("touchend",function(e){
		volumeleft=e.originalEvent.changedTouches[0].clientX-volume.offset().left;
		if(volumeleft<0||volume>volume.width()){
			return;
		}
		mute.removeAttr("vol")	
		audio.volume=volumeleft/volume.width();
		return false;
	})
	
	//音量拖拽
	vi.on("touchstart",function(e){					
		vx=e.originalEvent.changedTouches[0].clientX-vi.offset().left;
		var start=vi.width()/2-vx;
		$(document).on("touchmove",function(e){
			var left1=e.originalEvent.changedTouches[0].clientX-volume.offset().left+start;
				if(left1>=volume.width()||left1<=0){
					return;	
				}
			audio.volume=left1/volume.width();
			return false;
		})	
		return false;
	})
	vi.on("touchend",function(){
		$(document).off("touchmove")
		return false;
	})
	
	//静音
	mute.on("touchend",function(){					 
		if($(this).attr("vol")){
				audio.volume=$(this).attr("vol")
				$(this).removeAttr("vol")
				mute.html("&#xe827;")
			}else{
				$(this).attr("vol",audio.volume)
				audio.volume=0;
				mute.html("&#xe62d;")
			}	
	})                                           
		console.log(s_list[0])
			


    //歌词
		function lyric_ctrl()
		{
			var lyricObj=s_list[now].content;
			var temp=lyricObj.split("[");
			var html1="";
			for(var i=0;i<temp.length;i++)
			{
				var arr=temp[i].split("]");
				var text=(arr[1]);
				var time=arr[0].split(",");
				var temp2=time[0].split(".");
				var ms=temp2[1];//毫秒
				var temp3=temp2[0].split(":");			
				var s=temp3[1];//秒
				var m=temp3[0];//分
				var s_sum=parseInt(m*60)+parseInt(s);
				if(text)
				{
					html1+="<p id='lyric"+s_sum+"'>"+text+"</p>";
				}	
			}
			
			$(".lyric2").html(html1)
		}
		
	
	function play2(obj){
		var lyrict1="lyric"+(Math.floor(audio.currentTime)+2);
		var p1=$(".lyric2 p")
		for(var i=0;i<p1.length;i++){
			if(lyrict1==p1.eq(i).attr("id")){
				p1.css("color","#a7a1a1")
				p1.eq(i).css("color","#fff");
				$(".lyric2").animate({"top":-i*1.2+3.4+"rem"},1000)
			}
		}
	}

	
	//audio 事件
	
	$(audio).on("loadstart",function(){
		name.html(s_list[now].name);
		author.html(s_list[now].author);
		$("#gm").html(s_list[now].name);
		$("#gs").html(s_list[now].author);
		bg.attr("src",s_list[now].img);
		imgs.css("background-image","url("+s_list[now].img+")");
		$(".lyric2").empty();
		$(".lyric2").css("top","3.4rem")
		lyric_ctrl();
		num=0
		
	})
	
	$(audio).on("process",function(){
		
	})
	
	$(audio).on("canplay",function(){
		
		start.html(time(audio.currentTime));
		end.html(time(audio.duration));
		if(show){
			audio.pause();
		}else{
			audio.play();
		}
	})
	
	$(audio).on("play",function(){
		play.html("&#xe658;")
		imgs.css("animation-play-state","running")
})
	
	$(audio).on("pause",function(){
		play.html("&#xe64b;")
		imgs.css("animation-play-state","paused")
	})
	
	$(audio).on("timeupdate",function(){
		
		pi.css("left",process.width()*audio.currentTime/audio.duration-pi.width()/2);
		process1.css("width",process.width()*audio.currentTime/audio.duration);
		start.html(time(audio.currentTime));
		play2();
		num++;
	})
	
	
	$(audio).on("volumechange",function(){
		volume1.css("width",audio.volume*volume.width())
		vi.css("left",audio.volume*volume.width()-vi.width()/2)
	})
	
	
})
