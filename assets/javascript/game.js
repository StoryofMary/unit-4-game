//html to load before JQuery runs
$(document).ready(function(){
   
    // Generate given number for user to start between 19 and 102
    var given=Math.floor(Math.random() *102) +19;
    
    // Displays this given number
    $(".given").text(given);
    
    //Generates the random hidden number for each gem between 1 and 12
    var hiddenBlue= Math.floor(Math.random() *12) +1;
    var hiddenOrange= Math.floor(Math.random() *12) +1;
    var hiddenPink= Math.floor(Math.random() *12) +1;
    var hiddenGreen= Math.floor(Math.random() *12) +1;
    
    // Variables to hold values for the total score, wins, and losses
    var totalScore= 0; 
    var wins= 0;
    var losses = 0;
    
    //Display text for total score, wins, and loses
    $(".total").text(totalScore);
    $(".wins").text(wins);
    $(".losses").text(losses);
  
    
    // Function to reset game after the player wins or loses
    function reset(){
        given = Math.floor(Math.random() *102) +19;

        $(".given").text(given);
        hiddenBlue= Math.floor(Math.random() *12) +1;
        hiddenOrange= Math.floor(Math.random() *12) +1;
        hiddenPink= Math.floor(Math.random() *12) +1;
        hiddenGreen= Math.floor(Math.random() *12) +1;
        totalScore= 0;
        $(".totalScore").text(playerTotal);
        } 
   
    // Functions to display the number of wins and losses
    function win(){
    wins++; 
    $('.wins').text(wins);
    reset();
    }
   
    function lose(){
    losses++;
    $('.losses').text(losses);
    reset()
    }

    // Click on crystals and add to get to given number
    $(".blue").on ('click', function(){
        totalScore = totalScore + hiddenBlue;
        $(".totalScore").text(totalScore); 
            
        //Conditions for winning and losing
            if (totalScore == given){
            win();
            }
            else if (totalScore > given){
            lose();
            }   
    })  
    $(".pink").on ('click', function(){
        totalScore = totalScore + hiddenPink;
        $(".totalScore").text(totalScore); 
            
        //Conditions for winning and losing
            if (totalScore == given){
            win();
            }
            else if (totalScore > given){
            lose();
        } 
    })  

    $(".orange").on ('click', function(){
        totalScore = totalScore + hiddenOrange;
        $(".totalScore").text(totalScore); 
            
        //Conditions for winning and losing
            if (totalScore == given){
            win();
            }
            else if (totalScore > given){
            lose();
        } 
    })  

    $(".green").on ('click', function(){
        totalScore = totalScore + hiddenGreen;
        $(".totalScore").text(totalScore); 
            
        //Conditions for winning and losing
            if (totalScore == given){
            win();
            }
            else if (totalScore > given){
            lose();
        } 
    });   
});
    
    
   