window.onload=function(){ 
/*****************置顶盒子显示/菜单栏吸顶/排序状态盒吸顶效果js******************************/
	var oBigscrollBox=document.getElementById('bigscrollBox');
	var oSequenceBox=document.getElementById('sequenceBox');
	var oTop=document.getElementById('top');
	document.onscroll = function(){
		var top = document.documentElement.scrollTop;
		
		if(top>130){
	    	oBigscrollBox.style.display='block';
	    	oTop.style.display='block';
		}else{
	    	oBigscrollBox.style.display='none';
	    	oTop.style.display='none';
		}

		if(top>230){
	    	oSequenceBox.style.position='fixed';
            oSequenceBox.style.top='22px';
	    }else{
	    	oSequenceBox.style.position='static';
	    }
	    if(top>4470){
	    	oSequenceBox.style.position='static';
	    }
	}	
	
/*******************************置顶效果js*****************************************/
    oTop.onclick = function(){
	        document.documentElement.scrollTop=0;
	   }
    
/***************************右侧下拉菜单的js****************************************/
	var oRight_icon = document.getElementsByClassName('right_icon')[0];
    var oSelected = document.getElementById('selected');
	oRight_icon.onclick=function(){
        	if(oSelected.style.display == 'block'){
        		oSelected.style.display = 'none';
        	}else{
        		oSelected.style.display = 'block';
        	}
        }
	
/****************************排序状态盒的js****************************************/
    var oSize_icon = document.getElementsByClassName('size_icon');
    var oSequence_dd = document.getElementsByClassName('sequence_dd');
	for(var i=0;i<oSize_icon.length;i++){
        bind(i);
    }
	
	function bind(index){
        oSize_icon[index].onclick=function(){
      	    //alert(index);
        	if(oSequence_dd[index].style.display == 'block'){
        		oSequence_dd[index].style.display = 'none';
        	}else{
        		oSequence_dd[index].style.display = 'block';
        	}
        }
    }

/************************动态创建goods的jQuery*************************************/
    var str='';
	    for(var i=0;i<goods.length;i++){
	    str+=`<div class="goods">
			    <img src="${goods[i].src}" class="gPic"/>
				<h2 class="gName">
					<a href="#">${goods[i].name}</a>
				</h2>
				<h3 class="gPrice">${goods[i].price}</h3>
			
			<div class="Rgoods">
				<img src="${goods[i].rsrc}" class="gPic"/>
				<a href="${goods[i].href}" class="gBuy">快速购买</a>
				<h2 class="gName">
					<a href="#">${goods[i].name}</a>
				</h2>
				<h3 class="gPrice">${goods[i].price}</h3>
			</div>
			</div>`;
	    document.getElementById('goodsBox').innerHTML=str;
	    }
	    
/*********************************二级菜单效果jQuery******************************/
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
	    
}