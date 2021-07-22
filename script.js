function computeInterest() {
	// principle amount
	var principal = document.getElementById('principal').value;
	// interest rate per annum
	var rate = document.getElementById('rate').value;
	// number of years to calculate interest
	var years = document.getElementById('years').value;
	// calculated interest
	var interest = (principal * years * rate) / 100;
	// YYYY year in the future when interest will be paid
	var year = new Date().getFullYear() + parseInt(years);

	// erase any previous result
	document.getElementById('result').innerHTML = '';

	// make sure initial amount is greater than zero
	if (principal <= 0) {
		// alert box and set focus
		alert('Initial amount cannot be zero or a negative number.');
		document.getElementById('principal').focus();
	} else {
		// display the results
		document.getElementById('result').innerHTML =
			'If you deposit $' +
			principal +
			'<br>at an interest rate of ' +
			rate +
			'%<br>you will receive interest of $' +
			interest +
			'<br>in the year ' +
			year +
			'<br>';
	}
}

function updateRate() {
	// display numeric representation of slider value
	var rateval = document.getElementById('rate').value;
	document.getElementById('rate_val').innerText = rateval;
}
