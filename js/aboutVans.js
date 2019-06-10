window.onload=function(){
/*****************置顶盒子显示/吸顶效果js******************************/
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
	
/*****************置顶效果js****************************************/
    oTop.onclick = function(){
	    		document.documentElement.scrollTop=0;
	    	}
    
/*****************二级菜单效果js*************************************/
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

/****************动态创建info的js************************************/
    //计算间距的参数
    var gap;  
    var str='';
	    for(var i=0;i<info.length;i++){
	    	//计算盒子之间的间距，每行的最后一个盒子没有边距
		    var now=i+1;
	    	if(now%5==0){
	    		gap=" gap";
	    	}else{
	    		gap=" ";
	    	}
	    	
	    str+=`<div class="infoBox ${gap}">
		    		<img class="infoPic" src="${info[i].src}"/>
		    		<a href="#">
		    			<span class="infoTitle">
		    		        ${info[i].title}
		    			</span>
		    		</a>
		    		<span class="infoText">
		    			${info[i].text}
		    		</span>
		    		<span class="infoTime">
		    			${info[i].time}
		    		</span>
		    		<a class="readmore" href="${info[i].href}">
		    			阅读更多
		    		</a>
		    	</div>`;
	    document.getElementById('bigBox').innerHTML=str;
	    }
}