jQuery('document').ready(function() {
	var readName, readSurname, readLastname, readCourse, readSerial;

	readName = localStorage.getItem("Name");
	readSurname = localStorage.getItem("Surname");
	readLastname = localStorage.getItem("Lastname");
	readCourse = localStorage.getItem("Course");
	readSerial = localStorage.getItem("Serial");


	jQuery('p').append("<h2>"+readSurname+" "+readName+" "+readLastname+"</h2>");
	jQuery('p').append("<h1><i>"+readCourse+"</i></h1>");
	jQuery('p').append("<h3><i>"+readSerial+"</i></h3>");
})