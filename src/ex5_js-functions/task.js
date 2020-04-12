let Calculator = {
    result : 0,
  
    add: function(num){
		let copyNum = num;
        

		if(typeof(copyNum) !== "number"){
			copyNum = 0;
		}
		Calculator.result += copyNum;
		
		return Calculator.add;
	},
	
	subtract: function(num){
		let copyNum = num;

		if(typeof(copyNum) !== "number"){
			copyNum = 0;
		}
	
		Calculator.result -= copyNum;
	
		return Calculator.subtract;
		
	},
	
	divide: function(num) {
		let copyNum = num;

		if(typeof(copyNum) !== "number"){
			copyNum = 1;
		}
	
		if(copyNum !== 0){
			Calculator.result /= copyNum;
		} else {
			console.log("Error.");
		}
	
		return Calculator.divide;
	
	},
	
	multiply: function(num){
		let copyNum = num;

		if(typeof(copyNum) !== "number"){
			copyNum = 0;
		}
	
		if(Calculator.result === 0){
			Calculator.result = 1;
		}
	
		Calculator.result *= copyNum;
	
		return Calculator.multiply;
	},
	
	getResult: function(){
		return Calculator.result;
	},
	
	reset: function(){
		Calculator.result = 0;
		return Calculator.result;
	}
}

module.exports = Calculator;