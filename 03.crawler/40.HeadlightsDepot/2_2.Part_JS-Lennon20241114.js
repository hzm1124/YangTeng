let list_url = ["https://www.headlightsdepot.com/07-12-nissan-altima-fog-lights-driver-and-passenger-side-set-sku-ds687-b100p.html", "https://www.headlightsdepot.com/13-18-ram-1500-ss3-led-pod-sport-ram-vertical-kit-white-sae-fog-sku-dd6672-gbfg.html", "https://www.headlightsdepot.com/14-17-jeep-wrangler-morimoto-xb-led-fogs-type-m-set-black-sku-lf030.html", "https://www.headlightsdepot.com/18-20-ford-f-150-capa-certified-fog-light-with-bracket-left-driver-right-passenger-pair-sku-330-2052p-ac.html", "https://www.headlightsdepot.com/1997-2000-dodge-dakota-1998-2000-dodge-passenger-side-fog-light-sku-cs125-b000r.html", "https://www.headlightsdepot.com/1997-2005-buick-century-1997-2004-buick-regal-driver-side-fog-light-sku-gm512-b000l.html", "https://www.headlightsdepot.com/1999-2002-chevy-silverado-2000-2006-tahoe-suburban-fog-light-passenger-side-sku-gm308-b000r.html", "https://www.headlightsdepot.com/1999-2002-chevy-silverado-2000-2006-tahoe-suburban-fog-lights-set-left-right-driver-side-assembly-sku-gm308-b000p.html", "https://www.headlightsdepot.com/2001-2004-ford-superduty-pickup-2001-2004-ford-f-250-2001-2004-ford-f-350-2001-2004-ford-f-450-2001-2004-ford-f-550-2001-2004-ford-excursion-factory-installed-fog-sku-fr542-b000p.html", "https://www.headlightsdepot.com/2001-2004-ford-superduty-pickup-2001-2004-ford-f-250-2001-2004-ford-f-350-2001-2004-ford-f-450-2001-2004-ford-f-550-2001-2004-ford-excursion-factory-installed-fog-light-right-hand-passengers-side-sku-fr542-b000r.html"];

console.log(`总数量：${list_url.length}`)

for(let i = 1; i <= list_url.length; i++) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', list_url[i - 1], false);

    xhr.onload = function() {
        if(xhr.status == 200 && xhr.readyState == 4) {
            let blob = new Blob([xhr.response], {type: 'text/html'});
            let link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = `${i}.html`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(link.href);

            let now = new Date();
            console.log(`[True] - [Page ${i}] - [${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}]`);
        }
        else {
            console.log(`[False] - [Page ${i}]`);
        }
    };
    xhr.onerror = function() {
        console.log(`[False] - [Page ${i}]`);
    };

    xhr.send();
}