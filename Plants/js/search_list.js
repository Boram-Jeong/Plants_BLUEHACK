$(document)
		.ready(
				function() {
					//console.log('onload');
					
					var searchList;
					var selectedIndex;

					var keyword = location.search.split('keyword=')[1];

					var url = 'http://210.118.74.119:8080/hackathon/getSearchList.do?keyword='
							+ keyword + '&lat=37.508952&lng=127.061016';
					$.ajax({
						url : url,
						type : 'get',
						dataType : 'json',
						success : function(result) {
							makeMakersbyTag(result);
							searchList = result;
							for ( var idx = 0; idx < result.length; idx++) {
								$('#searchList').append(
										'<a href="#" class="list-group-item">'
												+ result[idx].name + '</a>');
							}
						},
						error : function(e) {
							console.log(e.responseText);
						}
					});

					$('#searchList')
							.click(

									function(e) {
										var name = e.target.text;

										for ( var idx = 0; idx < searchList.length; idx++) {
											if (name === searchList[idx].name) {
												selectedIndex = idx;
											}
										}

										var selected = searchList[selectedIndex];

										console.log(selected);

										var url = "../view/search_information.html?id="
												+ selected.id
												+ "&name="
												+ selected.name
												+ "&lat="
												+ selected.lat
												+ "&lng="
												+ selected.lng
												+ "&cate="
												+ selected.cate
												+ "&address="
												+ selected.address
												+ "&rate="
												+ selected.rate;

										console.log(url);

										window.location.href = url;

									});

				});
