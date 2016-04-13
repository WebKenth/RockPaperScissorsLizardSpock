Wins = 0;
Draws = 0;
Losses = 0;

// For testing purposes
one = 0;
two = 0;
three = 0;
four = 0;
five = 0;

$('#player').children().each(function(){
	var hand = $(this);
	hand.on('click',function(){
		$('.clicked').removeClass('clicked');
		hand.addClass('clicked');
		var com_hand = random_hand();
		var player_hand = $(this).data('id');
		var score_string = '';

		if(com_hand == 1){
			one += 1;
			$('#1').text(one);
		}
		if(com_hand == 2){
			two += 1;
			$('#2').text(two);
		}
		if(com_hand == 3){
			three += 1;
			$('#3').text(three);
		}
		if(com_hand == 4){
			four += 1;
			$('#4').text(four);
		}
		if(com_hand == 5){
			five += 1;
			$('#5').text(five);
		}



		switch(player_hand)
		{
			case 1:
				switch(com_hand){
					case 1:
						score_string = 'Draw'
					break;
					case 2:
						score_string = 'Lose'
					break;
					case 3:
						score_string = 'Win'
					break;
					case 4:
						score_string = 'Win'
					break;
					case 5:
						score_string = 'Lose'
					break;
				}
			break;
			case 2:
				switch(com_hand){
					case 1:
						score_string = 'Win'
					break;
					case 2:
						score_string = 'Draw'
					break;
					case 3:
						score_string = 'Lose'
					break;
					case 4:
						score_string = 'Lose'
					break;
					case 5:
						score_string = 'Win'
					break;
				}
			break;
			case 3:
				switch(com_hand){
					case 1:
						score_string = 'Lose'
					break;
					case 2:
						score_string = 'Win'
					break;
					case 3:
						score_string = 'Draw'
					break;
					case 4:
						score_string = 'Win'
					break;
					case 5:
						score_string = 'Lose'
					break;
				}
			break;
			case 4:
				switch(com_hand){
					case 1:
						score_string = 'Lose'
					break;
					case 2:
						score_string = 'Win'
					break;
					case 3:
						score_string = 'Lose'
					break;
					case 4:
						score_string = 'Draw'
					break;
					case 5:
						score_string = 'Win'
					break;
				}
			break;
			case 5:
				switch(com_hand){
					case 1:
						score_string = 'Win'
					break;
					case 2:
						score_string = 'Lose'
					break;
					case 3:
						score_string = 'Win'
					break;
					case 4:
						score_string = 'Lose'
					break;
					case 5:
						score_string = 'Draw'
					break;
				}
			break;
		}
		if(score_string.indexOf('Draw') >= 0)
		{
			Draws += 1;
		}
		if(score_string.indexOf('Lose') >= 0)
		{
			Losses += 1;
		}
		if(score_string.indexOf('Win') >= 0)
		{
			Wins += 1;
		}
		update_stats();
		$('.score').text(score_string);
	});
});

function random_hand(){
	var random_number = Math.floor((Math.random() * 5) + 1);
	$('#com').children().each(function(){
		if($(this).data('id') == random_number)
		{
			$(this).addClass('clicked');
		}
	})
	return random_number;
}

function update_stats()
{
	$('#Wins').text(Wins);
	$('#Draws').text(Draws);
	$('#Losses').text(Losses);
}

// Uncomment to show a few 100 test runs :D
// var c = 0;
// while(  c != 100  ){
// 	$('#player').children().each(function(){$(this).click()})
// 	c++;
// }