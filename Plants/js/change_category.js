$(document).ready(function(){
	$('#save_favorite').click(function() {
		var favorite1 = $('#favorite1').val();
		var favorite2 = $('#favorite2').val();
		var favorite3 = $('#favorite3').val();
		var favorite4 = $('#favorite4').val();
		localStorage.setItem("favorite1", favorite1);
		localStorage.setItem("favorite2", favorite2);
		localStorage.setItem("favorite3", favorite3);
		localStorage.setItem("favorite4", favorite4);
		window.location.href = "../index.html";
		alert("저장하였습니다");
	});
	$('#cancle_favorite').click(function(e) {
		 e.preventDefault();
		 history.back(1);
	});
});

function set_favorite() {
	var favorite1 = localStorage.getItem("favorite1");
	var favorite2 = localStorage.getItem("favorite2");
	var favorite3 = localStorage.getItem("favorite3");
	var favorite4 = localStorage.getItem("favorite4");
	$('#favorite1').val(favorite1);
	$('#favorite2').val(favorite2);
	$('#favorite3').val(favorite3);
	$('#favorite4').val(favorite4);
}