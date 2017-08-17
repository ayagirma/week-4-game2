
// capturing the random number generator
// $(document).ready(function() {
var randNum = Math.floor((Math.random() *105) + 20);
// console.log(randNum);


// each crystal the maximum generating number is 12 start from 1
var hexagonCrystal = Math.floor((Math.random() *12) + 1);
var prismCrystal = Math.floor((Math.random() *12) + 1);
var octagonCrystal= Math.floor((Math.random() *12) + 1);
var squareCrystal= Math.floor((Math.random() *11) + 1);

// for testing purpose only
console.log(hexagonCrystal);
console.log(prismCrystal);
console.log(octagonCrystal);
console.log(squareCrystal);



// assigned intial values
var lifeCounter=0;
var wins = 0;
var losses = 0;
var crystalDisplay = 0;
var myScore=0;




        $(".lifeCounter").html(randNum);
           // console.log(randNum);

        // on click events for crystals
         

        $(".hexagonCrystal").click(function() {
             update(hexagonCrystal);
            $(".hexagonCrystal").show("slow");
        });


        $(".prismCrystal").click(function() {
        	update(prismCrystal);
            $(".prismCrystal").show("slow");
        });

        $(".octagonCrystal").click(function() {
        	update(octagonCrystal);
            $(".octagonCrystal").show("slow");
        });

        $(".squareCrystal").click(function() {
        	update(squareCrystal);
            $(".squareCrystal").show("slow");
        });
   



// updating the the guessing function.

function update(crystal){
    console.log("crystal" + crystal);
   myScore= myScore + crystal;

    $(".crystalDisplay").empty();
    $(".crystalDisplay").append(myScore);

    if(myScore === randNum) {
    	wins++;
       
    $("#WinDisplay").html("wins:" + wins);
    	//reset()	
       
    }
     else if(myScore > randNum){ 

         losses++;
         $("#lossDisplay").html("losses:" + losses);
        //reset() 
        console.log(losses);
       
     }
         
       
}
  

  function reset(){

        var randNum = Math.floor((Math.random() *45) + 1);

        $(".lifeCounter").html(randNum);
        // regenerate another number
        var hexagonCrystal = Math.floor((Math.random() *12) + 1);
        var prismCrystal = Math.floor((Math.random() *12) + 1);
        var octagonCrystal= Math.floor((Math.random() *12) + 1);
        var squareCrystal = Math.floor((Math.random() *11) + 1)

         myScore = 0;


        $(".crystalDisplay").html(myScore);

        $(".lifeCounter").html(randNum);

};  

// });