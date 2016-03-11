function include(url) {
  var script = document.createElement('script');
  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
}
include ("jquery-2.2.1.min.js");

$(document).ready(function() {
  var getfromjson = function(jsonurl, page, pageEnd) {
    $.getJSON(jsonurl, function(data) {
      var jsonstring = '';
      for (var num = page; num < pageEnd; num++) {
        jsonstring+='<div>'+data[num].id+': '+data[num].name+'<br>'+'</div>';
      }
      $(".content").html(jsonstring);
    })
  };
  $('#b1').on("click", function() {
    $(".content").html("<div> HElloWorld! </div>");
  });

  $('#b2').on("click", function() {
    getfromjson('JSON/data.json', 0, 4);
  });

  $('#b3').on("click", function() {
    getfromjson('JSON/data3.json', 0, 10);
  });

  $('#b4').on("click", function() {
	  $.getJSON('JSON/data3.json', processData);
    function processData(data) {
		lastPage = data.length % 5;
		numLastPage = data.length - lastPage;
	}
		page = 0 ;
		pageEnd = 5;
    getfromjson('JSON/data3.json',page, pageEnd);
     $('.bottom').show();
    $('#Next').on("click", function(){
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
	
	$('#Prvs').on("click", function(){
		if (page>4){
      page=page - 5;
	  pageEnd= pageEnd - 5;
      getfromjson('JSON/data3.json', page, pageEnd);
	}})
  })
})
