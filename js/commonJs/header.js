window.onload=function(){
/*****************二级菜单效果js******************************/
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
}