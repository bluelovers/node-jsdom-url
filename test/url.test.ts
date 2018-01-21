/**
 * Created by user on 2018/1/21/021.
 */

import localDev, { relative, expect, path, assert, util } from './_local-dev';

import URL, { serializeHost } from '..';

// @ts-ignore
describe(relative(__filename), () =>
{
	let currentTest;

	// @ts-ignore
	beforeEach(function ()
	{
		currentTest = this.currentTest;

		//console.log('it:before', currentTest.title);
		//console.log('it:before', currentTest.fullTitle());
	});

	// @ts-ignore
	describe(`suite`, () =>
	{
		// @ts-ignore
		it(`check href`, function (done)
		{
			let href = 'https://github.com/tmpvar/jsdom?a=1';

			let url1 = new URL(href, null);
			let url2 = URL.create(href);

			console.log(url1, url1.toObject());

			expect(href).to.be.equal(url1.toString());
			expect(href).to.be.equal(url2.toString());

			expect(href).to.be.equal(url1.href);
			expect(href).to.be.equal(url2.href);

			done();
		});

		it(`exports`, function (done)
		{
			let self = require("..");
			let ks = Object.keys(require("whatwg-url"));

			expect(self).to.include.all.keys(ks);

			done();
		});
	});
});
