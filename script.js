let wins = 0;
let userHp = 40;
let grantHp = 10;
let name = prompt(`Enter your name.`);
let grantDmg = 0;
let userDmg = 0;
let userChoice;
let play;


function startGame() {
     play = prompt("Would you like to play?");
    if (play === "yes") {
        startCombat();
    }
}

function startCombat() {
    while (play === "yes") {
        userChoice = prompt(`Do you want to attack or quit?`);

        if (userChoice === "attack") {
            getDamage()
            userHp -= Math.floor(Math.random() * 5) + 1 ;
            grantHp -= Math.floor(Math.random() * 5) + 1 ;
            console.log(`${name} has taken ${userDmg} damage and has  ${userHp} healthpoints left `);
            console.log(`Grant has taken ${grantDmg} damage  and has ${grantHp} healthpoints left`);
            if (grantHp <= 0) {
                wins++;
                grantHp = 10;
                if (wins === 3) {
                    console.log(`${name} is victorious. ${name} wins the game.`);

                } else {
                    console.log(`Grant has been defeated. ${name} has to beat Grant ${3 - wins} more time(s).`);
                }
            }
            if (userHp <= 0) {
                console.log(`${name} has been defeated. Sucks to suck.`);

            }
        } else {
            return;
        }
    }
}
function getDamage() {
    grantDmg = Math.floor(Math.random() * 5) + 1 ;
    userDmg = Math.floor(Math.random() * 5) + 1 ;
    
}
startGame();



