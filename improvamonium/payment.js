function update_num_shirts() {

	var sum = 0;
	sum += Number($("#s_shirts").val());
	sum += Number($("#m_shirts").val());
	sum += Number($("#l_shirts").val());
	sum += Number($("#xl_shirts").val());

	$("#total_shirts").text(sum);
	update_total_price();
}

function update_total_price() {

	$("#total_price").text("$" + Number($("#total_shirts").text()) * 10);
}

function kickoff_payment() {
    
    // Disable the button so people don't duplicate payments
    $("#pay_btn").attr("onclick", "");
    disable_scroll();
    $("#ajax_modal").modal();
    
	var input_data = {
		card_num: $("#cc_num").val(),
		card_exp_year: $("#cc_exp_year").val(),
		card_exp_month: $("#cc_exp_month").val(),
		card_cvv: $("#cc_cvv").val(),
		card_first: $("#f_name").val(),
		card_last: $("#l_name").val(),
        card_type: $("#cc_type").val().toLowerCase(),
		addr_street: $("#bill_addr").val(),
		addr_city: $("#bill_city").val(),
		addr_state: $("#bill_state").val(),
		addr_zip: $("#bill_zip").val(),
		num_shirts: get_num_shirts(),
		email: $("#email").val()
	}

	$.ajax({
		type: "POST",
		url: "./kickoffPayment.php",
		data: input_data
	}).success(function(data) {

		// Payment status returned
		if(data.indexOf("approved") < 0)
			window.location = window.location + "?success=error";
		else
			window.location = window.location + "?success=success";

	}).error(function(data) {

		// TODO: Change
		alert(data);
	});
}

function validate_fields() {

	if($("#f_name").val() != "" && $("#l_name").val() != "" && $("#cc_num").val() != "" &&
		$("#cc_exp_year").val() != "" && $("#cc_exp_month").val() != "" && $("#cc_cvv").val() != "" &&
		get_num_shirts() != 0) {

		return true;
	}
	else {
		return false;
	}
}

function get_num_shirts() {

	var sum = 0;
	sum += Number($("#s_shirts").val());
	sum += Number($("#m_shirts").val());
	sum += Number($("#l_shirts").val());
	sum += Number($("#xl_shirts").val());

	return sum;
}

/** Code taken from http://stackoverflow.com/questions/4770025/how-to-disable-scrolling-temporarily **/

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = [37, 38, 39, 40];

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}

function keydown(e) {
    for (var i = keys.length; i--;) {
        if (e.keyCode === keys[i]) {
            preventDefault(e);
            return;
        }
    }
}

function wheel(e) {
  preventDefault(e);
}

function disable_scroll() {
  if (window.addEventListener) {
      window.addEventListener('DOMMouseScroll', wheel, false);
  }
  window.onmousewheel = document.onmousewheel = wheel;
  document.onkeydown = keydown;
}

function enable_scroll() {
    if (window.removeEventListener) {
        window.removeEventListener('DOMMouseScroll', wheel, false);
    }
    window.onmousewheel = document.onmousewheel = document.onkeydown = null;  
}