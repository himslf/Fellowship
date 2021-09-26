function fight() {
    let monster = prompt("Name Your Monster: ");
    let hero = prompt("Name Your Hero: ");
    let villHealth = 50;
    let heroHealth = 50;
    // simulated dice rolls
    let HDiceRoll = Math.floor(Math.random() * 19) + 1;
    let VDiceRoll = Math.floor(Math.random() * 19) + 1;
 
    //Does action before health reaches 0
    while (heroHealth > 0 && villHealth > 0) {
          // simulated dice rolls
          let HDiceRoll = Math.floor(Math.random() * 19) + 1;
          let VDiceRoll = Math.floor(Math.random() * 19) + 1;
      
          // HERO check
          if (HDiceRoll == 1 || HDiceRoll == 2) {
              heroHealth -= 5;
              alert(`${hero} stabbed themself. ${hero}'s health is now ${heroHealth}.`);
            }
            else if (HDiceRoll >= 3 && HDiceRoll <= 10) {
                villHealth -= 0;
                alert(`${hero} missed. ${monster}'s health is at ${villHealth}.`);
            }
            else if (HDiceRoll >= 11 && HDiceRoll <= 18) {
                villHealth -= 10;
                alert(`${hero} made a hit. ${monster}'s health is at ${villHealth}.`);
            }
            else if (HDiceRoll == 19 || HDiceRoll == 20) {
                villHealth -= 20;
                alert(`${hero} makes critical attack! ${monster}'s health is ${villHealth}HP.`);
            }
      
          // VILLAIN check
          if (VDiceRoll == 1 || VDiceRoll == 2) {
              villHealth -= 5;
              alert(`${monster} stabs themself. Sheesh. ${monster}'s health is ${villHealth}HP.`);
            }
            else if (VDiceRoll >= 3 && VDiceRoll <= 10) {
                heroHealth -= 0;
                alert(`${monster} missed. ${hero}'s health is ${heroHealth}HP.`);
            }
            else if (VDiceRoll >= 11 && VDiceRoll <= 18) {
                heroHealth -= 10;
                alert(`${monster} made a hit. ${hero}'s health is ${heroHealth}HP.`);
            }
            else if (VDiceRoll == 19 || VDiceRoll == 20) {
                heroHealth -= 20;
                alert(`${monster} makes critical attack! ${hero}'s health is ${heroHealth}HP.`);
            }
      
          // had 0HP been reached?
          if (villHealth <= 0 && villHealth < heroHealth) {
                alert(`${hero} defeats ${monster}; ${hero} WINS!`);
            }
            else if (heroHealth <= 0 && heroHealth < villHealth) {
                alert(`${monster} defeats ${hero}; ${monster} WINS! *sad_face*`);
            }
            else if (heroHealth && villHealth == 0) {
                alert(`${hero} & ${monster} both died; Winner: Grim Reaper.`);
            }
    } // end of WHILE loop
      
    let inPut = prompt("Would you like to play again?");
    
    if (inPut == "yes" || inPut == "Yes") {
        return fight();
    }
    else if (inPut == "no" || inPut == "No") {
        alert("Thanks for playing! Bye.");
        return;
    }
    else {
        inPut = prompt("It's 'Yes' or 'No'. Play Again?");
    }
} // END of FUNCTION

// calling of function
fight();