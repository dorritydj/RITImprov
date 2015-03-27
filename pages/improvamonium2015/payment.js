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

	var input_data = {
		card_num: $("#cc_num").val(),
		card_exp_year: $("#cc_exp_year").val(),
		card_exp_month: $("#cc_exp_month").val(),
		card_cvv: $("#cc_cvv").val(),
		card_first: $("#f_name").val(),
		card_last: $("#l_name").val(),
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