(function () {
'use strict';

	angular.module('LunchCheck', [])
	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];
	function LunchCheckController($scope){
 		$scope.msg = "";
  		$scope.list="";
  		$scope.check = function () {
  			//array with the elements in the input
  			var list=$scope.list.trim().split(",");
  			var numLunchs=countLunch(list);
  			
  			if (numLunchs==0) {
  				$scope.msg="Please enter data first";
  				document.getElementById("test").setAttribute("style","color:red");
  				document.getElementById("lunch-menu").setAttribute("style","border-color:red");
  			}
  			else {
  				if (numLunchs<=3)$scope.msg="Enjoy!"
  				else $scope.msg="Too much!";
  				document.getElementById("test").setAttribute("style","color:green");
  				document.getElementById("lunch-menu").setAttribute("style","border-color:green");

  				
    		}
  		};
  		// reset value of styles
  		$scope.reset=function(){
  			//document.getElementById("test");.setAttribute("style","color:default");
  			document.getElementById("lunch-menu").setAttribute("style","border-color:default");
  			$scope.msg="";
  			return;
  		}
	}
	//function to count the elements on the array that have caracters
	function countLunch(list){
		var elements=0;
		for (var i=0; i<list.length;i++){
			//only considerate not empty elements
			if (list[i].trim().length>0) elements++; 
		}
		return elements;

	}

})();


