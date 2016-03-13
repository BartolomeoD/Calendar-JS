function include(url) {
  var script = document.createElement('script');
  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
}
include ("jquery-2.2.1.min.js");

$(document).ready(function() {
	var options={
	year: 'numeric',
 	month: 'long',
	}
	var date = new Date;
	var month = date.getMonth();
	var year = date.getFullYear();
	var showMonth=function(dateNum) {
		dateNum.setDate(1);
		dateNum.setDate(dateNum.getDate() - dateNum.getDay());
		for(var i = 1 ; i<7 ;i++) {
				for(var k=0;k<7;k++) {
					dateNum.setDate(dateNum.getDate() +1);
					t1.rows[i].cells[k].innerHTML=dateNum.getDate();
					t1.rows[i].cells[k].className="";
					if((dateNum.getMonth()<month)||(dateNum.getFullYear<year)) {
						t1.rows[i].cells[k].className="prvsMounth";
						t1.rows[i].cells[k].bgcolor="grey";
					}
					if((dateNum.getMonth()>month)||(dateNum.getFullYear>year)) {
						t1.rows[i].cells[k].className="nextMounth";
						t1.rows[i].cells[k].bgcolor="grey";
					}
			}

		}
		dateNum.setMonth(month);
		current.innerHTML=dateNum.toLocaleString("ru", options);
	}
	showMonth(date);
	$('#prvs').on("click", function() {
		month--;
		date.setMonth(month);
		showMonth(date);
	})
	$('#next').on("click", function() {
		month++;
		date.setMonth(month);
		showMonth(date);
	})
	$('#t1').on("click", function(event) {
			var target = event.target;
				if(target.className=="prvsMounth") {
					date.setMonth(month-1);
				}
				if(target.className=="nextMounth") {
					date.setMonth(month+1);
				}
				if ((target.className!="nextMounth")&&(target.className!="prvsMounth")) {
					date.setMonth(month);
				}
			date.setDate(target.innerHTML);
			alert(date); 
		
	})

})
