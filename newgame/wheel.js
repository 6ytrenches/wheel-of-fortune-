var degrees=0, seconds=0, previousRotation=0;

$("#spinner").click(function(){
    
 previousRotation = degrees;
 degrees+= parseInt(Math.random() * 360 + 180);
miliseconds = parseInt((degrees - previousRotation)) * 5;
    $("#seconds").text(miliseconds);
    $("#degrees").text(degrees);
    $(this).css({
        "-webkit-transform" : "rotate("+ degrees +"deg)",
        "-webkit-transition-duration" : miliseconds + "ms"
    });
    // markerpostion

 //check marker
var topmarker = $( "#topmarker" );
var topposition = topmarker.position();
$( "#postion2" ).text( " TOP MARKER: left: " + topposition.top + ", top: " + topposition.left );

var marker1 = $( "#marker1" );
var positionOne = marker1.position();
$( "#postion1" ).text( "MARKER1: left: " + positionOne.left + ", top: " + positionOne.top );

// if( positionOne.left < && {

// }
});















