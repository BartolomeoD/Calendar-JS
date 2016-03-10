function include(url) {
  var script = document.createElement('script');
  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
}
include ("js/jquery-2.2.1.min.js");

$(document).ready(function() {
  $('#d1').hide();
  $('#d2').hide();
  $('#d3').hide();
  $('#d4').hide();
  $('#prvs').hide();
  $('#next').hide();
  var page;
  var pageEnd;
  $('#b1').on("click", function() {
  $('#prvs').hide();
  $('#next').hide();

    $(".content").html("<div> HElloWorld! </div>");
  });

  $('#b2').on("click", function() {
	$('#prvs').hide();
	$('#next').hide();
    $.getJSON('JSON/data.json', processData);
    function processData(data) {
      var empty='';
      for (var num = 0; num <= 3; num++) {
        empty+='<p>'+data[num].mytitle+'<br>'+data[num].myarticle+'</p>';
      }
      $(".content").html(empty);
    }
  });

  $('#b3').on("click", function() {
	$('#prvs').hide();
    $('#next').hide();
    $.getJSON('JSON/data2.json', processData);
    function processData(data) {
      var bla='';
      $.each(data,function(mainobj, obj){
        bla+='<p>'+obj.mytitle+'<br>'+obj.myarticle+'</p>';
      });
      $(".content").html(bla);
    }
  });

  $('#b4').on("click", function() {
	$.getJSON('JSON/data3.json', processData);
    function processData(data) {
		page = 0 ;
		pageEnd = 5;
		var empty='';
		var numbPage
      for (numbPage = page; numbPage < pageEnd; numbPage++) {
        empty+='<p>'+data[numbPage].id+'<br>'+data[numbPage].name+'</p>';
      };
	  $('#prvs').show();
	  $('#next').show();
      $(".content").html(empty);
	 // $(".content").html("dsada");
};
  });
  	  $('#next').on("click", function() {
		  $.getJSON('JSON/data3.json', processData);
    function processData(data) {
		if (page + 5 < data.length){
			
			if(data.length-pageEnd<5){
				page=page +5;
				pageEnd= pageEnd + 5;
				empty = ' ';
				for(var numbPage=page;numbPage < data.length; numbPage++) {
                empty+='<p>'+data[numbPage].id+'<br>'+data[numbPage].name+'</p>';
		        }
				$(".content").html(empty);
				
			}else{
				empty=' ';
		  page=page +5;
		  pageEnd= pageEnd + 5;
		for (numbPage=page;numbPage < pageEnd; numbPage++) {
        empty+='<p>'+data[numbPage].id+'<br>'+data[numbPage].name+'</p>';
		};
		$(".content").html(empty);
		//alert(page+' '+pageEnd);
		}
		}
	  }
	  }
    )
		  $('#prvs').on("click", function() {
			  $.getJSON('JSON/data3.json', processData);
    function processData(data) {
		if (page>4){
		  empty = ' ';
		  page=page - 5;
		  pageEnd= pageEnd - 5;
		for (numbPage=page;numbPage < pageEnd; numbPage++) {
        empty+='<p>'+data[numbPage].id+'<br>'+data[numbPage].name+'</p>';
		};
		$(".content").html(empty);
		  }
		  }
		  }
    )

});
