let list_url = ["https://www.headlightsdepot.com/media/catalog/product/D/S/DS687-B100P_1.jpg", "https://www.headlightsdepot.com/media/catalog/product/D/D/DD6672-GBFG_1.jpg", "https://www.headlightsdepot.com/media/catalog/product/L/F/LF030_1.jpg", "https://www.headlightsdepot.com/media/catalog/product/3/3/330-2052P-AC_1.jpg", "https://www.headlightsdepot.com/media/catalog/product/C/S/CS125-B000R_1_3.jpg", "https://www.headlightsdepot.com/media/catalog/product/G/M/GM512-B000L_1.jpg", "https://www.headlightsdepot.com/media/catalog/product/G/M/GM308-B000R_1.jpg", "https://www.headlightsdepot.com/media/catalog/product/G/M/GM308-B000P_1.jpg", "https://www.headlightsdepot.com/media/catalog/product/F/R/FR542-B000P_1.jpg", "https://www.headlightsdepot.com/media/catalog/product/F/R/FR542-B000R_1.jpg"];

console.log(`总数量：${list_url.length}`)

async function get_picture(url_index) {
    try {
        let response = await fetch(list_url[url_index - 1], {method: 'GET'});

        if(response.ok && response.status === 200) {
            let blob = await response.blob();
            let link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = `${url_index}.jpg`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(link.href);
            console.log(`[True] - [Page ${url_index}]`);
        }
        else {
            get_picture(url_index);
        }
    }
    catch(error) {
        get_picture(url_index);
    }
}

for(let i = 1; i <= list_url.length; i++) {
    get_picture(i);
}