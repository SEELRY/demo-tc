//地址
function addressFn(city, classArr) {
//	var cityData = address.city;
//	var city = city;
//	for(var i in cityData) {
//		var cityName = cityData[i].name;
//		if(city == cityName) {
//			var addressList = cityData[i].address;
//			var addressLi = '';
//			var addressLis = '';
//			var aLen = addressList.length;
//			if(aLen < 5) {
//				for(var j in addressList) {
//					addressLi += '<li><p class="title">' + addressList[j].name + '</p><div><p class="text">' + addressList[j].dz + '</p></div></li>'
//				}
//				$(classArr[0]).html(addressLi);
//			} else {
//				for(var j = 0; j < 4; j++){
//					addressLi += '<li><p class="title">' + addressList[j].name + '</p><div><p class="text">' + addressList[j].dz + '</p></div></li>'
//				}
//				$(classArr[0]).html(addressLi);
//				for(var k = 4; k < aLen; k++){
//					addressLis += '<li><p class="title">' + addressList[k].name + '</p><div><p class="text">' + addressList[k].dz + '</p></div></li>'
//				}
//				$(classArr[1]).html(addressLis);
//			}
//
//			return;
//		}
//	}
	$.getJSON('../js/addressData.json', function(data){
//		console.log(data.city)
		$.each(data.city, function (infoIndex, info){
			if(city == info['name']){
				var addressList = info['address'];
				var addressLi = '';
				var addressLis = '';
				var aLen = addressList.length;
				if(aLen < 5) {
					for(var j in addressList) {
						addressLi += '<li><p class="title">' + addressList[j].name + '</p><div><p class="text">' + addressList[j].dz + '</p></div></li>'
					}
					$(classArr[0]).html(addressLi);
				} else {
					for(var j = 0; j < 4; j++){
						addressLi += '<li><p class="title">' + addressList[j].name + '</p><div><p class="text">' + addressList[j].dz + '</p></div></li>'
					}
					$(classArr[0]).html(addressLi);
					for(var k = 4; k < aLen; k++){
						addressLis += '<li><p class="title">' + addressList[k].name + '</p><div><p class="text">' + addressList[k].dz + '</p></div></li>'
					}
					$(classArr[1]).html(addressLis);
				}
				return;
			}
      	})

	})
}

function cityTop(city) {
	$.get(city, function(result) {
		//  	console.log(result)
		$("#selectcity_pop").html(result);
	});
}

function adClass(className, index, adClass) {
	var adClass = "" ? "active" : adClass;
	$(className).eq(index).addClass(adClass).siblings().removeClass(adClass);
}

function swClass(className, index) {
	$(className).eq(index).show().siblings().hide();
}

function firstAdd(className, index) {
	$(className).eq(index).addClass('active').siblings().removeClass('active');
}

function firstShow(className, index) {
	$(className).eq(index).show();
}

//动画
function gdjz(div, cssname, offset) {
	var a, b, c, d;
	d = $(div).offset().top;
	a = eval(d + offset);
	b = $(window).scrollTop();
	c = $(window).height();
	//	console.log(a, b, c, d)
	if(b + c > a) {
		$((div)).addClass((cssname));
	}
}

function winSc(className, height, addClass) {
	$(window).scroll(function() {
		if($(window).scrollTop() >= height) {
			$(className).addClass(addClass);
		} else {
			$(className).removeClass(addClass);
		}
	});
}


function getCity(cityName, classArr){
	$.getJSON('https://www.xinghuo100.com/js/addressData.json?callback=?', function(data){
		console.log(data.city)
//		$.each(data.city, function (infoIndex, info){
//			if(cityName == info['name']){
//				var addressList = info['address'];
//				var addressLi = '';
//				var addressLis = '';
//				var aLen = addressList.length;
//				if(aLen < 5) {
//					for(var j in addressList) {
//						addressLi += '<li><p class="title">' + addressList[j].name + '</p><div><p class="text">' + addressList[j].dz + '</p></div></li>'
//					}
//					$(classArr[0]).html(addressLi);
//				} else {
//					for(var j = 0; j < 4; j++){
//						addressLi += '<li><p class="title">' + addressList[j].name + '</p><div><p class="text">' + addressList[j].dz + '</p></div></li>'
//					}
//					$(classArr[0]).html(addressLi);
//					for(var k = 4; k < aLen; k++){
//						addressLis += '<li><p class="title">' + addressList[k].name + '</p><div><p class="text">' + addressList[k].dz + '</p></div></li>'
//					}
//					$(classArr[1]).html(addressLis);
//				}
//				return;
//			}
//    	})

	})
}
