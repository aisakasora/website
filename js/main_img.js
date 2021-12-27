window.addEventListener('load',function(){
	
	var left_img = document.querySelector('.left_img');
	var right_img = document.querySelector('.right_img');
	var main = document.querySelector('.main');
	var mainWidth = main.offsetWidth;
	
	main.addEventListener('mouseenter',function(){
		left_img.style.display = 'block';
		right_img.style.display = 'block';
		clearInterval(timer);
		timer = null; 
	})
	
	main.addEventListener('mouseleave',function(){
		left_img.style.display = 'none';
		right_img.style.display = 'none';
		timer = setInterval(function() {
			//手动调用点击事件
			right.click();
		}, 2000);
	})
	
	var ul = main.querySelector('ul')
	var ol = main.querySelector('.circle')
	for (var i = 0; i < ul.children.length; i++) {
		
		var li = document.createElement('li'); 
		
		li.setAttribute('index', i);
		
		ol.appendChild(li);
		
		li.addEventListener('click', function() {
			
			for (var i = 0; i < ol.children.length; i++) {
				ol.children[i].className = '';
			}
		
			this.className = 'current';
			var index = this.getAttribute('index');
			
			num = index;
			
			circle = index;
		
			animate(ul, -index * mainWidth);
		})
	}
	
	ol.children[0].className = 'current';

	var first = ul.children[0].cloneNode(true);
	ul.appendChild(first);

	var num = 0;
	
	var circle = 0;
	var flag = true;

	right_img.addEventListener('click',function(){
	if(flag){
		//关闭节流阀
			flag = false;
			if(num == ul.children.length-1){
				ul.style.left_img = 0;
				num = 0;
			}
			num++;
			animate(ul, -num*mainWidth,function(){
				//打开节流阀
				flag = true;
			});
			circle++;
			if (circle == ol.children.length) {
				circle = 0;
			}
			// 调用函数
			circleChange();
		}
	});
	// 8.左侧按钮
	left_img.addEventListener('click',function(){
	if(flag){
			flag = false;
			if(num == 0){
				num = ul.children.length - 1;
				ul.style.left_img = -num * mainWidth + 'px';
			}
			num--;
			animate(ul, -num*mainWidth, function(){
				flag = true;
			});
			circle--;
			if (circle < 0) {
				circle = ol.children.length - 1;
			}
			// 调用函数
			circleChange();
		}
	});
	function circleChange() {
		
		for (var i = 0; i < ol.children.length; i++) {
			ol.children[i].className = '';
		}
		
		ol.children[circle].className = 'current';
	}
	// 自动播放轮播图
	var timer = setInterval(function() {
		//手动调用点击事件
		right_img.click();
	}, 2000);
})