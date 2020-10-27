describe('Testing the MAth Program', () => {
	it('add 2 numbers', () => {
		const result = addFunc(13, 12);
		expect(result).toBe(25);
	});

	it('subtract 2 numbers', () => {
		const result = subFunc(13, 12);
		expect(result).toBe(1);
	});

	it('multiply 2 numbers', () => {
		const result = mulFunc(13, 12);
		expect(result).toBe(156);
	});

	it('divide 2 numbers', () => {
		const result = divFunc(13, 12);
		expect(result).toBe(1.083);
	});

	xit('divide by zero', () => {
		const result = divFunc(13, 0);
		expect(result).toEqual(Infinity);
	});

	it('square root of a number', () => {
		const result = sqrt(16);
		expect(result).toBe(4);
	});

	it('square of a number', () => {
		const result = sqr(4);
		expect(result).toBe(16);
	});

	xit('should return the title of the app', () => {
		const result = title();
		expect(result).toBe("Welcome to Jasmine Training");
	});
});