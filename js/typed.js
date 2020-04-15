$(function(){
	$(".hello").typed({
		strings: ["Web Development", "Hybrid Apps", "UI/UX Designing", "E-commerce Sites"],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 15,
		// time before typing starts
		startDelay: 200,
		// backspacing speed
		backSpeed: 10,
		// time before backspacing
		backDelay: 1000,
		// loop
		loop: true,
		// false = infinite
		loopCount: 2000,
		// show cursor
		showCursor: true,
		// character for cursor
		cursorChar: "",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
});
