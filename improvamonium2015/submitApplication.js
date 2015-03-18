$(function(){
	$('#main_form').submit(function(event){

		event.preventDefault();
		submitApplication();
	});
});

function submitApplication(){

	// Hide all the validators

	$("#datesAvailableValidation").hide();

	// Check for validation

	var name = $("#group_name").val();
	if (name == "" || name == null) { validate($("#group_name")); return; }

	var bio = $("#bio").val();
	if (bio == "" || bio == null) { validate($("#bio")); return; }

	var num_members = $("#num_members").val();
	if (num_members == "" || num_members == null) { validate($("#num_members")); return; }

	var contact = $("#contact").val();
	if (contact == "" || contact == null) { validate($("#contact")); return; }

	var email = $("#email").val();
	if (email == "" || email == null) { validate($("#email")); return; }

	var groupType = "college";
	$("#groupType input").each(function(){
		if($(this).attr("checked") == "checked" || $(this).attr("checked") == ""){
			groupType = $(this).val();
		}
	});

	var days = [];
	$("#dates_available input").each(function(){
		if(this.checked == true){
			days.push($(this).val());
		}
	});
	if (days.length == 0) { validate($("#datesAvailable")); return; }

	var logo = $("#logo").val();
	if (logo == "" || logo == null) { validate($("#logo")); return; }

	var video_link = $("#video_link").val();

	// If they made it here, they passed all the tests

	$.ajax({
		type: "POST",
		url: "./submitApplication.php",
		data: {
			name: name,
			bio: bio,
			num_members: num_members,
			contact: contact,
			email: email,
			groupType: groupType,
			days: days,
			logo: logo,
			video_link: video_link
		},
	}).success(function(data) {

		if (data == 1) {

			$("#main_form").slideUp();
			$("#greet_text").hide();
			$("#success_text").fadeIn();
			$('html, body').stop().animate({scrollTop: $("#success_text").offset().top-100}, 1500);
		}
		else if (data == 0) {

			$("#main_form").slideUp();
			$("#greet_text").hide();
			$("#failure_text").fadeIn();
			$('html, body').stop().animate({scrollTop: $("#failure_text").offset().top-100}, 1500);
		}
		else if (data == 'validate') {

		}
		else {

			$("#main_form").slideUp();
			$("#greet_text").hide();
			$("#failure_text").fadeIn();
			$('html, body').stop().animate({scrollTop: $("#failure_text").offset().top-100}, 1500);
		}

	}).error(function(data) {

		$("#main_form").slideUp();
		$("#greet_text").hide();
		$("#failure_text").fadeIn();
		$('html, body').stop().animate({scrollTop: $("#failure_text").offset().top-100}, 1500);
	});
}

/**
* validate
*
* obj - jQuery object representing form that fired validation check
*/
function validate(obj){

	// Perhaps only check checkboxes now, and just use HTML5 validation
	// for the rest

	if(obj == $("#datesAvailable")){

		$("#datesAvailableValidation").show();
	}
}