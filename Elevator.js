const MAX_FLOOR = 100;
const MIN_FLOOR = 1;
const directionEnum = {
	UP: 1,
	DOWN: -1
}

//Elevator class	
var Elevator = class{
	//Constructor
	constructor(num){
		this._floor = MIN_FLOOR; //All elevators will start on the 1st floor
		this._num = num; //Labels the elevator
		this._isOpen = true; //When the door is closed, the elevator is moving
	}
	
	//Move the elevator once in the direction specified
	move(direction){
		// A valid direction must be given
		if (typeof direction != 'number')
			return;
		this._floor += direction;
		
		//Report the floor
		console.log("Elevator "+num+" has moved to floor: "+this.floor);
	}
	
	//Open or close the elevator
	openclose(action){
		switch(action){
			case 'open':
				this._isOpen = true;
				break;
			case 'close':
				this._isOpen = false;
				break;
		}
	}
}

//Main
const NUM_ELEVATORS = 5;
var elevators = [];

for (var i=0; i<NUM_ELEVATORS; i++){
	elevators[i] = new Elevator(i);
}