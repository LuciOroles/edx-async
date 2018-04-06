
var route= {
		start : null,
		stop  : null,
		running: false,
		timeSpent : document.getElementById("timeSpent"),
		recordList : document.getElementById("recored-time"),
		interval  : null,
		old_time : 0,
		timeSpent_ : 0

},

onStartStop = function() {

	if ( route.running ) {
		route.start = new Date();
	}
	else {
		route.start = null;
		
	}

},

updateTimer  = function () {

	if (!route.start) return null;
	else 
	{
		var now = new Date();
		route.timeSpent_=  parseFloat((now -route.start)/1000).toFixed(2);
	 return	route.timeSpent_ ;
	}
},
updateView = function (element, value) {


	if (element && value) {
		if (element.nodeName!=="UL")		element.innerHTML = value;
		else {
			var el =document.createElement("li");
    			el.innerHTML = value;
			    element.appendChild(el);
		}
	}

};



 document.getElementById("start").addEventListener("click", function() { 
 			console.log("x");
 			route.running = !route.running;
 			 onStartStop();

 			 if (route.running) {
 				route.interval=setInterval(function() {
 					console.log(".......");
 				updateView(route.timeSpent,  parseFloat(route.old_time) + parseFloat(updateTimer()));
 				}, 500);	 	
 			 }
 			  else {

 			  	if  (route.interval)		clearInterval(route.interval);
 			  	route.old_time = route.timeSpent_;
 			  	route.interval = null;
 			  }
 		
 		
 	 });


document.getElementById("reset").addEventListener("click", function() {

	route.recordList.innerHTML = "";
  	updateView(route.timeSpent,  "0.00");
    clearInterval(route.interval);
  route=	{
		start : null,
		stop  : null,
		running: false,
		timeSpent : document.getElementById("timeSpent"),
		recordList : document.getElementById("recored-time"),
		interval  : null,
		old_time : 0,
		timeSpent_ : 0

	};


});


document.getElementById("record").addEventListener("click", function() {

	if (route.running) {
		 updateView(route.recordList, parseFloat(route.old_time) + parseFloat(route.timeSpent_) );
	}
	else return;
});

console.log("-start-");