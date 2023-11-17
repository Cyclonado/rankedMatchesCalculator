/* vars and memory allocation */


let player = "DominicToretto"
let wins = 51
let losses = 0
let elo = ``
let result = ``

/* program execution */

rankedMatchCalculator()

console.log(" the player "+ player + " is " + elo + " level, with " + result + " wins.")




/* Function space*/

function rankedMatchCalculator(){

        result = wins - losses
        if(result<= 10){elo = `Iron`}
        else if(result <= 20){elo = `Bronze`}
        else if(result <= 50){elo = `Silver`}
        else if(result <= 80){elo = `Gold`}
        else if(result <= 90){elo = `Diamond`}
        else if(result <= 100){elo = `Legend`}
        else if(result > 100){elo = `Imortal`}

}

