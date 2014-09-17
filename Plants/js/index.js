
 $(document).ready(function() {

	 console.log('onload');
	
	 var dst_eng = [
	           		"atm",
	           		"bakery",
	           		"bank",
	           		"bar",
	           		"bus_station",
	           		"cafe",
	           		"clothing_store",
	           		"convenience_store",
	           		"department_store",
	           		"florist",
	           		"food",
	           		"gas_station",
	           		"grocery_or_supermarket",
	           		"hair_care",
	           		"hospital",
	           		"library",
	           		"liquor_store",
	           		"movie_theater",
	           		"museum",
	           		"night_club",
	           		"park",
	           		"parking",
	           		"pharmacy",
	           		"police",
	           		"restaurant",
	           		"school",
	           		"shoe_store",
	           		"shopping_mall",
	           		"spa",
	           		"store",
	           		"subway_station",
	           		"university",
	           		"zoo"
	    ]

	    var dst_kor = [
	                          "현금지급기",
	                          "베이커리",
	                          "은행",
	                          "바(bar)",
	                          "버스정류장",
	                          "카페",
	                          "옷가게",
	                          "편의점",
	                          "백화점",
	                          "화원",
	                          "음식점",
	                          "주유소",
	                          "슈퍼마켓",
	                          "미용실",
	                          "병원",
	                          "도서관",
	                          "술 판매점",
	                          "영화관",
	                          "박물관",
	                          "클럽",
	                          "공원",
	                          "주차장",
	                          "약국",
	                          "경찰서"         
	    ]
	 
	 
	var lng = 37.508952;
	var lat = 127.061016;	
	
	$('#cate1').click(
	      function(ev) {
	         var name = ev.target.textContent;
	         for(var idx = 0; idx < dst_kor.length; idx++)
	         {
	        	 	if(dst_kor[idx] === name)
	        	 		break;
	         }
	         var category = dst_eng[idx];
	         var url = "http://210.118.74.119:8080/hackathon/getCategoryList.do?category="+category+"&lng="+lng+"&lat="+lat;
	        // var url = "http://210.118.74.119:8080/hackathon/getCategoryList.do?lng="+lng+"&lat="+lat+"&category="+category;
		$.ajax({
			url : url,
			type : 'get',
			dataType : 'json',
			success : function(result) {
				makeMakersbyTag(result);
			},
			error : function(e) {
				console.log(e.responseText);
			}
		});
	  });
	$('#cate2').click(
		      function(ev) {
		         var name = ev.target.textContent;
		         for(var idx = 0; idx < dst_kor.length; idx++)
		         {
		        	 	if(dst_kor[idx] === name)
		        	 		break;
		         }
		         var category = dst_eng[idx];
		         var url = "http://210.118.74.119:8080/hackathon/getCategoryList.do?category="+category+"&lng="+lng+"&lat="+lat;
		        // var url = "http://210.118.74.119:8080/hackathon/getCategoryList.do?lng="+lng+"&lat="+lat+"&category="+category;
			$.ajax({
				url : url,
				type : 'get',
				dataType : 'json',
				success : function(result) {
					makeMakersbyTag(result);
				},
				error : function(e) {
					console.log(e.responseText);
				}
			});
		  });
	$('#cate3').click(
		      function(ev) {
		         var name = ev.target.textContent;
		         for(var idx = 0; idx < dst_kor.length; idx++)
		         {
		        	 	if(dst_kor[idx] === name)
		        	 		break;
		         }
		         var category = dst_eng[idx];
		         var url = "http://210.118.74.119:8080/hackathon/getCategoryList.do?category="+category+"&lng="+lng+"&lat="+lat;
		        // var url = "http://210.118.74.119:8080/hackathon/getCategoryList.do?lng="+lng+"&lat="+lat+"&category="+category;
			$.ajax({
				url : url,
				type : 'get',
				dataType : 'json',
				success : function(result) {
					makeMakersbyTag(result);
				},
				error : function(e) {
					console.log(e.responseText);
				}
			});
		  });
	$('#cate4').click(
		      function(ev) {
		         var name = ev.target.textContent;
		         for(var idx = 0; idx < dst_kor.length; idx++)
		         {
		        	 	if(dst_kor[idx] === name)
		        	 		break;
		         }
		         var category = dst_eng[idx];
		         var url = "http://210.118.74.119:8080/hackathon/getCategoryList.do?category="+category+"&lng="+lng+"&lat="+lat;
		        // var url = "http://210.118.74.119:8080/hackathon/getCategoryList.do?lng="+lng+"&lat="+lat+"&category="+category;
			$.ajax({
				url : url,
				type : 'get',
				dataType : 'json',
				success : function(result) {
					makeMakersbyTag(result);
				},
				error : function(e) {
					console.log(e.responseText);
				}
			});
		  });

     
	$('#search').click(function() {
		var keyword = $('#searchKeyword').val();
		
		if (keyword === ''){
			alert('검색어를 입력해 주세요.');
			return;
		}
		window.location.href = "./view/search_list.html?keyword=" + keyword;
	});
	
	$('#category_page').click(function() {
		window.location.href = "../view/change_category.html";
	});
	
	$('#change_mainPage').click(function() {
		window.location.href = "../index.html";
	});
	
	$('#option_page').click(function() {
		window.location.href = "./view/option.html";
	});
	
	$('#filter_page').click(function() {
		window.location.href = "../view/filtering.html";
	});
	
	
});

 
 function favoriteInit() {
 	var firstCheck = localStorage.getItem("firstCheck");
 	if (firstCheck != "1") {
 		localStorage.setItem("favorite1", "카페");
 		localStorage.setItem("favorite2", "영화관");
 		localStorage.setItem("favorite3", "바(bar)");
 		localStorage.setItem("favorite4", "음식점");
 	}
 	var favorite1 = localStorage.getItem("favorite1");
 	var favorite2 = localStorage.getItem("favorite2");
 	var favorite3 = localStorage.getItem("favorite3");
 	var favorite4 = localStorage.getItem("favorite4");
 	
 	$('#cate1').text(favorite1);
 	$('#cate2').text(favorite2);
 	$('#cate3').text(favorite3);
 	$('#cate4').text(favorite4);
 	
 	localStorage.setItem("firstCheck", "1");
 }
 
 function init() {
	 favoriteInit();
	 initialize();	 
 }

