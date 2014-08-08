// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
	if(obj === null){
  		return "null";
	}else if(typeof obj === "number"){
		return obj.toString();
	}else if(typeof obj === "boolean"){
		return obj ? "true":"false";
	}else{
		var check = function (obj){
			switch(typeof obj){
  				case "string":
  					return '"' + obj +'"';
  					break;

	  			case "object":
  					if(Array.isArray(obj)){
  						var output = [];
  						if(obj.length != 0){
	  						for(var i=0; i<obj.length; i++){
  								output.push(check(obj[i]));
  							};
  						};
  						return '[' + output + ']';
  					} else {
  						var output = {};
  						for(var key in obj){
  							alert();
  							output[check(key)] = check(obj);
  						};
  						return '{' + output + '}';
  					};
  					break;

  				//case number, string, boolean
  				default:
  					return obj;
  					break;
  			};
  		};
  		return check(obj);
  	};
};

