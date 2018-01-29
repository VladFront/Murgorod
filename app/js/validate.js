$(document).ready(function(){
	$('#order .text-field').each(function(index,value){
		$(this).blur(function() {
  			$(this).removeClass("order-form-error");
			$(this).addClass("order-form-blur");
		});
		$(this).focus(function() {
  			$(this).removeClass("order-form-error");
			$(this).addClass("order-form-focus");
		});
	});
	
	$("#sanatory").change(function (){
			var p = $(this);
			$(p).removeClass("order-form-error"); 
			$(p).addClass("order-form-change");
	});
	$("#num").change(function (){
			var p = $(this);
			$(p).removeClass("order-form-error"); 
			$(p).addClass("order-form-change");
	});
	$("#date").change(function (){
			var p = $(this);
			$(p).removeClass("order-form-error"); 
			$(p).addClass("order-form-change");
	});
								
	$('#get').click(function(){
								
		var re = /^[\+0-9\-\(\)\ ]+$/;
		var d =  /^[0-9]*\.[0-9]*\.[0-9]*$/;
		var phonefilter = /^[\+0-9\-\(\)\ ]+$/;
		var email = /^[\.a-z0-9_\-]+[@][a-z0-9_\-]+([.][a-z0-9_\-]+)+[a-z]{1,4}$/i;
										
		if($('#sanatory').val()==''){
			$('#sanatory').addClass("order-form-error");
		}
		if(!re.test($('#c-old').val())){
			$('#c-old').addClass("order-form-error");
		}
		/*if(!re.test($('#c-child').val())){
			$('#c-child').addClass("order-form-error");
		}*/
		if($('#num').val()==''){
			$('#num').addClass("order-form-error");
		}
		if(!d.test($('#date').val())){
			$('#date').addClass("order-form-error");
		}
		if(!re.test($('#days').val())){
			$('#days').addClass("order-form-error");
		}
		if($('#nameroom').val()=='' || $('#nameroom').val()=='введите Фамилию Имя и Отчество'){
			$('#nameroom').addClass("order-form-error");
		}
		if(!phonefilter.test($('#phone').val())){
			$('#phone').addClass("order-form-error");
		}
		if($('#email').val()!="введите Ваш e-mail"){
			if(!email.test($('#email').val())){
				$('#email').addClass("order-form-error");
			}
		}
		if($('#name').val()=='' || $('#name').val()=='введите Имя и Отчество'){
			$('#name').addClass("order-form-error");
		}
		
		
		$(".order-form-block").each(function(index,value){
			if($(".order-form-error", $(this)).length>0){
				$(".order-form-failed", $(this)).show();
			}else{
				$(".order-form-failed", $(this)).hide();
			}
		});
		
		if($('#order .order-form-error').length>0){
			
		}else{
			$('#order').submit();
		}
										
	});
});