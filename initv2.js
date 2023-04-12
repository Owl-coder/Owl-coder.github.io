function init() {

//
//	let h3 = document.createElement('h3');
//	h3.innerText = `Test ${version}`;
//	document.body.prepend(h3);

	let element = document.getElementById('canvas360');

	let imagesArray = Array.from(new Array(40), (v, k) => { // generate array of urls
		k = k+1;  // элементы начинаются с 1, а не с 0
		let number = String(k).padStart(3, "0");
		return `v2/dh-${number}.jpg`
	});

	var instance = new AnimateImages(element, {
		images: imagesArray, /* required */
		preload: "all",
		preloadNumber: 0,
		loop: true,
		fps: 30,
		poster: `v2/dh-001.jpg`,
		draggable: true,
		responsiveAspect: "height"
	});

	let start = document.getElementById('start');
	let stop = document.getElementById('stop');

	start.addEventListener('click', (e) => { instance.play(); });
	stop.addEventListener('click', (e) => { instance.stop(); });

}
window.addEventListener('load', init)