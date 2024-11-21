let page = 51;
let url_base = 'https://www.headlightsdepot.com/catalog/fog-lights?product_list_limit=71&product_list_order=name';

for(let p = 1; p <= page; p++) {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', `${url_base}&p=${p}`, false);

	xhr.onload = function() {
		if(xhr.status == 200 && xhr.readyState == 4) {
	        let blob = new Blob([xhr.response], {type: 'text/html'});
	        let link = document.createElement('a');
	        link.href = URL.createObjectURL(blob);
	        link.download = `${p}.html`;
	        document.body.appendChild(link);
	        link.click();
	        document.body.removeChild(link);
	        URL.revokeObjectURL(link.href);

            let now = new Date();
			console.log(`[True] - [剩余${page - p}条] - [${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}] - ${p}. ${url_base}&p=${p}`);
		}
		else {
			console.log(`[False] - [Page ${p}]`);
		}
	};
	xhr.onerror = function() {
		console.log(`[False] - [Page ${p}]`);
	};

	xhr.send();
}