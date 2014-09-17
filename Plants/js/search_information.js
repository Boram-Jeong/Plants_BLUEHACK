function loadSeeds(id) {
	console.log('test');
	$('#review_contents').children().remove();

	var url = 'http://210.118.74.119:8080/hackathon/getSeedList.do?id=' + id;

	$.ajax({
		url : url,
		type : 'get',
		dataType : 'json',
		success : function(result) {
			console.log(result);
			for ( var idx = 0; idx < result.length; idx++) {
				$('#review_contents').append(
						'<a href="#" class="list-group-item"><span class="glyphicon glyphicon-leaf" id="leaf_icon"></span>'
								+ result[idx].text + '<span class="badge">'
								+ result[idx].rate + '</span></a>');
			}
		},
		error : function(e) {
			console.log(e.responseText);
		}
	});
}

$(document).ready(function() {
	
	
	var parameters = location.search.split('?')[1];
	var parameter = parameters.split('&');
	console.log(parameter);

	var id = parameter[0].split('=')[1];
	var name = decodeURI(parameter[1].split('=')[1]);
	var lat = parameter[2].split('=')[1];
	var lng = parameter[3].split('=')[1];
	var address = decodeURI(parameter[5].split('=')[1]);
	var rate = parameter[6].split('=')[1];

	var seedRate;
	
	$('#cafe_information').append(name + '<br>');
	$('#cafe_information').append(address + '<br>');
	$('#cafe_information').append(rate);

	// load seed
	loadSeeds(id);
	
	// load map
	console.log('lat: ' + lat + ', lng: ' + lng);
	
	load_MiniMap(lat, lng);
	
	$(function(){
	    $('#seedRate').on('change', function(){
	      seedRate = $(this).val();
	    });
	  });
	
	$('#writeSeed').click(function() {
		var seedText = $('#seedText').val();

		if (seedText === '') {
			alert('글을 입력해주세요.');
			return;
		}

		var url = 'http://210.118.74.119:8080/hackathon/writeSeed.do';
		$.ajax({
			url : url,
			type : 'post',
			data : {
				id : id,
				text : seedText,
				rate : seedRate
			},
			dataType : 'json',
			success : function(result) {
				if (result === 200) {
					alert("시드 남기기에 성공했습니다.");
					$('#seedText').val('');
					$(".rating-clear").click();
					loadSeeds(id);
				}
			},
			error : function(e) {
				console.log(e.responseText);
			}
		});
	});
});
