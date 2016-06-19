var i = setInterval(function() {
	console.log('L ' + new Date());
}, 1000);

setTimeout(function() {
	clearInterval(i);
}, 5000)