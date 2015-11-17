'use strict';

describe('Ajax test', function() {
	it('Faking ajax call', function() {
		
		spyOn($, "ajax").and.callFake(function (req) {
			var d = $.Deferred();
			d.resolve(
				[
					{
						"name": "Product 1",
						"value": 123
					},
					{
						"name": "Product 2",
						"value": 35
					}
				]
			);
			return d.promise();
		});
		
		app.getData();
		
		expect(app.getProducts().length).toEqual(2);
		expect(app.getProducts()[0].name).toEqual("Product 1");
		expect(app.getProducts()[0].value).toEqual(123);
		expect(app.getProducts()[1].name).toEqual("Product 2");
		expect(app.getProducts()[1].value).toEqual(35);
	});
});