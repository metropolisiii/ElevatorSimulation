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
		this._currentDirection = directionEnum.UP; //The elevator starts on floor 1 and can therefore only go up.
		this._tripsMade = 0;
		this._floorsPassed = 0;
		this._isOperational = true;
	}
	
	//Move the elevator once in the direction specified
	move(){
		if (!this._isOperational)
			return;
		// A valid direction must be given and door must be closed
		if (!this._isOpen){
			var nextFloor = this._currentFloor + this._currentDirection;
			
			//The elevator cannot go beyond floor boundaries
			if (nextFloor <= MAX_FLOOR && nextFloor >= MIN_FLOOR){
				this._currentFloor += this._currentDirection;
				this._floorsPassed++; //Record the number of floors passed
			}
			//Report the floor
			console.log("Elevator "+this._label+" has moved to floor: "+this._currentFloor);
		
			//We have arrived at a floor
			if (this._currentFloor == this._requestedFloor){
				this._isOpen = true;
				this._tripsMade++; //The elevatator has made a trip
				if (this._tripsMade >= 100)
					this._isOperational = false;
				console.log("Elevator "+this._label+" has reached floor "+this._requestedFloor+" and is opening.");
			}	
		}
	}
	
	//Open or close the elevator
	pickFloor(floornum){
		if (!this._isOperational)
			return;
		//The door must be open to pick a number. We'll assume the numbers become disabled when the door has closed.
		//Also, the floor number must exist in the building and the elevator can't be on the same floor as the floor that is picked.
		if (this._isOpen && floornum <= MAX_FLOOR && floornum >= MIN_FLOOR && floornum != this._currentFloor) { 
			this._isOpen = false; 
			if (floornum > this._currentFloor)
				this._currentDirection = directionEnum.UP;
			else if (floornum < this._currentFloor)
				this._currentDirection = directionEnum.DOWN;
			this._requestedFloor = floornum;
			console.log("Elevator "+this._label+"'s door has closed and is going to floor: "+floornum);
			
		}
	}
}
 
//Gets the closest elevator to a person
function getClosestElevator(floor, elevators){
	var closestElevatorFloor = MAX_FLOOR; //The furthest an elevator and a person can be
	var closestElevator;
	for (var i=0; i<NUM_ELEVATORS; i++){
		if (elevators[i]._isOpen && elevators[i]._currentFloor == floor && elevators[i]._isOperational) //There is already an open elevator at the user's floor
			return i;
		if (elevators[i]._isOperational && (elevators[i]._isOpen && Math.abs(floor - elevators[i]._currentFloor) < closestElevatorFloor) || //Closest open elevator
			(elevators[i]._isOperational && !elevators[i]._isOpen && elevators[i]._currentDirection < floor && elevators[i]._currentDirection == directionEnum.UP) || //Or occupied elevator is below user and moving toward him 
			(elevators[i]._isOperational && !elevators[i]._isOpen && elevators[i]._currentDirection > floor && elevators[i]._currentDirection == directionEnum.DOWN)) { //Or occupied elevator is above user and moving toward him
			closestElevatorFloor = elevators[i]._currentFloor;
			closestElevator = i;
		}
	}	
	return closestElevator;
}

//Main
const NUM_ELEVATORS = 5;
var elevators = [];

for (var i=0; i<NUM_ELEVATORS; i++){
	elevators[i] = new Elevator(i);
}

//Test
elevators[0].pickFloor(3);
elevators[0].move();
elevators[0].move();
elevators[0].move();
console.log(getClosestElevator(2, elevators));

