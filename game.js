 
 $(document).ready(function(){
    $('#MyButton').click(function(event){
      event.preventDefault();
      pick( $("#input1").val() );
    });
  });


items  = ["puzzle", "jumped", "jacked","jinxed", "mouse",]

random = items[Math.floor(Math.random() * items.length)];


function pick( userInput ){
 final = [ ]
//splits up word
var splitWord = random.split("");
console.log(splitWord)

var index = splitWord.indexOf(userInput);

 if( index > -1 ) { // yes
  splicedLet = splitWord.splice(index,1);
  console.log(splicedLet);
 } else { //no
  alert ("wrong guess")
 }
console.log(splitWord)

}

// pick()

