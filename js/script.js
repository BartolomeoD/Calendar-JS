function include(url) {
  var script = document.createElement('script');
  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
}
include ("jquery-2.2.1.min.js");

$(document).ready(function() {
	$(".bottom").hide();
  var getfromjson = function(jsonurl, page, pageEnd) {
    $.getJSON(jsonurl, function(data) {
      var jsonstring = '';
      for (var num = page; num < pageEnd; num++) {
        jsonstring+='<div>'+data[num].id+': '+data[num].name+'<br>'+'</div>';
      }
      $(".main").html(jsonstring);
    })
  };
  $('#b1').on("click", function() {
    $(".main").html("<div> HElloWorld! </div>");
	$(".bottom").hide();
  });

  $('#b2').on("click", function() {
    getfromjson('JSON/data.json', 0, 4);
	$(".bottom").hide();
  });

  $('#b3').on("click", function() {
    getfromjson('JSON/data3.json', 0, 10);
	$(".bottom").hide();
  });

  $('#b4').on("click", function() {
	  $(".bottom").show();
	  $.getJSON('JSON/data3.json', processData);
    function processData(data) {
		lastPage = data.length % 5;
		numLastPage = data.length - lastPage;
	}
		page = 0 ;
		pageEnd = 5;
    getfromjson('JSON/data3.json',page, pageEnd);
      $('.bottom').show();   
    $('#next').on("click", function(){
		if(pageEnd<=numLastPage)
			{
			if(pageEnd==numLastPage){
		page=page +5;
		pageEnd= pageEnd + 5;
		empty = ' ';
		getfromjson('JSON/data3.json', page, numLastPage+lastPage);
			}
		else{
      page = pageEnd;
      pageEnd += 5;
      getfromjson('JSON/data3.json', page, pageEnd);
	}}})
	$('#prvs').on("click", function(){
		if (page>4){
      page=page - 5;
	  pageEnd= pageEnd - 5;
      getfromjson('JSON/data3.json', page, pageEnd);
	}})
  })
  $('#b5').on("click", function() {
	$(".main").html("jk<br>ldgahklf<br><br>da<br><br><br><br><br>kg<br>hdfk<br><br><br>n fjaksdfkas<br>jdf/n/n<br>/n/n/<br>n/n<br>/n")
	$(".bottom").hide();
 })
 })
