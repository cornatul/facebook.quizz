(function() {
	var shr = document.createElement('script');
	shr.setAttribute('data-cfasync', 'false');
	shr.src = '//dsms0mj1bbhn4.cloudfront.net/assets/pub/shareaholic.js';
	shr.type = 'text/javascript'; shr.async = 'true';
	shr.onload = shr.onreadystatechange = function() {
		var rs = this.readyState;
		if (rs && rs != 'complete' && rs != 'loaded') return;
		var site_id = '69277f5fd90a2c7b052116ebd5bc9e3e';
		try { Shareaholic.init(site_id); } catch (e) {}
	};
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(shr, s);
})();

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
	var answers = document.querySelectorAll('li'),
		results = {
			1: {
				name: 'THE ACTIVE ADVENTURER',
				descriptionLeft: "<p>You're not interested in putting your feet up when you retire. For you, Life2 means remaining as active as possible for as long as possible &mdash; exploring the world and challenging yourself with new physical experiences. </p>\
					<p>The UK's new pension rules will give you the freedom to access your pension pot as your choose, and could give you the flexibility you need to seize opportunities for adventure while making sure you don't run out money too quickly. You could, for example, use an initial cash lump sum to pay for equipment or training, buy yourself a guaranteed income for life in order to cover your everyday expenses and potentially take further lump sums to travel on impulse.</p>\
					<p>You'll need to be careful though &mdash; the new flexibility on offer makes you responsible for making your income last. So consider speaking to a financial adviser. They can recommend which strategy best suits your circumstances, needs and goals.</p>",
				descriptionRight: '',
				image: 'images/active_adventurer.jpg'
			},
			2: {
				name: 'THE TIME-RICH VOLUNTEER',
				descriptionLeft: "<p>Now that you've got more time on your hands, it's time for you to give something back. Life2 for you is about supporting good causes &mdash; whether this means doing voluntary service overseas or simply helping out at the local charity shop. </p>\
					<p>To free up your time for volunteering, you need to think about how your various pension pots, savings and investments can be used to generate an income that will support you throughout retirement. Talking to a financial adviser will help. They'll be able to recommend which combination of products will give you the best chance of achieving your ideal Life2 &mdash; and in which order you should use them in order to avoid paying more tax than necessary. </p>\
					<p>For example, you may wish to withdraw money from an Individual Savings Account (ISA) to pay for everyday expenses before doing so from your pension, since withdrawals from the latter will be subject to income tax.</p>",
				descriptionRight: '',
				image: 'images/timerich_volunteer.jpg'
			},
			3: {
				name: 'THE LEGACY MAKER',
				descriptionLeft: "<p>Life2 for you is all about family. You've worked hard to give your children the best start in life and now you've got the time to see them more often. You also want to make sure that they, and your grandchildren, will be financially secure when you're gone. </p>\
					<p>The new pension rules make it easier to pass on your pension wealth to future generations, but you'll need to weigh up all your options. You could find, for example, that you are able to pass on more wealth by turning conventional wisdom on its head and releasing equity from your home before drawing from your pension. However, tax planning is highly complex and everyone's circumstances are different, so you'll need to consult a financial adviser to see what's possible.</p>",
				descriptionRight: '',
				image: 'images/legacy_maker.jpg'
			},
			4: {
				name: 'THE PORTFOLIO CAREERIST',
				descriptionLeft: "<p>Your Life2 is all about flexibility, freedom and making sure no two days are alike. </p>\
					<p>Reaching retirement age doesn't mean reaching a dead stop, as far as you're concerned. It means the freedom to carry on working on your own terms, picking and choosing which jobs and activities you wish to pursue, and seizing opportunities as they arise. </p>\
					<p>Flexibility is one of the major benefits of the new pension rules &mdash; you can now take cash out of your pension whenever you need it. Therefore, if you want to carry on working and leave your pension untouched, you can do. It's also possible to defer the date that you start taking the state pension, ensuring that you get a larger payout later on. Alternatively, you may wish to start drawing some of your pension initially, topping this up with income from your work. </p>\
					<p>The more complex your Life2 is going to be, the more it makes sense to consult a financial adviser about how to take advantage of all these new possibilities, without paying more tax than necessary.</p>",
				descriptionRight: '',
				image: 'images/portfolio_careerist.jpg'
			},
			5: {
				name: 'THE MATURE ENTREPRENEUR',
				descriptionLeft: "<p>Finally, you've got the freedom to explore that business idea &mdash; the one that you thought of ages ago but never had the time or resources to build. Life2 for you is a chance to become the entrepreneur you always wanted to be.  </p>\
					<p>Starting your own business could require a big capital outlay in the beginning, and under the new pension rules you'll be free to take large sums from your pot at retirement. However, it's important to bear all your circumstances in mind before making any irreversible decisions. Otherwise, you may end up paying more tax than necessary or putting yourself under unnecessary pressure to meet everyday expenses as you get older &mdash; regardless of how well the business performs. </p>\
					<p>You'll also need to consider how the income from your business will affect your tax position, if things go well. A financial adviser can help you plan ahead and manage the risks.</p>",
				descriptionRight: '',
				image: 'images/mature_entrepreneur.jpg'
			},
			6: {
				name: 'THE TRANQUILITY SEEKER',
				descriptionLeft: "<p>Peace, quiet and plenty of rest. You've worked hard all your life, and now comes the reward. Whether you're jetting off to an exotic yoga retreat or simply staying at home and turning off the phone, you've earned your Life2 of leisure.</p>\
					<p>Your priority is likely to be finding a stress-free way to secure a retirement income that you won't need to check on regularly. Depending on the state of your health, you may wish to take a more flexible approach to your retirement income, making it easier to make large one-off withdrawals and pass on your retirement savings. </p>\
					<p>If you do want the peace of mind of a guaranteed income, think about whether you'll need this to rise in line with inflation, and whether you'd like others to benefit from continued pay-outs after you die. A financial adviser can help you weigh up the options.</p>",
				descriptionRight: '',
				image: 'images/tranquility_seeker.jpg'
			},
			7: {
				name: 'THE PASSIONATE HOBBYIST',
				descriptionLeft: "<p>Life2 for you is about devoting as much time as possible to the things you really enjoy. Whether you intend to indulge your passion for painting or become a Master Scuba Diver, you've finally got the time to sharpen your skills and see how far you can really take your creativity.</p>\
					<p>You may wish to use your tax-free Pension Commencement Lump Sum (PCLS) to meet the up-front costs of equipment or training. Most people with a defined contribution pension can take a PCLS worth up to 25% of their pot. And under the new pension rules it's easier to access this sum in stages, leaving the rest of your pot invested. </p>\
					<p>If you're thinking of turning your hobby into a business, you'll need to consider how any income you generate will affect your overall financial position. A financial adviser can help you keep your income tax bill to a minimum.</p>",
				descriptionRight: '',
				image: 'images/passionate_hobbyist.jpg'
			},
			8: {
				name: 'THE DETERMINED FUNDRAISER',
				descriptionLeft: "<p>You're full of energy and unafraid to take on a challenge. You also want to give all you can to good causes. So Life2 for you means taking an active role in your favourite charities &mdash; whether that means running the London Marathon or running the fête that will fund a new village hall.</p>\
					<p>To raise as much money as possible for good causes, you'll need to make sure that your own finances are sorted throughout your retirement. You could use some or all of your pension pot to buy yourself a guaranteed income stream, in which case you'll need to decide whether the pay-outs should rise in line with inflation and/or continue to be paid to others after you die. You could also keep your pension pot invested, giving you the flexibility to take an income in retirement and make occasional larger withdrawals to pay for one-off expenses, from home extensions to once-in-a-lifetime holidays. </p>\
					<p>A financial adviser can help you to decide which route to take, manage the risks and prevent you from paying more tax than necessary.</p>",
				descriptionRight: '',
				image: 'images/determined_fundraiser.jpg'
			}
		};

	for(i = 0; i < answers.length; ++i) {
		answers[i].addEventListener('click', function() {
			var answers = document.querySelectorAll('li.selected');

			if(document.querySelectorAll('.question').length != answers.length) {
				var children = this.parentNode.children;

				for(j = 0; j < children.length; ++j)
					children[j].className = children[j].className.replace(new RegExp('(^|\\b)' + 'selected'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');

				this.className += ' selected';

				var answers = document.querySelectorAll('li.selected'),
					array = [];

				if(document.querySelectorAll('.question').length == answers.length) {
					for(i = 0; i < answers.length; ++i)
						array.push(answers[i].getAttribute('data-type'));
					
					var result = results[calculate(array)];
					document.querySelector('.you-got strong').innerHTML = result.name;
					document.querySelector('.outcome-description-left').innerHTML = result.descriptionLeft;
					document.querySelector('.outcome-image').src = result.image;

					document.querySelector('.result').className += ' active';
				}
			}
		});
	}
});