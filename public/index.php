<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Rock Paper Scissors Lizard Spock</title>
    <link href="/asset/bootstrap-3.3.6-dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="/asset/font-awesome-4.5.0/css/font-awesome.min.css" rel="stylesheet">
    <link href="/asset/custom/style.css" rel="stylesheet">

</head>
<body id="app-layout">
    <div class="container-fluid">
	    <div class="row">
	    	<div class="col-md-12">
	    		<p class="rpsls-title">Rock Paper Scissors Lizard Spock</p>
	    	</div>
    	</div>
	    <div class="row">
	    	<div class="col-md-12">
		    	<div class="rpsls-container" id="com">
			    	<i data-id="1" class="fa fa-hand-rock-o"></i>
			    	<i data-id="2" class="fa fa-hand-paper-o"></i>
			    	<i data-id="3" class="fa fa-hand-scissors-o"></i>
			    	<i data-id="4" class="fa fa-hand-lizard-o"></i>
			    	<i data-id="5" class="fa fa-hand-spock-o"></i>
		    	</div>
	    	</div>
	    </div>
	    <div class="row">
	    	<div class="col-md-12">
	    		<div class="score">Pick a Hand</div>
	    	</div>
	    </div>
	    <div class="row">
	    	<div class="col-md-12">
		    	<div class="rpsls-container" id="player">
			    	<i data-id="1" class="fa player-pick player-pick-first fa-hand-rock-o"></i>
			    	<i data-id="2" class="fa player-pick fa-hand-paper-o"></i>
			    	<i data-id="3" class="fa player-pick fa-hand-scissors-o"></i>
			    	<i data-id="4" class="fa player-pick fa-hand-lizard-o"></i>
			    	<i data-id="5" class="fa player-pick player-pick-last fa-hand-spock-o"></i>
		    	</div>
	    	</div>
	    </div>
	    <div class="row">
    	<div class="col-md-12">
    		<div class="stats">
    			Wins: <span id="Wins">0</span><br>
    			Draws: <span id="Draws">0</span><br>
    			Losses: <span id="Losses">0</span><br>
    			<span class="box">
    				1 : <span id="1">0</span>
    			</span>
    			<span class="box">
    				2 : <span id="2">0</span>
    			</span>
    			<span class="box">
    				3 : <span id="3">0</span>
    			</span>
    			<span class="box">
    				4 : <span id="4">0</span>
    			</span>
    			<span class="box">
    				5 : <span id="5">0</span>
    			</span>
    		</div>
    	</div>
    </div>
    </div>

    <!-- JavaScripts -->
    <script src="/asset/jquery-1.12.3/jquery-1.12.3.min.js"></script>
    <script src="/asset/bootstrap-3.3.6-dist/js/bootstrap.min.js"></script>
    <script src="/asset/custom/main.js"></script>
</body>
</html>
