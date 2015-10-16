function capitalizeFilter() {
   return function(inputString) {
       var capitalInput = ''; 
       for (i in inputString){
           if (i == 0 || inputString[i - 1] == ' ' || inputString[i - 1] == '-'){
               capitalInput += inputString[i].toUpperCase();
           }    
           else{capitalInput += inputString[i].toLowerCase()}
       }
       return capitalInput;
   };
}

angular.module('insultApp').filter('capitalize', capitalizeFilter);



// run loop throughout string....check for " " or - ..if true...replace caps after the " " or -
