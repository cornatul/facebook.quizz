///changed the fb id added my developer tools
window.fbAsyncInit = function() {
    FB.init({

        appId      : '627126750752913',
        status     : true,
        xfbml      : true,
        ////ive changed from version 2.2 to ver 2.0
        version    : 'v2.2'
    });
};

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

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

// RESULTS
$(function() {


    setTimeout(function() {
        $('.top-share .at-svc-facebook').click(function() {
            window.open(
                'https://www.facebook.com/dialog/feed?redirect_uri=' + escape('http://life2quiz.com') + '&display=popup&app_id=627126750752913&link=' + escape('http://life2quiz.com') + '&picture=' + escape('http://life2quiz.com/images/outcomes/active_adventurer.jpg') + '&name=' + escape('Which Life2 could you lead?') + '&description=' + escape("XXXRetirement has changed forever. It's no longer the closing of a book but the start of a new chapter - or 'Life2', as we like to call it. With the UK's new pension freedoms, the possibilities are endless. So which Life2 could you lead? Take our quiz to find out."),
                '_blank',
                'height=600,menubar=yes,status=yes,toolbar=no,titlebar=no,width=800'
            );

            return false;
        });
    }, 200);

    $('.play-again').click(function() {
        window.location.href = window.location.href;
    });

    if(window.location.search != '?ref')
        $('.referrer').attr('style', 'display: none;');

    var answers = document.querySelectorAll('li'),
        results = {
            ////active
            1: {
                name: 'THE ACTIVE ADVENTURER',
                descriptionLeft: "<p>Swimming with sharks? Tick. Abseiling from the Empire State Building? Tick. Putting your feet up in retirement? Never! You'd much rather explore the world and challenge yourself throughout your Life2.</p>\
				<p>The new pension rules could give you the flexibility to vary your income throughout retirement to fund your great expeditions.</p>\
				<p>However, this new flexibility makes you responsible for making your income last. A financial adviser can help you plan for the long term and use income in a tax-efficient way. So all you need to worry about is what your next adventure will be.</p>",
                descriptionRight: '',
                image: 'images/outcomes/active_adventurer.jpg',
                shareTitle: 'When I retire, I could be The Active Adventurer. Which Life2 could you lead?',
                shareSummary: "Swimming with sharks? Tick. Abseiling from the Empire State Building? Tick. Putting your feet up in retirement? Never! You’d much rather explore the world and challenge yourself throughout your Life2."
            },
            2: {
                name: 'THE TIME-RICH VOLUNTEER',
                descriptionLeft: "<p>Now your 9-to-5 is over, you've got the chance to make a difference to good causes and improve the lives of others.</p>\
				<p>Whether volunteering overseas or helping out at the local charity shop, you'll need to think about how you use your pension pots, savings and investments to generate income that covers your expenses and lasts as long as you do.</p>\
				<p>A financial adviser can recommend a strategy to sustain you for what could conceivably be a 30 year retirement. The longer your income lasts, the more time you have to make a real difference.</p>",
                descriptionRight: '',
                image: 'images/outcomes/timerich_volunteer.jpg',
                shareTitle: 'When I retire, I could be The Time-Rich Volunteer. Which Life2 could you lead?',
                shareSummary: "Now your 9-to-5 is over, you’ve got the chance to make a difference to good causes and improve the lives of others."
            },
            3: {
                name: 'THE LEGACY MAKER',
                descriptionLeft: "<p>Family comes first. You've survived the teething, tantrums and teens. Now you've got the chance to help your children through the minefields of adult life. For you, Life2 is all about spending more time with those closest to you, and providing for their future. </p>\
				<p>The new pension rules will make it easier to pass on your pension wealth to future generations.</p>\
				<p>But you'll need to make sure your own expenses are covered too. A financial adviser can help you get that balance right and leave a telling legacy for your loved ones.</p>",
                descriptionRight: '',
                image: 'images/outcomes/legacy_maker.jpg',
                shareTitle: 'When I retire, I could be The Legacy Maker. Which Life2 could you lead?',
                shareSummary: "Family comes first. You've survived the teething, tantrums and teens. Now you've got the chance to help your children through the minefields of adult life. For you, Life2 is all about spending more time with those closest to you, and providing for their future."
            },
            4: {
                name: 'THE PORTFOLIO CAREERIST',
                descriptionLeft: "<p>You may not be ready to stop work, but you want to pick and choose which jobs to do and take advantage of any opportunity that comes your way. For you, Life2 is all about freedom to do what you want, when you want to.</p>\
				<p>The new pension rules allow you to take money out when it suits you, so if you want to carry on working, you can control your income much more easily. A financial adviser can help you plan ahead to minimise the chances of your income taking you unexpectedly into a higher rate tax-band. So you can continue working on the things you enjoy the most.</p>",
                descriptionRight: '',
                image: 'images/outcomes/portfolio_careerist.jpg',
                shareTitle: 'When I retire, I could be The Portfolio Careerist. Which Life2 could you lead?',
                shareSummary: "You may not be ready to stop work, but you want to pick and choose which jobs to do and take advantage of any opportunity that comes your way. For you, Life2 is all about freedom to do what you want, when you want to."
            },
            5: {
                name: 'THE MATURE ENTREPRENEUR',
                descriptionLeft: "<p>You've always fancied turning your passion into a business opportunity, like setting up that riding school you always dreamed of. For you, Life2 is all about exploring those entrepreneurial impulses. </p>\
				<p>The new pension rules could give you the flexibility to take what you want from your pension, when you want it to fund your latest project. However, you'll need to consider how the income from your business will affect your tax position, if things go well. A financial adviser can recommend which strategy best suits your needs. So nothing stands between you and your big venture.</p>\
				",
                descriptionRight: '',
                image: 'images/outcomes/mature_entrepreneur.jpg',
                shareTitle: 'When I retire, I could be The Mature Entrpreneur. Which Life2 could you lead?',
                shareSummary: "You've always fancied turning your passion into a business opportunity, like setting up that riding school you always dreamed of. For you, Life2 is all about exploring those entrepreneurial impulses. "
            },
            6: {
                name: 'THE TRANQUILITY SEEKER',
                descriptionLeft: "<p>No more phone calls. No more e-mail. And certainly no more stress. You've earned a Life2 of leisure, so put your feet up and relax. Or jet off to a desert island to reconnect with your inner self. Your choice.</p>\
				<p>The new pension rules offer lots of options for people who need them to fund their lifestyle. If you want, you can take advantage of the freedom to dip into your pension savings as and when you need them. Or you could decide that the security of a guaranteed income from an annuity is right for you. A financial adviser can recommend which strategy best suits your needs, so you can enjoy a stress-free Life2.</p>",
                descriptionRight: '',
                image: 'images/outcomes/tranquility_seeker.jpg',
                shareTitle: 'When I retire, I could be The Tranquility Seeker. Which Life2 could you lead?',
                shareSummary: "No more phone calls. No more e-mail. And certainly no more stress. You’ve earned a Life2 of leisure, so put your feet up and relax. Or jet off to a desert island to reconnect with your inner self. Your choice."
            },
            7: {
                name: 'THE PASSIONATE HOBBYIST',
                descriptionLeft: "<p>Write that novel. Record that album. Produce your first one-man art exhibition. Whatever your passion, Life2 will let you make the most of it.</p>\
				<p>Under the new pension rules, you'll have complete control over your retirement savings. Speak to a financial adviser about the lifestyle you want to achieve, and whether you need the flexibility of being able to take cash sums out of when you need them, or the security of a guaranteed income from an annuity. They'll help make sure you have a plan that lets you focus 100% on your passions.</p>",
                descriptionRight: '',
                image: 'images/outcomes/passionate_hobbyist.jpg',
                shareTitle: 'When I retire, I could be The Passionate Hobbyist. Which Life2 could you lead?',
                shareSummary: "Write that novel. Record that album. Produce your first one-man art exhibition. Whatever your passion, Life2 will let you make the most of it."
            },
            8: {
                name: 'THE DETERMINED FUNDRAISER',
                descriptionLeft: "<p>Running, climbing, sailing, skiing - the bigger the challenge, the better. For you, Life2 is about laughing in the face of old age, and raising money for the causes you care about.</p>\
				<p>To help others, you need to make sure your finances are sorted first. The new pension rules will let you take whatever you like from your pension savings, whenever you like, but be careful: the pot needs to last for the whole of your retirement, which could be 30 years or more. Let a financial adviser recommend a plan for you, so you can concentrate on your next challenge.</p>",
                descriptionRight: '',
                image: 'images/outcomes/determined_fundraiser.jpg',
                shareTitle: 'When I retire, I could be The Determined Fundraiser. Which Life2 could you lead?',
                shareSummary: "Running, climbing, sailing, skiing - the bigger the challenge, the better. For you, Life2 is about laughing in the face of old age, and raising money for the causes you care about."
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
                        .attr('data-url', 'http://life2quiz.com')
                        .attr('data-description', result.shareSummary)
                        .addClass('addthis_sharing_toolbox');

                    addthis.layers.refresh();

                    setTimeout(function() {
                        $('.result .share-canvas .aticon-facebook').click(function() {


                            window.open(
                                'https://www.facebook.com/dialog/feed?redirect_uri=' + encodeURI('http://life2quiz.com?close=true') + '&display=popup&app_id=627126750752913&link=http://life2quiz.com&picture=' + escape('http://life2quiz.com/' + result.image) + '&name=' + escape(result.shareTitle) + '&description=' + escape(result.shareSummary),
                                '_blank',
                                'height=600,menubar=yes,status=yes,toolbar=no,titlebar=no,width=800'
                            );

                            return false;
                        });
                    }, 1000);
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