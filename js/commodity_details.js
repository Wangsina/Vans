window.onload=function(){
/***************************二级菜单效果js*******************************/
	$('#navhover').hover(function(event){
		console.log(event)				
		$('#headerBox').css('display','block');			
	},function(event){
		event.stopPropagation()
		$('#headerBox').hover(function(){
		    $('#headerBox').css('display','block');
		    },function(){
		        $('#headerBox').css('display','none');
		    })			
	})

/********************置顶盒子显示/吸顶效果js*******************************/
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
	
/*********************置顶效果js*****************************************/
    oTop.onclick = function(){
	    		document.documentElement.scrollTop=0;
	    	}
    
/**********************tab切换图效果js************************************/
    var oBtn = document.getElementsByClassName('btn');
    var osPic = document.getElementById('s');
    var obPic = document.getElementById('b');
	for(var i=0;i<oBtn.length;i++){
		bind(i);
	}
	function bind(index){
    oBtn[index].onmouseover=function(){
	        var ss=index+1;
	        var path1="img/commodity_details/"+ss+".jpg";
	        var path2="img/commodity_details/big_"+ss+".jpg";
	        osPic.setAttribute('src',path1);
	        obPic.setAttribute('src',path2);
	   	}
	}
	
/*****************放大镜效果jQuery****************************************/
			$('#spic').hover(function(){
				$('#square').css('display','block');
			    $('#bpic').css('display','block');
				},function(){
					$('#square').css('display','none');
					$('#bpic').css('display','none');
				})			
			
			$('#spic').mousemove(function(event){
				var nowleft = Math.floor(event.pageX - $('#spic').offset().left)-120;
				var nowtop  = event.pageY- $('#spic').offset().top-120;
				console.log( nowleft,nowtop )
				
				if(nowleft<0){
					nowleft = 0 ;
				}
				if(nowleft>500){
					nowleft = 500;
				}				
				if(nowtop<0){
					nowtop = 0 ;
				}	
				if(nowtop>500){
					nowtop = 500;
				}				
				
				$('#square').css({
					'top':nowtop,
					'left':nowleft
				})
				$('#b').css({
					'top': -nowtop*2,
					'left': -nowleft*2
				})						
			})
			
			
/*****************购买数量加减效果jQuery**********************************/
        var oJian=document.getElementById('jian');
        var i=document.getElementById('value').value;
        var oJia=document.getElementById('jia');
        oJian.onclick=function(){
        	if(i>1){
        		i--;
        		document.getElementById('value').value=i;
        	}else{
        		i=1;
        		document.getElementById('value').value=i;
        	}	
        }
        oJia.onclick=function(){
        	if(i<9){
        		i++;
        		document.getElementById('value').value=i;
        	}else{
        		i=9;
        		document.getElementById('value').value=i;
        	}
        }							
}
