function blink(selector, speed, num_blinks) {
	var i;
	$(selector).hide().fadeIn(speed);
	for (i = 0; i < num_blinks; i++) {
		$(selector).fadeOut(speed);
		$(selector).fadeIn(speed);
	}
}