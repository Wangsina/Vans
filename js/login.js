window.onload=function(){
/*************************二级菜单效果js***********************************/
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
	
/********************置顶盒子显示/吸顶效果js********************************/
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
	
/*********************置顶效果js****************************************/
    oTop.onclick = function(){
	    		document.documentElement.scrollTop=0;
	}

/*****************手机号和密码的校验jQuery********************************/
			$('.btn').blur(function(){
				//取到input的value值，用.val()
				var index = $('.btn').index(this);
				var value = $('.btn').eq(index).val();
				var reg;
				switch(index){
					case 0:
					  reg=/^1\d{10}$/;
					  break;
					case 1:
					  reg=/^\w{6,12}$/;
					  break;					  
				}
				checked( reg,value,index )
			})
			
			function checked( reg,value,index ){
				var resulet = reg.test( value );
				console.log(value,resulet,reg);
				if(resulet==false){
					$('p').eq(index).css('color','#C9192E');
				}else{
					$('p').eq(index).css('color','white');
			}
       }
}