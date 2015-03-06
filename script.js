// (function() {
// 	var shr = document.createElement('script');
// 	shr.setAttribute('data-cfasync', 'false');
// 	shr.src = '//dsms0mj1bbhn4.cloudfront.net/assets/pub/shareaholic.js';
// 	shr.type = 'text/javascript'; shr.async = 'true';
// 	shr.onload = shr.onreadystatechange = function() {
// 		var rs = this.readyState;
// 		if (rs && rs != 'complete' && rs != 'loaded') return;
// 		var site_id = '69277f5fd90a2c7b052116ebd5bc9e3e';
// 		try { Shareaholic.init(site_id); } catch (e) {}
// 	};
// 	var s = document.getElementsByTagName('script')[0];
// 	s.parentNode.insertBefore(shr, s);
// })();

function calculate(array) {
	if(array.length == 0)
		return null;

	var modeMap = {},
		maxEl = array[0],
		maxCount = 1;

	for(var i = 0; i < array.length; i++) {
		var el = array[i];

		if(modeMap[el] == null)
			modeMap[el] = 1;
		else
			modeMap[el]++;	

		if(modeMap[el] > maxCount) {
			maxEl = el;
			maxCount = modeMap[el];
		}
	}

	return maxEl;
}

function equalheight(container) {
	var currentTallest = 0,
		currentRowStart = 0,
		rowDivs = new Array(),
		$el,
		topPosition = 0;

	$(container).each(function() {
		$el = $(this);
		$el.height('auto');

		topPostion = $el.position().top;

		if(currentRowStart != topPostion) {
			for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++)
				rowDivs[currentDiv].height(currentTallest);

			rowDivs.length = 0; // empty the array
			currentRowStart = topPostion;
			currentTallest = $el.height();
			rowDivs.push($el);
		} else {
			rowDivs.push($el);
			currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
		}

		for(currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++)
		rowDivs[currentDiv].height(currentTallest);
	});
}

$(window).load(function() {
	equalheight('.height-fix');
});


$(window).resize(function(){
	equalheight('.height-fix');
});

$(function() {
	$('.play-again').click(function() {
		window.location.href = window.location.href;
	});

	if(window.location.search != '?ref')
		$('.referrer').attr('style', 'display: none;');

	var answers = document.querySelectorAll('li'),
		results = {
			1: {
				name: 'THE ACTIVE ADVENTURER',
				descriptionLeft: "<p>Swimming with sharks? Tick. Abseiling from the Empire State Building? Tick. Slowing down and putting your feet up in retirement? Never! You'd much rather explore the world and challenge yourself throughout your Life2.</p>\
				<p>The new pension rules will give you complete control over you retirement savings, so you could vary your income throughout your retirement &ndash; withdrawing a lot in some years to seek out exotic adventures abroad, and less in others to minimise your income tax bill.</p>\
				<p>However, you'll need to be careful &ndash; the new flexibility on offer makes you responsible for making your income last. So consider speaking to a financial adviser. They can recommend which strategy best suits your circumstances, needs and goals, while making sure you don't pay more tax than necessary.</p>",
				descriptionRight: '',
				image: 'images/outcomes/active_adventurer.jpg',
				shareTitle: 'When I retire, I could be The Active Adventurer. Which Life2 could you lead?',
				shareSummary: "Swimming with sharks? Tick. Abseiling from the Empire State Building? Tick. Slowing down and putting your feet up in retirement? Never! You'd much rather explore the world and challenge yourself throughout your Life2."
			},
			2: {
				name: 'THE TIME-RICH VOLUNTEER',
				descriptionLeft: "<p>Good causes need good people to volunteer their time. Now your 9-to-5 is over, you've got the chance to muck in and make a difference. So why not use your Life2 to change the lives of others for the better?</p>\
				<p>Whether you're doing voluntary service overseas or simply helping out at the local charity shop, you'll need to think about how your various pension pots, savings and investments can be used to generate an income that lasts. The average Briton now spend more than 30 years in retirement, so if you're thinking of taking advantage of the new pension freedoms, you'll need to avoid spending too much of your pot too soon.</p>\
				<p>Talking to a financial adviser will help. They'll be able to recommend which combination of products you should use &ndash; and the order in which you should use them &ndash; to cover your expenses and make sure you don't pay more tax than necessary.</p>",
				descriptionRight: '',
				image: 'images/outcomes/timerich_volunteer.jpg',
				shareTitle: 'When I retire, I could be The Time-Rich Volunteer. Which Life2 could you lead?',
				shareSummary: "Good causes need good people to volunteer their time. Now your 9-to-5 is over, you've got the chance to muck in and make a difference. So why not use your Life2 to change the lives of others for the better?"
			},
			3: {
				name: 'THE LEGACY MAKER',
				descriptionLeft: "<p>Family comes first. You've survived the teething, tantrums and teens. Now you've got the chance to help your children through the minefields of adult life. Retirement will give you the freedom to spend much more time with those you love, and it could allow you to pass on more wealth than you thought possible. </p>\
				<p>The new pension rules will make it much easier to pass on your pension wealth to children, grandchildren and others. However, you'll need to make sure your own expenses are covered throughout retirement &ndash; which could last 30 years or more &ndash; before you commit any wealth to the next generation.</p>\
				<p>Also, tax-planning is highly complex and everyone's circumstances are different, so you'll need to consult a financial adviser to see what's possible.</p>",
				descriptionRight: '',
				image: 'images/outcomes/legacy_maker.jpg',
				shareTitle: 'When I retire, I could be The Legacy Maker. Which Life2 could you lead?',
				shareSummary: "Family comes first. You've survived the teething, tantrums and teens. Now you've got the chance to help your children through the minefields of adult life. Retirement will give you the freedom to spend much more time with those you love, and it could allow you to pass on more wealth than you thought possible. "
			},
			4: {
				name: 'THE PORTFOLIO CAREERIST',
				descriptionLeft: "<p>Complete freedom is the goal of the Portfolio Careerist. You may not be ready to stop work, but you want to pick and choose which jobs to do. And you want to give more time to golf, good causes or any other great opportunity that comes your way.</p>\
				<p>Flexibility is one of the major benefits of the new pension rules &ndash; you can now take cash out of your pension whenever you need it. So if you want to carry on working, you can control your income much more easily, to meet big expenses or make sure you don't move unexpectedly into a higher tax-band.</p>\
				<p>But remember: the more complex your Life2, the more it makes sense to consult a financial adviser about how to take advantage of the new rules without paying more tax than necessary.</p>",
				descriptionRight: '',
				image: 'images/outcomes/portfolio_careerist.jpg',
				shareTitle: 'When I retire, I could be The Portfolio Careerist. Which Life2 could you lead?',
				shareSummary: "Complete freedom is the goal of the Portfolio Careerist. You may not be ready to stop work, but you want to pick and choose which jobs to do. And you want to give more time to golf, good causes or any other great opportunity that comes your way."
			},
			5: {
				name: 'THE MATURE ENTREPRENEUR',
				descriptionLeft: "<p>You could have been the next Richard Branson or Anita Roddick, with better luck. So why not use Life2 to explore your entrepreneurial impulses? You've got the time. You've got the resources. And you're in good company: retirees are starting businesses faster than any other age group in the UK. </p>\
				<p>Under the new pension rules, you'll have the freedom to take as much as you want from your pension pot. So you could use a large lump sum to start your own business. However, it's important to bear all your circumstances in mind before making any irreversible decisions. Otherwise, you may put yourself under pressure to meet everyday expenses as you get older. </p>\
				<p>You'll also need to consider how the income from your business will affect your tax position, if things go well. A financial adviser can help you plan ahead and manage the risks.</p>",
				descriptionRight: '',
				image: 'images/outcomes/mature_entrepreneur.jpg',
				shareTitle: 'When I retire, I could be The Mature Entrpreneur. Which Life2 could you lead?',
				shareSummary: "You could have been the next Richard Branson or Anita Roddick, with better luck. So why not use Life2 to explore your entrepreneurial impulses? You've got the time. You've got the resources. And you're in good company: retirees are starting businesses faster than any other age group in the UK. "
			},
			6: {
				name: 'THE TRANQUILITY SEEKER',
				descriptionLeft: "<p>No more phonecalls. No more e-mail. And certainly no more stress. You've earned a Life2 of leisure, so put your feet up and relax. Or jet off to a desert island to reconnect with your inner self. Your choice.</p>\
				<p>If tranquility is your priority than you'll probably want to finance your retirement in the most stress-free way possible. That could mean securing a guaranteed income for life or it could mean taking advantage of the new pension rules to leave your options completely open, dipping into your pension savings as and when you need them. </p>\
				<p>The choices are many and various so, to give yourself complete peace of mind, you may want to consult a financial adviser.</p>",
				descriptionRight: '',
				image: 'images/outcomes/tranquility_seeker.jpg',
				shareTitle: 'When I retire, I could be The Tranquility Seeker. Which Life2 could you lead?',
				shareSummary: "No more phonecalls. No more e-mail. And certainly no more stress. You've earned a Life2 of leisure, so put your feet up and relax. Or jet off to a desert island to reconnect with your inner self. Your choice."
			},
			7: {
				name: 'THE PASSIONATE HOBBYIST',
				descriptionLeft: "<p>Write that novel. Record that album. Buy a Harley Davidson and scare the hell out of your whole village. Whatever your passion, you've now got the time and resources to make the most of it.</p>\
				<p>If you're thinking of devoting your Life2 to hobbies and interests, you may want to take cash lump sums out of your pension at various times, to buy new kit, go on training courses or take your newfound skills on tour. Under the new pension rules, you'll have complete control over your retirement savings. </p>\
				<p>Just remember that your pot needs to cover your everyday expenses throughout your retirement, which could last 30 years or more. You may want to consult a financial adviser, who can recommend the right strategy for you while making sure you don't pay any more tax than necessary.</p>",
				descriptionRight: '',
				image: 'images/outcomes/passionate_hobbyist.jpg',
				shareTitle: 'When I retire, I could be The Passionate Hobbyist. Which Life2 could you lead?',
				shareSummary: "Write that novel. Record that album. Buy a Harley Davidson and scare the hell out of your whole village. Whatever your passion, you've now got the time and resources to make the most of it."
			},
			8: {
				name: 'THE DETERMINED FUNDRAISER',
				descriptionLeft: "<p>Running, climbing, sailing, skiing. The bigger the challenge, the better &ndash; especially when there's a good cause involved. You've always been energetic, and now you've got a lot more time on your hands. So why not spend your Life2 laughing in the face of old age, and raising money for the causes you care about?</p>\
				<p>To help others, you need to make sure your finances are sorted first, and in retirement that means taking the next 30 years in account. The new pension rules will let you take as much as you want from your retirement savings, while leaving the rest invested, but you may want to leave a contingency fund in place in case your good health doesn't last.</p>\
				<p>For complete peace of mind, talk to a financial adviser, who can steer you around the pitfalls and recommend a plan that suits your circumstances, needs and goals &ndash; all while making sure you don't pay more tax than necessary.</p>",
				descriptionRight: '',
				image: 'images/outcomes/determined_fundraiser.jpg',
				shareTitle: 'When I retire, I could be The Determined Fundraiser. Which Life2 could you lead?',
				shareSummary: "Running, climbing, sailing, skiing. The bigger the challenge, the better &ndash; especially when there's a good cause involved. You've always been energetic, and now you've got a lot more time on your hands. So why not spend your Life2 laughing in the face of old age, and raising money for the causes you care about?"
			}
		};

	for(i = 0; i < answers.length; ++i) {
		answers[i].addEventListener('click', function() {
			var that = this,
				answers = document.querySelectorAll('li.selected');

			if(document.querySelectorAll('.question').length != answers.length) {
				var children = this.parentNode.children;

				for(j = 0; j < children.length; ++j)
					children[j].className = children[j].className.replace(new RegExp('(^|\\b)' + 'selected'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');

				this.className += ' selected';

				var answers = document.querySelectorAll('li.selected'),
					array = [];

				// if(document.querySelectorAll('.question').length == answers.length) { // This is breaking
				if($('.question').length == $('li.selected').length) {
					for(i = 0; i < answers.length; ++i)
						array.push(answers[i].getAttribute('data-type'));
					
					var result = results[calculate(array)];
					document.querySelector('.you-got strong').innerHTML = result.name;
					document.querySelector('.outcome-description-left').innerHTML = result.descriptionLeft;
					document.querySelector('.outcome-image').src = result.image;

					document.querySelector('.result').className += ' active';

					$('.result .share-canvas')
						.attr('data-title', result.shareTitle)
						.attr('data-image', 'http://life2quiz.com/' + result.image)
						.attr('data-description', result.shareSummary)
						.addClass('addthis_sharing_toolbox');

					addthis.layers.refresh();
				}
			}

			setTimeout(function() {
				var question = that.parentNode.parentNode;

				question.className = question.className.replace(new RegExp('(^|\\b)' + 'active'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
				question.nextElementSibling.className += ' active';

				$(window).scrollTop($('.question').position().top);
			}, 100);
		});
	}
});