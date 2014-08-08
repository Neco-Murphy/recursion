// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
	var output = [];
	var body_ = document.body;

	// check body itself first
	if(body_.classList === [className]){
		output.push(body);
	};

	//check direct children of body
	var directs = body_.childNodes;
	for(var i=1; i<directs.length; i+2){
		var list = directs[i].classList;
		for(var j=0; j<list.length; j++){
			if(list[j] === className){
				output.push(directs[i]);
			};
		};
	};

	//check smaller than grandchildren
	// var classCheck = function(inside){
	// 	for(var i=0; i<inside.childNodes.length; i++){
	// 		if(body.classList[i] === className){
	// 			return output.push(body);
	// 		};
	// 	};
	// 	return output;
	// };

	// body.classCheck(body);

};
