// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
	if(obj === null){
		return "null";
	}else
		switch(typeof obj){
			case "string":
				return "'" + obj +"'";
				break;

			case"boolean":
				return obj ? "true":"false";
				break;

			case "number":
				return obj.toString();
				break;

  			case "function":
  				break;

	  		case "object":
  				if(obj.isArray()){
  					var output = [];
  					for(var i=0; i<obj.length; i++){
  						output.push(stringifyJSON(obj[i]));
  					};
  					return "'" + output + "'";
  				} else {
  					var output = {};
  					for(var key in obj){
  						output[stringifyJSON(key)] = stringifyJSON(obj);
  					};
  					return "'" + output + "'";
  				};
  				break;

  			// default:
  			// 	return obj;
  			// 	break;
  	};
};
