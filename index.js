// Code your solution in this file!
let hqLocation = 42

function distanceFromHqInBlocks(somevalue){
    if (somevalue > hqLocation) {
        return (somevalue - hqLocation )
    }  
    else {
        return (hqLocation - somevalue)
    }
}
function distanceFromHqInFeet(somevalue){
 return distanceFromHqInBlocks(somevalue) * 264
}
function distanceTravelledInFeet(start, destination){
    if (start > destination) {
        return (start - destination ) * 264
    }  
    else {
        return (destination - start) * 264
    }
}
function calculatesFarePrice(start, destination){
    let distance =  distanceTravelledInFeet(start, destination);
    if ((distanceTravelledInFeet(start, destination)) < 400 ){
        return 0
    }else if((distanceTravelledInFeet(start, destination)) >= 400 && (distanceTravelledInFeet(start, destination)) < 2000 ){
        return Math.abs((distance - 400) * 0.02)
      } else if((distanceTravelledInFeet(start, destination)) > 2000 && (distanceTravelledInFeet(start, destination)) <= 2500){
       return 25
      } else{
       return "cannot travel that far"
      }
     }

