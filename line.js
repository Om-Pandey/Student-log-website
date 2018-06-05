$(document).ready(function() {

	//get canvas
	var ctx = $("#line-chartcanvas");

	var data = {
		labels : ["Maths", "English", "Science", "Hindi", "Computer"],
		datasets : [
			{
				label : "Student 3",
				data : [10, 50, 25, 70, 40],
				backgroundColor : "blue",
				borderColor : "lightblue",
				fill : false,
				lineTension : 0,
				pointRadius : 5
			},
			{
				label : "Student 2",
				data : [20, 15, 60, 30, 50],
				backgroundColor : "green",
				borderColor : "lightgreen",
				fill : false,
				lineTension : 0,
				pointRadius : 5
			},
            {
				label : "Student 1",
				data : [0, 40, 10, 50, 30],
				backgroundColor : "red",
				borderColor : "lightred",
				fill : false,
				lineTension : 0,
				pointRadius : 5
			}
		]
	};

	var options = {
		title : {
			display : true,
			position : "top",
			text : "Line Graph",
			fontSize : 18,
			fontColor : "#111"
		},
		legend : {
			display : true,
			position : "bottom"
		}
	};

	var chart = new Chart( ctx, {
		type : "line",
		data : data,
		options : options
	} );
    

});