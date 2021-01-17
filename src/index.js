import 'reveal.js/css/reveal.css';
import 'reveal.js/lib/css/zenburn.css';

const requireAll = r => r.keys().forEach(r);

requireAll(require.context('reveal.js/css/theme/', true, /\.css$/))
requireAll(require.context('./', true, /\.(html|css)$/))
requireAll(require.context('../assets/', true, /\.png$/))

import Reveal from 'reveal.js';
import hljs from 'highlight.js';

Reveal.configure({
	slideNumber: true,
	history: true,
	controls: true,
});

Reveal.initialize();
hljs.initHighlightingOnLoad();

[].forEach.call(
	document.getElementsByClassName('location'),
	l => l.innerHTML = window.location.origin + window.location.pathname
);

// Taken from: https://github.com/hakimel/reveal.js/issues/1694
// On 2. October 2018
Reveal.addEventListener('slidechanged', event => {
	const gifAttr = event.currentSlide.getAttribute('data-gif');
	if (gifAttr && gifAttr === 'repeat') {
		const img = event.currentSlide.querySelector('img');
		const gif = img.getAttribute('src');

		img.setAttribute('src', gif + '?t=' + (new Date().getTime()));
	}
}, false);
