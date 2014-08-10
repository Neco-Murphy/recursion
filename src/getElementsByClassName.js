// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
	var output=[];
	var main = document.body;
	
	// check body itself first
	if(main.classList.contains(className)){
		output.push(main);
	};

	//a function to check the element if it has the targeted class
	var checkClass = function(ele){
		var list = ele.classList;
		if(list && list.contains(className)){
				output.push(ele);
		}
	};

	// //check children
	var check = function(stage){
		var directs = stage.childNodes;
		if(directs.length != 0){
			for(var i=0; i < directs.length; i++){
				checkClass(directs[i]);
				check(directs[i]);
			};

		};
	}

	check(main);
	return output;
	
};
