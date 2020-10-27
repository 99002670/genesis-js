demo = module.exports = {};

demo.hello = () => {
	return "Hello world!!!";
}

demo.add = (v1, v2) => {
	return v1 + v2;
}

demo.sub = (v1, v2) => {
	return v1 - v2;
}

demo.mul = (v1, v2) => {
	return v1 * v2;
}

demo.div = (v1, v2) => {
	return v1 / v2;
}

demo.fact = (num) => {
	let f = 1;
	while(num > 0) {
		f *= num;
		num -= 1;
	}
	return f;
}

demo.dateCheck = (year, month, day) => {
	let strDate = `${year}-${month}-${day}`;
	const date = Date.parse(strDate);
	return !isNaN(date);
}