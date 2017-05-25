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
		// A valid direction must be given and door must be closed
		if (typeof direction == 'number' && !this._isOpen){
			var nextFloor = this._currentFloor + direction;
			
			//The elevator cannot go beyond floor boundaries
			if (nextFloor <= MAX_FLOOR && nextFloor >= MIN_FLOOR && nextFloor <= this._requestedFloor && nextFloor >= this._requestedFloor)
				this._currentFloor += direction;
			
			//Report the floor
			console.log("Elevator "+this._label+" has moved to floor: "+this._currentFloor);
		
			//We have arrived at a floor
			if (this._currentFloor == this._requestedFloor){
				this._isOpen = true;
				console.log("Elevator "+this._label+" has reached floor "+this._requestedFloor+" and is opening.");
			}	
		}
	}
	
	//Open or close the elevator
	pickFloor(floornum){
		//The door must be open to pick a number. We'll assume the numbers become disabled when the door has closed.
		//Also, the floor number must exist in the building
		if (this._isOpen && floornum <= MAX_FLOOR && floornum >= MIN_FLOOR) { 
			this._isOpen = false; 
			console.log("Elevator "+this._label+"'s door has closed.");
			
		}
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
elevators[0].pickFloor();
elevators[0].move(directionEnum.UP);
elevators[0].move(directionEnum.UP);
elevators[0].move(directionEnum.DOWN);