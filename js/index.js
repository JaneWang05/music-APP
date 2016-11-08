$(function(){
	/////////////////////////////////////////////////////播放页面
	var audio=$("audio")[0];
	var name=$(".name");
	var author=$(".author");
	var start=$(".start");
	var end=$(".end");
	var process=$(".process1")
	var process1=$(".process2")
	var pi=$(".pi");
	var back=$(".forword");
	var play=$(".play");
	var forward=$(".back");
	var bg=$(".pic");
	var center=$(".center")
	var imgs=$(".img")
	var ci=$(".lyric")
	var now=0;
	var ww1=process.width();
	var left;		//进度条的值
	var show=1;
	var volumeleft;
	var t;
	var num=0;
	var block=$(".block");
	var bstart;	//开始位置
	var return1=$("#return");
	var model=$(".round")
	var s_list=[{
		name:"大梦",
		src:"music/陈粒 - 大梦.mp3",
		author:"陈粒",
		img:"image/1.jpg",
		album:"小梦大半",
		state:"0",
		// content:"[00:00.00]七里香 [00:03.59]周杰伦 - 七里香 [00:06.59]作词：方文山 [00:09.59]作曲：周杰伦 [00:12.59]专辑：七里香 [00:29.59]窗外的麻雀 在电线杆上多嘴 [00:36.47]你说这一句 很有夏天的感觉 [00:43.21]手中的铅笔 在纸上来来回回 [00:49.46]我用几行字形容你是我的谁 [00:56.25]秋刀鱼的滋味 猫跟你都想了解 [01:03.40]初恋的香味就这样被我们寻回 [01:09.60]那温暖的阳光 像刚摘的鲜艳草莓 [01:16.16]你说你舍不得吃掉这一种感觉 [01:22.96]雨下整夜 我的爱溢出就像雨水 [01:29.60]院子落叶 跟我的思念厚厚一叠 [01:36.27]几句是非 也无法将我的热情冷却 [01:43.91]你出现在我诗的每一页 [01:50.20]雨下整夜 我的爱溢出就像雨水 [01:56.52]窗台蝴蝶 像诗里纷飞的美丽章节 [02:03.34]我接着写 把永远爱你写进诗的结尾 [02:10.83]你是我唯一想要的了解 [02:43.86]雨下整夜 我的爱溢出就像雨水 [02:50.64]院子落叶 跟我的思念厚厚一叠 [02:57.29]几句是非 也无法将我的热情冷却 [03:04.86]你出现在我诗的每一页 [03:09.84] [03:11.22]那饱满的稻穗 幸福了这个季节 [03:18.51]而你的脸颊像田里熟透的蕃茄 [03:24.67]你突然对我说 七里香的名字很美 [03:31.15]我此刻却只想亲吻你倔强的嘴 [03:37.89]雨下整夜 我的爱溢出就像雨水 [03:44.58]院子落叶 跟我的思念厚厚一叠 [03:51.35]几句是非 也无法将我的热情冷却 [03:58.94]你出现在我诗的每一页 [04:05.22]整夜 我的爱溢出就像雨水 [04:11.62]窗台蝴蝶 像诗里纷飞的美丽章节 [04:18.61]我接着写 把永远爱你写进诗的结尾 [04:25.97]你是我唯一想要的了解 [04:34.29]"
	},{
		name:"W",
		src:"music/JYJ - W.mp3",
		author:"JYJ",
		img:"image/2.jpg",
		album:"In heaven",
		state:"0",
		// content:"[00:01.47]她说 [00:08.35]林俊杰 [00:26.34]她静悄悄的来过 [00:31.69]她慢慢带走承诺 [00:37.31]只是最后的承诺 [00:42.90]还是没有带走了寂寞 [00:48.59]我们爱的没有错 [00:54.18]只是美丽的独秀 [00:58.44]太折磨 [01:00.62]她说无所谓 [01:05.53]只要能在夜里翻来覆去的时候有寄托 [01:11.89]等不到天黑 [01:13.84]烟火不会太完美 [01:17.58]回忆烧成灰 [01:19.47]还是等不到结尾 [01:24.03]她曾说的无所谓 [01:26.47]我怕一天一天被摧毁 [01:33.72]等不到天黑 [01:36.48]不敢凋谢的花蕾 [01:40.07]绿叶在跟随 [01:42.06]放开刺痛的滋味 [01:45.08]今后不再怕天明 [01:50.66]我想只是害怕清醒 [02:24.69]她静悄悄的来过 [02:30.38]她慢慢带走承诺 [02:35.91]只是最后的承诺 [02:41.25]还是没有带走了寂寞 [02:47.15]我们爱的没有错 [02:52.75]只是美丽的独秀 [02:56.89]太折磨 [02:59.08]她说无所谓 [03:04.02]只要能在夜里翻来覆去的时候有寄托 [03:10.46]等不到天黑 [03:12.46]烟火不会太完美 [03:16.13]回忆烧成灰 [03:18.00]还是等不到结尾 [03:22.46]她曾说的无所谓 [03:24.77]我怕一天一天被摧毁 [03:33.01]等不到天黑 [03:35.07]不敢凋谢的花蕾 [03:38.77]绿叶在跟随 [03:40.72]放开刺痛的滋味 [03:43.63]今后不再怕天明 [03:49.36]我想只是害怕清醒 [03:55.81]等不到天黑 [03:57.70]烟火不会太完美 [04:01.25]回忆烧成灰 [04:03.28]还是等不到结尾 [04:07.64]她曾说的无所谓 [04:10.28]我怕一天一天被摧毁 [04:18.14]等不到天黑 [04:20.28]不敢凋谢的花蕾 [04:23.77]绿叶在跟随 [04:25.85]放开刺痛的滋味 [04:28.82]今后不再怕天明 [04:34.58]我想只是害怕清醒 [04:41.33]不怕天明 [04:45.78]我想只是害怕清醒"
	},{
		name:"7 Years",
		src:"music/Lukas Graham - 7 Years.mp3",
		author:"Lukas Graham",
		img:"image/3.jpg",
		album:"7 Years",
		state:"0",
		// content:"[00:02.56]光良---第一次 [00:07.65]当你看着我 [00:10.03]我没有开口已被你猜透 [00:16.98]爱是没把握 [00:19.17]还是没符合你的要求 [00:25.77]是我自己想得太多 [00:29.74]还是你也在闪躲 [00:34.84]如果真的选择是我 [00:38.41]我鼓起勇气去接受 [00:42.10]不知不觉让实现开始闪烁 [00:51.01]哦~第一次我 说爱你的时候 [00:55.99]呼吸难过心不停的颤抖 [00:59.96]哦~第一次我 牵起你的双手 [01:04.74]轻轻放下不知该往哪儿走 [01:09.97]那是一起相爱的理由 [01:14.67]那是一起死守 [01:18.26]哦~第一次吻 你深深的酒窝 [01:23.39]想要清醒却冲昏了头 [01:27.53]哦~第一次你 躺在我的胸口 [01:32.52]二十四小时没有分开过 [01:37.42]那是第一次知道天长地久 [01:46.31][F.F] Arbiter (1st.Lieut) oicq447324 [01:57.40]是我自己想得太多 [02:00.99]还是你也在闪躲 [02:06.12]如果真的选择是我 [02:09.66]我鼓起勇气去接受 [02:13.44]不知不觉让实现开始闪烁 [02:22.31]哦~第一次我 说爱你的时候 [02:27.13]呼吸难过心不停的颤抖 [02:31.32]哦~第一次我 牵起你的双手 [02:36.34]轻轻放下不知该往哪儿走 [02:41.47]那是一起相爱的理由...... 对我~`~`~` [02:51.76]感觉你属于我 [02:55.01]感觉你的眼朦 [03:00.95]第一次就决定绝不回错 [03:08.26]哦~第一次我 说爱你的时候 [03:12.86]呼吸难过心不停的颤抖 [03:16.93]哦~第一次我 牵起你的双手 [03:21.96]轻轻放下不知该往哪儿走 [03:26.76]那是一起相爱的理由 [03:31.66]那是一起死守 [03:35.86]哦~第一次吻 你深深的酒窝 [03:41.11]想要清醒却冲昏了头 [03:45.37]哦~第一次你 躺在我的胸口 [03:50.30]二十四小时没有分开过 [03:56.99]那是第一次知道天长地久"
	},{
		name:"You",
		src:"music/Approaching Nirvana - You.mp3",
		author:"Approaching Nirvana",
		img:"image/4.jpg",
		album:"touch sky",
		state:"0",
		content:"轻音乐，请欣赏。"
		// content:"[00:01.47]她说 [00:08.35]林俊杰 [00:26.34]她静悄悄的来过 [00:31.69]她慢慢带走承诺 [00:37.31]只是最后的承诺 [00:42.90]还是没有带走了寂寞 [00:48.59]我们爱的没有错 [00:54.18]只是美丽的独秀 [00:58.44]太折磨 [01:00.62]她说无所谓 [01:05.53]只要能在夜里翻来覆去的时候有寄托 [01:11.89]等不到天黑 [01:13.84]烟火不会太完美 [01:17.58]回忆烧成灰 [01:19.47]还是等不到结尾 [01:24.03]她曾说的无所谓 [01:26.47]我怕一天一天被摧毁 [01:33.72]等不到天黑 [01:36.48]不敢凋谢的花蕾 [01:40.07]绿叶在跟随 [01:42.06]放开刺痛的滋味 [01:45.08]今后不再怕天明 [01:50.66]我想只是害怕清醒 [02:24.69]她静悄悄的来过 [02:30.38]她慢慢带走承诺 [02:35.91]只是最后的承诺 [02:41.25]还是没有带走了寂寞 [02:47.15]我们爱的没有错 [02:52.75]只是美丽的独秀 [02:56.89]太折磨 [02:59.08]她说无所谓 [03:04.02]只要能在夜里翻来覆去的时候有寄托 [03:10.46]等不到天黑 [03:12.46]烟火不会太完美 [03:16.13]回忆烧成灰 [03:18.00]还是等不到结尾 [03:22.46]她曾说的无所谓 [03:24.77]我怕一天一天被摧毁 [03:33.01]等不到天黑 [03:35.07]不敢凋谢的花蕾 [03:38.77]绿叶在跟随 [03:40.72]放开刺痛的滋味 [03:43.63]今后不再怕天明 [03:49.36]我想只是害怕清醒 [03:55.81]等不到天黑 [03:57.70]烟火不会太完美 [04:01.25]回忆烧成灰 [04:03.28]还是等不到结尾 [04:07.64]她曾说的无所谓 [04:10.28]我怕一天一天被摧毁 [04:18.14]等不到天黑 [04:20.28]不敢凋谢的花蕾 [04:23.77]绿叶在跟随 [04:25.85]放开刺痛的滋味 [04:28.82]今后不再怕天明 [04:34.58]我想只是害怕清醒 [04:41.33]不怕天明 [04:45.78]我想只是害怕清醒"
	}
	,{
		name:"昨天留下",
		src:"music/宫阁 - 昨天留下.mp3",
		author:"宫阁",
		img:"image/5.jpg",
		album:"昨天留下",
		state:"0",
		// content:"[00:01.47]她说 [00:08.35]林俊杰 [00:26.34]她静悄悄的来过 [00:31.69]她慢慢带走承诺 [00:37.31]只是最后的承诺 [00:42.90]还是没有带走了寂寞 [00:48.59]我们爱的没有错 [00:54.18]只是美丽的独秀 [00:58.44]太折磨 [01:00.62]她说无所谓 [01:05.53]只要能在夜里翻来覆去的时候有寄托 [01:11.89]等不到天黑 [01:13.84]烟火不会太完美 [01:17.58]回忆烧成灰 [01:19.47]还是等不到结尾 [01:24.03]她曾说的无所谓 [01:26.47]我怕一天一天被摧毁 [01:33.72]等不到天黑 [01:36.48]不敢凋谢的花蕾 [01:40.07]绿叶在跟随 [01:42.06]放开刺痛的滋味 [01:45.08]今后不再怕天明 [01:50.66]我想只是害怕清醒 [02:24.69]她静悄悄的来过 [02:30.38]她慢慢带走承诺 [02:35.91]只是最后的承诺 [02:41.25]还是没有带走了寂寞 [02:47.15]我们爱的没有错 [02:52.75]只是美丽的独秀 [02:56.89]太折磨 [02:59.08]她说无所谓 [03:04.02]只要能在夜里翻来覆去的时候有寄托 [03:10.46]等不到天黑 [03:12.46]烟火不会太完美 [03:16.13]回忆烧成灰 [03:18.00]还是等不到结尾 [03:22.46]她曾说的无所谓 [03:24.77]我怕一天一天被摧毁 [03:33.01]等不到天黑 [03:35.07]不敢凋谢的花蕾 [03:38.77]绿叶在跟随 [03:40.72]放开刺痛的滋味 [03:43.63]今后不再怕天明 [03:49.36]我想只是害怕清醒 [03:55.81]等不到天黑 [03:57.70]烟火不会太完美 [04:01.25]回忆烧成灰 [04:03.28]还是等不到结尾 [04:07.64]她曾说的无所谓 [04:10.28]我怕一天一天被摧毁 [04:18.14]等不到天黑 [04:20.28]不敢凋谢的花蕾 [04:23.77]绿叶在跟随 [04:25.85]放开刺痛的滋味 [04:28.82]今后不再怕天明 [04:34.58]我想只是害怕清醒 [04:41.33]不怕天明 [04:45.78]我想只是害怕清醒"
		

	}]



	// 时间转化
	function time(v){ 
		var v=Math.floor(v); 
		var s=v%60;  
		var m=Math.floor(v/60);
		s=(s<10)?('0'+s):s; 
		return m+':'+s;
	}


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
	
	///////////////////////////////////						自己所添加的事件
	
	//////////////////////////////////////////////////// 	第二页
	play.on("touchend",function(){						//	播放按钮
		console.log(1)
		if(audio.paused){
			audio.play();
		}else{
			audio.pause();
		}
		return false;
	})										
	
	process.on("touchend",function(e){						//进度条点击
		show=0;
	    left=e.originalEvent.changedTouches[0].clientX-process.offset().left;
		audio.currentTime=audio.duration* left/process.width();
		return false;
	})
	
	pi.on("click",false)
	
	pi.on("touchstart",function(e){							//进度条拖进
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
		console.log(1)
		$(document).off("touchmove")
		return false;
	})
	back.on("touchend",function(){
		
		show=0;
		next();
		console.log(1)
		return false;
	});														//下一首
	
	forward.on("touchend",function(){
		
		show=0;
		prev();
		return false;
	});														//上一首
	
	block.on("touchstart",function(e){
		 bstart=e.originalEvent.changedTouches[0].clientX;
		 return false;
	})
	block.on("touchend",function(e){
		var bend=e.originalEvent.changedTouches[0].clientX;
		if(bend-bstart>=50){
			next();
		}
		if(bend-bstart<=-50){
			prev();
		}
		return false;
	})
	
	
	var round=$(".round")
	round.on("touchend",function(){
		console.log(round.text())
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
	///////////////////////////////////////////////////播放列表
	//////////////////////////////////		第一页
	var songlist=$(".songlist")  //////播放列表显示
	var boxs=$(".boxs")
	var ss=$(".zhe");
	var tx=$(".tc1");
	var th=tx.height();
	var set=$(".set");
	var playlis=$(".playlist")
	tx.css("bottom",-th);
	var now1;
	var next1=$("#next")
	var delete1=$("#delete")
	var list=$(".list")
	var num=$("#num")
	var playlist=$("#playlist")
	var top;
	var clear=$("#clear")
	var kk=$(".kk")
	var qie=$("#qie")
	render(s_list,songlist);
	render1(s_list,playlist)
	
	////////////////////////////////////////////
	function xiaoshi(){
		ss.animate({"opacity":0},200,"linear",function(){
			ss.css("display","block")
		})
		tx.animate({"bottom":-th},200,"linear",function(){
			tx.css("display","block")
		})
	}
	
	function deletesong(){
		if(now1==now){
			s_list.splice(now1,1)
			localStorage.s_list=JSON.stringify(s_list);
			render(s_list,songlist);
			render1(s_list,playlist);
		}
		if(now1<now){
			now--;
			s_list.splice(now1,1)
			localStorage.s_list=JSON.stringify(s_list);
			render(s_list,songlist);
			render1(s_list,playlist);
		}
		if(now1>now){
			s_list.splice(now1,1)
			localStorage.s_list=JSON.stringify(s_list);
			render(s_list,songlist);
			render1(s_list,playlist);
		}
	}
	
	function render1(obj,obj2){				
		obj2.empty();
		num=$("#num")
		num.html(s_list.length);
		for(var i=0;i<obj.length;i++){
			if(i==now){
				
				d="active"
			}else{
				d=""
			}
			$("<li class='"+d+"'><a>&#xe827;</a><span>"+s_list[i].name+"</span><span>-</span><span>"+s_list[i].author+"</span><span class='delete'>&#xe609;</span></li>").appendTo(playlist)
		}
	}
	
	songlist.on("touchend","li",function(){			//////播放列表按动
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
	
	boxs.on("touchend",function(){				  /////播放列表添加
		
		var index=$(this).index();
		var music=JSON.parse($(this).attr("data-role"))
		s_list.push(music)
		localStorage.s_list=JSON.stringify(s_list);
		render(s_list,songlist);
		return false;
	})											
	
	songlist.on("touchend",".set",function(){		/////通过playlist播放列表删除
		ss.css("display","block").animate({"opacity":1},200,"linear")
		tx.css("display","block").animate({"bottom":0},200,"linear")
		var lis=$(this).closest("li")
		now1=lis.index();
		return false;
	})
	
	ss.on("touchend",function(){
		xiaoshi();
		playlis.animate({"bottom":-top},200,function(){
			playlis.css("display","none")
			return false;
		})
		return false;
	})
	tx.on("touchend",function(){
		xiaoshi();
		return false;
	})
	delete1.on("touchend",function(){
		xiaoshi();
		deletesong();
		return false;
	})
	
	next1.on("touchend",function(){
		show=audio.paused;
		next();
		xiaoshi()
		return false;
	})
	
	list.on("touchend",function(){///////通过playlist第二种删除
		render1(s_list,playlist)
		top=playlis.height();
		playlis.css({"bottom":-top,"display":"block"})
		playlis.animate({"bottom":0},200,"linear")
		ss.css("display","block").animate({"opacity":1},200,"linear")
		return false;
	})
	
	playlist.on("touchend","li",function(){
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
		render1(s_list,playlist);
		return false;
	})
	
	playlist.on("touchend",".delete",function(){
		var index=$(this).closest("li").index();
		now1=index;
		deletesong();
		return false;
	})
	
	clear.on("touchend",function(){			/////清空列表
		s_list=[]
		localStorage.s_list=JSON.stringify(s_list)
		render(s_list,songlist);
		render1(s_list,playlist);
		return false;
	})
	
	////////////////////////////////////屏幕相互切换
    imgs.on("touchend",function(){
    	
		$(".main").css("display","none");
		$(".lyric").css("display","block");
    })
    ci.on("touchend",function(){
    	$(".main").css("display","block");
		$(".lyric").css("display","none");
    })

	///////////////////////////////////			歌词页面   
	$(".block").css("display","block")
	$("display").css("display","block")
	var volume=$(".volume1")
	var volume1=$(".volume2")
	var vi=$(".vi")
	var vx;											//音量控制
	vi.on("touchend",false)							//点击事件
	var quiet=$("#quiet")
	
	vi.on("touchstart",false)
	
	volume.on("touchend",function(e){
		volumeleft=e.originalEvent.changedTouches[0].clientX-volume.offset().left;
		if(volumeleft<0||volume>volume.width()){
			return;
		}
		quiet.removeAttr("vol")	
		audio.volume=volumeleft/volume.width();
		return false;
	})
	
	
	vi.on("touchstart",function(e){					//音量拖拽事件
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
	
	
	quiet.on("touchend",function(){					 //////静音事件
		if($(this).attr("vol")){
				audio.volume=$(this).attr("vol")
				$(this).removeAttr("vol")
				quiet.html("&#xe827;")
			}else{
				$(this).attr("vol",audio.volume)
				audio.volume=0;
				quiet.html("&#xe62d;")
			}	
	})                                           
		
		console.log(s_list[0])
			//歌词处理
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

	
	///////////////////////////////////		audio所有自带事件
	
	$(audio).on("loadstart",function(){
		name.html(s_list[now].name);
		author.html(s_list[now].author);
		$("#gm").html(s_list[now].name);
		$("#gs").html(s_list[now].author);
		bg.attr("src",s_list[now].img);
		imgs.css("background-image","url("+s_list[now].img+")");
		kk.attr("src",s_list[now].img)
		console.log(now)
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
