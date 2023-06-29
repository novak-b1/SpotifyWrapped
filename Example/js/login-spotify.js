function writeEmail() {
	var userEmail = document.getElementbyId("Email").value;
	var userPW = document.getElementbyId("Password").value;

	Document.write('<h3>' + userEmail + '</h3>');
}