//Elevator class
const MAX_FLOOR = 100;
const MIN_FLOOR = 1;
	
var Elevator = class{
	//Constructor
	constructor(){
		this.floor = MIN_FLOOR; //All elevators will start on the 1st floor
	}
}

//Main
const NUM_ELEVATORS = 5;

var elevators = [];

for (var i=0; i<NUM_ELEVATORS; i++){
	elevators[i] = new Elevator();
}