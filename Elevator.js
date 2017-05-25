const MAX_FLOOR = 100;
const MIN_FLOOR = 1;
const directionEnum = {
	UP: 1,
	DOWN: -1
}

//Elevator class	
var Elevator = class{
	//Constructor
	constructor(label){
		this._currentFloor = MIN_FLOOR; //All elevators will start on the 1st floor
		this._requestedFloor; //The requestedFloor that is chosen
		this._label = label; //Labels the elevator
		this._isOpen = true; //When the door is closed, the elevator is moving
	}
	
	//Move the elevator once in the direction specified
	move(direction){
		// A valid direction must be given
		if (typeof direction == 'number'){
			var nextFloor = this._currentFloor + direction;
			
			//The elevator cannot go beyond floor boundaries
			if (nextFloor <= MAX_FLOOR && nextFloor >= MIN_FLOOR)
				this._currentFloor += direction;
			
			//Report the floor
			console.log("Elevator "+this._label+" has moved to floor: "+this._currentFloor);
		}
	}
	
	//Open or close the elevator
	pressButton(){
		//If the door is open, close it and vice versa
		this._isOpen = !this._isOpen; 
		console.log("Elevator "+this._label+"'s door is open? " + this._isOpen);
	}
}

//Main
const NUM_ELEVATORS = 5;
var elevators = [];

for (var i=0; i<NUM_ELEVATORS; i++){
	elevators[i] = new Elevator(i);
}
console.log("TEST");
//Test
elevators[0].pressButton();
elevators[0].move(directionEnum.UP);
elevators[0].move(directionEnum.UP);
elevators[0].move(directionEnum.DOWN);