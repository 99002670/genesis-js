describe('Testing to Spy upon', () => {
	it('should call multiply function', () => {
		const obj = new mathFunc();
		spyOn(obj, "multiply");
		let match = obj.square(12);
		expect(obj.multiply).toHaveBeenCalled();
	});
});
