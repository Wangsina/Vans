window.onload=function(){
/***********************身体body的轮播js*******************************/
	    var oLunbo_bigbox = document.getElementById('lunbo_bigbox');
	    var oLunbo_pic = document.getElementsByClassName('lunbo_pic');
		var oBefore = document.getElementById('before');
		var oNext = document.getElementById('next');
		inter();
		var iNow = 0;
		console.log( oLunbo_bigbox )
		var timer;//全局变量，解决点击完图片一闪而过的问题
		function inter(){
			timer=setInterval(function(){
				console.log( oLunbo_bigbox.style.left )
				iNow++;			
				if(oLunbo_bigbox.style.left == '-1952px'){
					iNow=0;
					changePic();
					oLunbo_bigbox.style.transition='';
				}
				else{
					oLunbo_bigbox.style.transition='left .2s';
					changePic();
				}
				console.log(iNow);			
			},2000)	
		}
	
		function changePic(){
			var nowleft = -(iNow)*488;
			console.log(nowleft);
			//因为是原生JS所以要用到px
			oLunbo_bigbox.style.left = nowleft+'px';	
		}
		
		//向前
		oBefore.onclick=function(){
			//先清掉定时器
			clearInterval(timer);
			iNow--;
			if(iNow<0){
				iNow=oLunbo_pic.length-3;
			}
			console.log('前'+iNow)
			changePic()
			//再重新调用
			inter();
		}
		//向后
		oNext.onclick=function(){
			//先清掉定时器
			clearInterval(timer);
			iNow++;
			if(iNow>oLunbo_pic.length-3){
				iNow=0;
			}
			console.log('后'+iNow)
			changePic()
			//再重新调用
			inter();
		}

/*******************置顶盒子显示/吸顶效果js******************************/
	var oTop=document.getElementById('top');
	var oBigscrollBox=document.getElementById('bigscrollBox');
	document.onscroll = function(){
		var top = document.documentElement.scrollTop;
		if(top>130){
	    	oBigscrollBox.style.display='block';
	    	oTop.style.display='block';
		}else{
	    	oBigscrollBox.style.display='none';
	    	oTop.style.display='none';
		}
	}
	
/*******************置顶效果js****************************************/
    oTop.onclick = function(){
	    		document.documentElement.scrollTop=0;
	    	}
    
}