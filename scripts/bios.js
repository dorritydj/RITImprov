window.onload = function(){	

	$("#lb").click(changeTeam);
	$("#rb").click(changeTeam);
	$("#lb").fadeOut();
	$(".contentContainer > div").hide();
	$("#bw_body").fadeIn();
	$("div[id*='_bios'] div[id*='bio']").hide();
}

function changeTeam(sender){

	var curTeam = $(".teamChooser h1.current");
	var curTeamText = $(".teamChooser h1.current").text();
	var teams = ['BrainWreck Improv', 'The Improvessionals', 'Work.In.Progress', 'Alumni'];
	var colors = ['#4388BE', '#6EBC42', '#DA2373', '#F37E1F'];
	var index = teams.indexOf(curTeamText);

	if(sender.srcElement.id === 'lb'){
		var newIndex = index - 1;

		if(index-1 == 0){
			$("#lb").fadeOut();
		}
		else if(index == (teams.length - 1)){
			$("#rb").fadeIn();
		}
	}
	else{
		var newIndex = index + 1;
		
		if(index+1 == (teams.length - 1)){
			$("#rb").fadeOut();
		}
		else if(index == 0){
			$("#lb").fadeIn();
		}
	}

	var nextTeamText = teams[newIndex];		
	var nextTeam = $(".teamChooser h1:contains('" + nextTeamText + "')");
	curTeam.fadeOut();
	curTeam.removeClass("current");
	nextTeam.fadeIn();
	nextTeam.addClass("current");
	nextTeam.css("display", "inline-block");
	$(".teamChooser").css("background-color", colors[newIndex]);
	$("#" + curTeam[0].id + "_body").fadeOut();
	$("#" + nextTeam[0].id + "_body").fadeIn();
}

function changeBio(sender){

	$.each($(sender).parent().children(), function(){
		$(this).removeClass("active");
		$(this).attr("onclick", "changeBio(this);");
	});
	$(sender).addClass("active");
	$(sender).attr("onclick", "");
	var under_index = $(sender).parent()[0].id.indexOf("_");
	var team = $(sender).parent()[0].id.substring(0, under_index);
	$("#" + team + "_bios > div").fadeOut();
	var name = sender.id.substring(0, sender.id.length - 5);
	$("#" + name + "_bio").fadeIn();
}