

function drawChart(data) {
	console.log(data);
	
    var mousePressed = false;
        
    var hldr = document.getElementById("verbs"),
        text = data[ Math.floor( 100 * Math.random() ) ];
    
    hldr.innerHTML = "";
    
    var R = Raphael("verbs", window.innerWidth, window.innerHeight),
        attr = {font: "50px Futura", opacity: 0.5};
         
    
    txt = R.text(320, 240, text).attr(attr).attr({fill: "#000"});
    
    var refreshVerb = setInterval( function() {
		if( !mousePressed) {
			txt.attr({text : data[ Math.floor(100 * Math.random() ) ] });
			}
		
		}, 1000);
		
    
    
    document.onmousedown = function (e) {
		mousePressed = true;
    };
    
    document.onmouseup = function (e) {
 		mousePressed = false;
		
    };


    
}