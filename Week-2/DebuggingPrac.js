// Debugging practice


// ---------A:

let launchReady = false;
let fuelLevel = 17000;

if (fuelLevel >= 20000) {     // add closing parenthesis
   console.log('Fuel level cleared.');
   launchReady = true;
   } else {
   console.log('WARNING: Insufficient fuel!');
   launchReady = false;
};


// ---------B:

let launchReady = false;
let crewStatus = true;
let computerStatus = 'green';

if (crewStatus && computerStatus === 'green') {			// removed extra '&'
   console.log('Crew & computer cleared.');
   launchReady = true;
   } else {
      console.log('WARNING: Crew or computer not ready!');
      launchReady = false;
} // end of if-statement

if (launchReady) {
   console.log("10, 9, 8, 7, 6, 5, 4, 3, 2, 1...");		// removed extra '('
   console.log("Fed parrot...");
   console.log("Ignition...");
   console.log("Liftoff!");
   } else {
      console.log("Launch scrubbed.");
} // end of if-statement


// ---------C:

let launchReady = false;
let fuelLevel = 17000;

if (fuelLevel >= 20000) {	   // changed to capital L
   console.log('Fuel level cleared.');
   launchReady = true;
	} else {
   console.log('WARNING: Insufficient fuel!');
   launchReady = false;
}


// ---------D:

let launchReady = false;
let fuelLevel = 27000;

if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   launchReady = true;
   } else {
   console.log('WARNING: Insufficient fuel!');
   launchReady = false;
   }

if (launchReady) {
   console.log("10, 9, 8...");
   console.log("Fed parrot...");
   console.log("6, 5, 4...");
   console.log("Ignition...");
   consoul.log("3, 2, 1...");     // changed 'console' wording
   console.log("Liftoff!");
   } else {
   console.log("Launch scrubbed.");
   }



// ---------E:
let launchReady = false;
let fuelLevel = 17000;
let crewStatus = true;
let computerStatus = 'green';

if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   launchReady = true;
	} else {
   console.log('WARNING: Insufficient fuel!');
   launchReady = false;
	}

if (crewStatus && computerStatus === 'green' && launchReady == true){
   console.log('Crew & computer cleared.');
   launchReady = true;
   } else {
   console.log('WARNING: Crew or computer not ready!');
   launchReady = false;
   }

if (launchReady) {
   console.log('10, 9, 8, 7, 6, 5, 4, 3, 2, 1...');
   console.log('Liftoff!');
   } else {
   console.log('Launch Not Ready!');
   console.log('Launch scrubbed.');
   }

