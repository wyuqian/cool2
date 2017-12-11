$(function () {
	// body...
	$(window).scroll(function(){
		var s_top =$(document).scrollTop();
		if(s_top>40){
			s_top=40;
		}
		$('.head_con_bg').css('top',40-s_top);
	})

	var s_top =$(document).scrollTop();
	if(s_top>40){
		s_top=40;
	}
	$('.head_con_bg').css('top',40-s_top);
	//
	$('.head_con .search span').click(function(){
		$('.head_con .search div').slideToggle(50);
	})
	//
	$('.online_service .service_lf').click(function(){
		$(this).toggleClass('sq');
		$('.online_service .service_rg').toggleClass('sq');
	})
	//
	$('.product_details_con .con_top span').click(function(){
		var s_num = $(this).index();
		$(this).addClass('on').siblings().removeClass('on');
		$('.product_details_con .content').hide().eq(s_num).show();
	})
	$('.technical ul li .li_rg .three span').click(function(){
		var s_num = $(this).index();
		$(this).addClass('on').siblings().removeClass('on');
		$(this).parent('.three').siblings('.content ').hide().eq(s_num).show();
		
	})
	//
	$('.pop_form .pop_form_top span').click(function(){
		$('.pop_form_bg').toggleClass('pop_form_up')
	})
	//
	$(".xinxi .lj").click(function(){
		$('.biaodan').show();
	})
	$(".biaodan .chahao").click(function(){
		$('.biaodan').hide();
	})
	//
	$('.suspension_bootom select').change(function(){
		var liangjie = $(this).attr('value');
		$(location).attr('href', liangjie);
	})
	//
	$('.back_top').click(function(){
		$('html,body').animate({scrollTop:0},500)
	})
	//
	// var num_li;
	// $('.head_con .nav li').hover(function(){
	// 	num_li = $(this).index();
	// 	$(".submenu_bg").eq(num_li).stop().slideToggle().siblings('.submenu_bg').slideUp();
	// },function(){
	// 	$(".submenu_bg").slideUp();
	// }),$('.suspension_bootom_bg').hover(function(){
	// 	$(".submenu_bg").eq(num_li).stop().slideToggle().siblings('.submenu_bg').slideUp();
	// },function(){
	// 	$(".submenu_bg").slideUp();
	// })

	var $subnav = $(".submenu_bg");
	$(".head_con .nav li").each(function(i){
		$(this).hover(function(){
			$subnav.eq(i).stop().slideDown();
		},function(){
			$subnav.eq(i).stop().slideUp();
		});
	});
	$subnav.each(function(){
		$(this).hover(function(){
			$(this).stop().slideDown();
		},function(){
			$(this).stop().slideUp();
		});
	});











	// 
	$('.honor ul li').click(function(){
		var img_s = $(this).find('img').attr('src');
		var w_h = $(window).height();
		$('.large_img img').attr('src',img_s);
		$('.large_img img').css('height',0.8*w_h);
		$('.large_img img').css('width',0.8*w_h/403*280);
		var hhh =$('.large_img').width();
		$('.large_img_bg').show();
		$('.large_img').css({'margin-top':-0.8*w_h/2-20,'margin-left':-0.8*w_h/403*140-20,})
		console.log(w_h);
		console.log(hhh);
		console.log(0.9*w_h/403*280);
	})
	$('.large_img i').click(function(){
		$('.large_img_bg').hide();
	})
	

	//
	var li_len = $('.banner ul li').length,
		firstLi = $('.banner ul li').first().clone(),
		lastLi = $('.banner ul li').last().clone(),
		maxId = li_len-1,
		s=0;
	$('.banner ul').append(firstLi);
	$('.banner ul').prepend(lastLi);
	$('.banner ul').css('left','-100%');

	function move(a){
		if(a=='before'){
			if(s==0){
				$(".banner ul").stop().animate({'left':0},500,function(){
					$('.banner ul').css('left',-li_len+'00%');
				});
				s=maxId;
			}else{
				s--;
				$(".banner ul").stop().animate({'left':-(s+1)+'00%'},500);
			}
		}
		if(a=='next'){
			if(maxId==s){
				$('.banner ul').stop().animate({'left':-(li_len+1)+'00%'},500,function(){
					$('.banner ul').css('left','-100%');
				})
				s=0;
			}else{
				s++;
				$(".banner ul").stop().animate({'left':-(s+1)+'00%'},500);
				
			}
		}
	}
	$('.banner .arrow_rg').click(function(){
		move('next');
	})
	$('.banner .arrow_lf').click(function(){
		move('before');
	});
	var time = setInterval(function(){
		move('next')
	},5000)
	$('.banner').hover(function(){
		clearInterval(time);
	},function(){
		 time = setInterval(function(){
			move('next')
		},5000)
	})
})
$(function(){
	var  li_len2= $(".advantage_con li .li2 li").length;
	function next(){
		if(!$('.advantage_con li .li2 li').is(':animated')){
			var pli = $('.advantage_con li .li2 li').first().clone();
			$('.advantage_con li .li2').append(pli)
			$('.advantage_con li .li2 li').first().animate({'margin-left':-580},500,function(){
				$('.advantage_con li .li2 li').first().remove();
			})
		}
	}
	function before(){
		if(!$('.advantage_con li .li2 li').is(':animated')){
			var pli2 =$('.advantage_con li .li2 li').last().clone();
			$('.advantage_con li .li2').prepend(pli2);
			$('.advantage_con li .li2 li').first().css('margin-left','-580px');
			$('.advantage_con li .li2 li').first().animate({'margin-left':0},500,function(){
				$('.advantage_con li .li2 li').last().remove();
			})
		}
	}
	$('.advantage_con li .li2_arrow.arrow_rg').click(function(){
		if(li_len2>1){
			next();
		}
	})
	$('.advantage_con li .li2_arrow.arrow_lf').click(function(){
		if(li_len2>1){
			before();
		}
	})
})
$(function(){
	var  li_lenc= $(".case_con ul li").length;
	function nextCase(){
		if(!$('.case_con ul li').is(':animated')){
			var pli = $('.case_con ul li').first().clone();
			$('.case_con ul').append(pli)
			$('.case_con ul li').first().animate({'margin-left':-390},500,function(){
				$('.case_con ul li ').first().remove();
			})
		}
	}
	function beforeCase(){
		if(!$('.case_con ul li ').is(':animated')){
			var pli2 =$('.case_con ul li ').last().clone();
			$('.case_con ul ').prepend(pli2);
			$('.case_con ul li ').first().css({'margin-left':'-390px'});
			$('.case_con ul li ').first().animate({'margin-left':0},500,function(){
				$('.case_con ul li ').last().remove();
			})
		}
	}
	$('.case .case_arrow_rg').click(function(){
		if(li_lenc>3){
			nextCase();
		}
	})
	$('.case .case_arrow_lf').click(function(){
		if(li_lenc>3){
			beforeCase();
		}
	})
})
$(function(){
	var  li_lenh= $(".partner ul li").length;
	function nextH(){
		if(!$('.partner ul li').is(':animated')){
			var pli = $('.partner ul li').first().clone();
			$('.partner ul').append(pli)
			$('.partner ul li').first().animate({'margin-left':-261},500,function(){
				$('.partner ul li ').first().remove();
			})
		}
	}
	function beforeH(){
		if(!$('.partner ul li ').is(':animated')){
			var pli2 =$('.partner ul li ').last().clone();
			$('.partner ul ').prepend(pli2);
			$('.partner ul li ').first().css('margin-left','-261px');
			$('.partner ul li ').first().animate({'margin-left':0},500,function(){
				$('.partner ul li ').last().remove();
			})
		}
	}
	$('.partner_bg .h_arrow_rg').click(function(){
		if(li_lenh>5){
			nextH();
		}
	})
	$('.partner_bg .h_arrow_lf').click(function(){
		if(li_lenh>5){
			beforeH();
		}
	})
})
$(function(){
	var  li_lenr= $(".recommended ul li").length;
	function nextR(){
		if(!$('.recommended ul li').is(':animated')){
			var pli = $('.recommended ul li').first().clone();
			$('.recommended ul').append(pli)
			$('.recommended ul li').first().animate({'margin-left':-315},500,function(){
				$('.recommended ul li ').first().remove();
			})
		}
	}
	function beforeR(){
		if(!$('.recommended ul li ').is(':animated')){
			var pli2 =$('.recommended ul li ').last().clone();
			$('.recommended ul ').prepend(pli2);
			$('.recommended ul li ').first().css('margin-left','-315px');
			$('.recommended ul li ').first().animate({'margin-left':0},500,function(){
				$('.recommended ul li ').last().remove();
			})
		}
	}
	$('.recommended .r_arrow_rg').click(function(){
		if(li_lenr>4){
			nextR();
		}
	})
	$('.recommended .r_arrow_lf').click(function(){
		if(li_lenr>4){
			beforeR();
		}
	})
})
$(function(){
	var  li_lenp= $(".product_img ul li").length;
	function nextP(){
		if(!$('.product_img ul li').is(':animated')){
			var pli = $('.product_img ul li').first().clone();
			$('.product_img ul').append(pli)
			$('.product_img ul li').first().animate({'margin-left':-250},500,function(){
				$('.product_img ul li ').first().remove();
			})
		}
	}
	function beforeP(){
		if(!$('.product_img ul li ').is(':animated')){
			var pli2 =$('.product_img ul li ').last().clone();
			$('.product_img ul ').prepend(pli2);
			$('.product_img ul li ').first().css('margin-left','-250px');
			$('.product_img ul li ').first().animate({'margin-left':0},500,function(){
				$('.product_img ul li ').last().remove();
			})
		}
	}
	$('.product_img .arrow_rg').click(function(){
		if(li_lenp>3){
			nextP();
		}
	})
	$('.product_img .arrow_lf').click(function(){
		if(li_lenp>3){
			beforeP();
		}
	})
	// $('.product_img ul li').click(function () {
	// 	var img_src =  $(this).find('img').attr('src');
	// 	$('.top_lf img').attr('src',img_src)
	// })
	$('.product_img ul li').click(function(event){
		event.preventDefault();
		var src_img = $(this).find('img').attr('src');
		$('.product_details_top .large_div img').attr('src',src_img);
		$('.product_details_top .top_lf img').attr('src',src_img);
		console.log(src_img)
	});
	$('.product_details_top .top_lf ').mouseover(function(){
		$('.product_details_top .top_lf  div').show();
		$('.product_details_top .large_div').show();
	})
	$('.product_details_top .top_lf ').mouseout(function(){
		$('.product_details_top .top_lf  div').hide();
		$('.product_details_top .large_div').hide();
	})
	$('.product_details_top .top_lf ').mousemove(function (event) {
	      moves(event);

	    })
	
	     var MAXLEFT=260;//我的容器最大可实现宽度坐标500-175
	     var MAXTOP=260;//我的容器最大可实现高度坐标400-175
	    function moves(event){	
	      var x=event.offsetX;//获得鼠标相对于父元素的x
	      var y=event.offsetY;//获得鼠标相对于父元素的y
	      //计算mask的left: x-MSIZE/2
	      var left=x-50;
	      //计算mask的top: y-MSIZE/2
	      var top=y-50;

	      //如果left越界，要改回边界值
	      left=left<0?0:
	        left>MAXLEFT?MAXLEFT:
	          left;
	      //如果top越界，要改回边界值
	      top=top<0?0:
	        top>MAXTOP?MAXTOP:
	          top;
	          //  console.log(left+'x');
	          // console.log(top+'top');
	      //设置id为mask的元素的left为left,top为top
	      $(".product_details_top .top_lf div").css({left:left,top:top});
	      //设置id为largeDiv的背景图片位置:
	      //left  （大图片 - 大图片的容器）/（中图 - 中图上黑色阴影）
	       $(".product_details_top .large_div img").css({left:-left*440/260+"px ",top:-top*440/260+"px"});
    }
})
$(function(){
	// 验证中文名称
	function isChinaName(name) {
	 var pattern = /^[\u4E00-\u9FA5]{1,6}$/;
	 return pattern.test(name);
	}
	 
	// 验证手机号
	function isPhoneNo(phone) { 
	 var pattern = /^1[34578]\d{9}$/; 
	 return pattern.test(phone); 
	}
	 
	// 验证邮箱 
	function ismailNo(email) { 
	 var pattern = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
	 return pattern.test(email); 
	} 
    $('.name input').blur(function(){
    	if(isChinaName($('.name input').val()) == true){
    		$('.name .dui').show();
    		$('.name .cha').hide();

    	}else{
    		$('.name .dui').hide();
    		$('.name .cha').show();
    	}
    })
 	$('.phone input').blur(function(){
    	if(isPhoneNo($('.phone input').val()) == true){
    		$('.phone .dui').show();
    		$('.phone .cha').hide();

    	}else{
    		$('.phone .dui').hide();
    		$('.phone .cha').show();
    	}
    })
    $('.liuyan textarea').blur(function(){
    	if(($('.liuyan textarea').val()).length==0){
    		$('.liuyan .dui').hide();
    		$('.liuyan .cha').show();
    	}else{
    		$('.liuyan .dui').show();
    		$('.liuyan .cha').hide();
    	}
    })
    $('.faq_contact .contact .contact_con button').click(function(){

    	if(isChinaName($('.name input').val()) == false){
    		$('.name .dui').hide();
    		$('.name .cha').show();
    		return false;
    	}
    	if(isPhoneNo($('.phone input').val()) == false){
    		$('.phone .dui').hide();
    		$('.phone .cha').show();
    		return false;
    	}
    	if(($('liuyan textarea').val()).length==0){
    		$('liuyan textarea').hide();
    		$('liuyan textarea').show();
    		return false;
    	}
    	$('#formOrder').submit();
    })

	$('.pop_form textarea').blur(function(){
    	if(($('.pop_form textarea').val()).length==0){
    		$(this).siblings('.dui').hide();
    		$(this).siblings('.cha').show();
    	}else{
    		$(this).siblings('.dui').show();
    		$(this).siblings('.cha').hide();
    	}
    })
	$('.pop_form input').blur(function(){
    	if(($('.pop_form input').val()).length==0){
    		$(this).siblings('.dui').hide();
    		$(this).siblings('.cha').show();
    	}else{
    		$(this).siblings('.dui').show();
    		$(this).siblings('.cha').hide();
    	}
    })







})