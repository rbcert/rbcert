jQuery('document').ready(function() {
	var name = "empty";
	var surname = "empty";
	var lastname = "empty";
	var course = "empty";
	var serial = "empty";

	jQuery('button').on('click', function() {
		name = jQuery('#name').val();
		surname = jQuery('#surname').val();
		lastname = jQuery('#lastname').val();
		course = jQuery('#course').val();
		serial = makeid();

		localStorage.setItem("Name", name);
  		localStorage.setItem("Surname", surname);
  		localStorage.setItem("Lastname", lastname);
  		localStorage.setItem("Course", course);
  		localStorage.setItem("Serial", serial);
	});
})

function makeid()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 12; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}