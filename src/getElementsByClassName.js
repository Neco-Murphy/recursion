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

	//a function to check the array of nodes if it has the targeted class
	var checkClass = function(arr){
		var list = arr.classList;
		for(var z=0; z<list.length; z++){
			if(list[z] === className){
				output.push(arr[i]);
			};
	};

	//check direct children of body
	var directs = body_.childNodes;
	for(var i=1; i<directs.length; i+2){
		checkClass(directs);
		};
	};

	//check smaller than grandchildren
	var check = function(stage){
		if(stage.length != 0){
			for(var a=0; a<stage.length; a++){
				var nodelist = stage[a].childNodes;
				for(var k=0; k<nodelist.length; k++){
					checkClass(nodelist);
				};
			};	
		};
	};

	check(directs);
	return output;
	

};
