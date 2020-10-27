const app = require("../src/math");

describe('Testing a NodeJs program', () => {
	it('should print hello', () => {
		const title = app.hello();
		expect(title).toBe("Hello world!!!");
	});

	it('should get factoriall', () => {
		const factorial = app.fact(5);
		expect(factorial).toBe(120);
	});

	it('should get valid date', () => {
		const date = app.dateCheck(2020, 12, 15);
		expect(date).toBeTruthy();
	});

	it('should get invalid date', () => {
		const date = app.dateCheck(2020, 15, 12);
		expect(date).toBeFalsy();
	});
});