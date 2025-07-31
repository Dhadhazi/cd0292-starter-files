import countries from "../index";

it("should get basic data on the country canada", async () => {
	const data = await countries.getCountry('canada');
	expect(data).toEqual({
		capital: 'Ottawa',
		region: 'Americas',
		fifa: 'CAN'
	});
});

/** Add test for getRegionCountries function here */


it("Returns the country name based on the currency", async () => {
	const data = await countries.getCurrency('jpy');
	expect(data.name.common).toEqual('Japan');
});