$(function(){
	// 关注DR显示二维码
	var gzDr = $('.gzDr');
	var ewm = $('#ewm');
	gzDr.hover(function(){ewm.show();},function(){ewm.hide();});
	ewm.hover(function(){ewm.show();},function(){ewm.hide();});
	// 官网显示
	var gw = $('.gw');
	var dgw = $('#gw');
	gw.hover(function(){dgw.show();},function(){dgw.hide();});
	dgw.hover(function(){dgw.show();},function(){dgw.hide();});
	// 显示简体
	var jianti = $('.jianti');
	var bjianti = $('#jianti');
	jianti.hover(function(){bjianti.show();},function(){bjianti.hide();});
	bjianti.hover(function(){bjianti.show();},function(){bjianti.hide();});
	// 店铺定位
	var qg = $('.qg');
	var diqu = $('#diqu');
	qg.hover(function(){diqu.show();$(this).addClass('active')},
		function(){diqu.hide();$(this).removeClass('active')});
	diqu.hover(function(){diqu.show();qg.addClass('active')},
		function(){diqu.hide();qg.removeClass('active')});
// 全国各地获取
	var aA =$('#diqu a');
	aA.click(function(){
		aA.removeClass('active').eq($(this).index()).addClass('active');
	});

	//显示查询提示
	var paris = $('#paris');
	var zj = $('#zj');
	paris.hover(function(){zj.show()},function(){zj.hide()});
	// 获取光标隐藏
	var input = $('#paris .input');
	input.focus(function(){
		zj.hide();
		input.attr('placeholder','');
	});
	input.blur(function(){
		zj.hide();
		input.attr('placeholder','请输入身份证号验证真爱承诺');
	});
	// nav下的盒子显示隐藏
	var navli = $('#nav #DR li');
	var nhide = $('#hide .div');
	navli.hover(function(){
		nhide.hide();
		nhide.eq($(this).index()).show();
	},function(){
		nhide.hide();
	})
	nhide.hover(function(){
		nhide.hide();
		nhide.eq($(this).index()).show();
	},function(){
		nhide.hide();
	})
	// b-left
	var blLi = $('#hide #b .left .liebiao li');
	var blImg = $('#hide #b .left .img img');
	blLi.mouseenter(function(){
		blImg.removeClass('active');
		blImg.eq($(this).index()).addClass('active');
	})
	// b-right
	var brLi = $('#hide #b .right .liebiao li');
	var brImg = $('#hide #b .right .img img');
	brLi.mouseenter(function(){
		brImg.removeClass('active');
		brImg.eq($(this).index()).addClass('active');
	})
	// c-left
	var clLi = $('#hide #c .left .liebiao li');
	var clImg = $('#hide #c .left .img img');
	clLi.mouseenter(function(){
		clImg.removeClass('active');
		clImg.eq($(this).index()).addClass('active');
	})
	// c-right
	var crLi = $('#hide #c .right .liebiao li');
	var crImg = $('#hide #c .right .img img');
	crLi.mouseenter(function(){
		crImg.removeClass('active');
		crImg.eq($(this).index()).addClass('active');
	})
 
	// e里面的left和显示隐藏
	var aQy = $('#e .left .huabeiqu li');//li
	var aQyq = $('#e .left .qudiqu div');//隐藏城市
	var lright = $('#e .left .xian .yidong');//移动的点
	var xian = $('#e .left .xian .xian2');//线
	aQy.mouseenter(function(){
		aQy.removeClass('active');
		$(this).addClass('active');
		aQyq.removeClass('active');
		aQyq.eq($(this).index()).addClass('active');
		var bdr2L = ($(this).index())*56 + 12 +'px';
		xian.stop().animate({width:bdr2L});
		lright.stop().animate({left:bdr2L});
	});
	// e 小轮播图 淡入淡出
	var lb = $('#e .right .lb');
	var count=0;
	function next(){
		count++;
		if(count>=lb.length){
			count=0;
		}
		lb.fadeOut().eq(count).fadeIn();
	};
	setInterval(next,2000);
	// 大轮播图
	var dlb = $('#lunbo');//最大父级
	var l =$('#lunbo #left');
	var r =$('#lunbo #right');
	var aImg = $('#lunbo .img li');
	var aLi = $('#lunbo .dian li');
	// 轮播图左右键显示隐藏
	dlb.hover(function(){
		l.show();
		r.show();
	},function(){
		l.hide();
		r.hide();
	});
	// 封装
	var inow = 0;
	function next1(){
		inow++;
		if(inow==aLi.length){
			inow=0;
		};
		// 移除所有样式
		aLi.children().removeClass('active');
		aImg.stop().fadeOut();
		// 添加样式
		aLi.eq(inow).children().addClass('active');
		aImg.eq(inow).stop().fadeIn();
	};
	// 开启轮播图
		var times1 = setInterval(next1,3000);
	// 原点点击
	aLi.click(function(){
		inow=$(this).index();
		aLi.children().removeClass('active');
		aImg.stop().fadeOut();
		// 添加样式
		aLi.eq(inow).children().addClass('active');
		aImg.eq(inow).stop().fadeIn();
	});
	// 左边
	l.click(function(){
		inow--;
		if(inow<0){
			inow=aLi.length-1;
		};
		aLi.children().removeClass('active');
		aImg.stop().fadeOut();
		// 添加样式
		aLi.eq(inow).children().addClass('active');
		aImg.eq(inow).stop().fadeIn();
	});
	// 右边
	r.click(next1);
	//  关闭定时器
	aLi.mousedown(function(){
		clearInterval(times1);
	});
	l.mousedown(function(){
		clearInterval(times1);
	});
	r.mousedown(function(){
		clearInterval(times1);
	});
	aLi.mouseup(function(){
		times1 = setInterval(next1,3000);
	});
	l.mouseup(function(){
		times1 = setInterval(next1,3000);
	});
	r.mouseup(function(){
		times1 = setInterval(next1,3000);
	});


	// box11
	$('.b11u li').mouseenter(function(){
		$('.b11bottom .b11a').removeClass('active');
		$('.b11bottom .b11a').eq($(this).index()).addClass('active');
	});
	$('.gz').hover(function(){
		$('.b18yc').css('display','block');
	},function(){
		$('.b18yc').css('display','none');
	});
	$('.b18yc').hover(function(){
		$('.b18yc').css('display','block');
	},function(){
		$('.b18yc').css('display','none');
	});

	// fixeddr_quick-cort
	var fixedService = $('#fixed-service');
	var drolineKfword = $('#fixed-service .droline_kfword');
	var drQuickCort = $('#fixed-service .dr_quick-cort');
	// var drQuickWord =$('#fixed-service .dr_quick-cort .dr_quick-word');
	// 超过250显示
	$(document).on('scroll load',function(){
		if($(document).scrollTop()>=250){
			fixedService.css('display','block');
			drolineKfword.stop().animate({'opacity':1,'left':'-230px'});
			setTimeout(function(){
				drolineKfword.stop().animate({'opacity':0,'left':'0px'});
			},2000);
			setTimeout(function(){
				drolineKfword.remove();
			},3000);

		}else if($(document).scrollTop()<250){
			fixedService.css('display','none');
			drolineKfword.stop().animate({'opacity':0,'left':0});
		}
	});

	drQuickCort.hover(function(){
		$(this).find('.dr_quick-word').stop().animate({'opacity':1,'right':'50px'});
		$(this).find('a').addClass('active');
	},function(){
		$(this).find('.dr_quick-word').stop().animate({'opacity':0,'right':'0'});
		$(this).find('a').removeClass('active');
	});

	// fixed center
	var DRbrand = $('#DRbrand_tc');//父级
	var DRbrandNum = $('#DRbrand_tc .DRbrand_num');//秒关闭
	var DRbrandClose =$('#DRbrand_tc .DRbrand_close');//x
	var DRbrandOrder = $('#DRbrand_tc .DRbrand_order');//点击不删除
	var mask = $('#mask');
	setTimeout(function(){
		DRbrand.show();
		mask.show();
	},1000);
	// x 关闭
	DRbrandClose.click(function(){
		$(this).parent().remove();
		mask.remove();
	});
	var s = 5;
	function minus(){
		s--;
		DRbrandNum.html(''+s+'s');
		if(DRbrandNum.html()=='0s'){
			DRbrand.remove();
			mask.remove();
		}
	}
	var ftid = setInterval(minus,1000);
	DRbrandOrder.click(function(){
		DRbrandNum.html('');
		clearInterval(ftid);
	});
});