
module.exports = source => {
	return source.replace(/\<code\>(([\n]|.)+?)\<\/code\>/gi, (matches, g1) => {
		const code = g1
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;');

		return `<code>${code}</code>`;
	});
};
