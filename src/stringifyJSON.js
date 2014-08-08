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
	  							var ele = obj[i];
	  							if( typeof ele != "function" && typeof ele != 'undefined'){
  								output.push(check(ele));
  								};
  							};
  						};
  						return '[' + output + ']';
  					} else {
  						if(obj === null){
  							return null;
  						};
  						var output = [];
  						for(var key in obj){
  							var prop = obj[key];
  							if( typeof prop != "function" && typeof prop != 'undefined'){
  								output.push( check(key) + ':'+ check(prop));
  							};
  						};
  						return output.length === 0 ? '{}': '{' + output.join(',') + '}';
  					};
  					break;


  				//case number, boolean
  				default:
  					return obj;
  					break;
  			};
  		};
  		return check(obj);
  	};
};

