const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false
    });

    // nie dotykac tego
    const page = await browser.newPage();
    const ua = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36";
    await page.setUserAgent(ua);
    await page.goto('https://www.vinted.pl/', { waitUntil: "domcontentloaded" });

    const cookies = await page.cookies();
    await page.setCookie(...cookies);
    await page.setUserAgent(ua);


    const itemsPerPage = '9'; // ile itemkow ma sie pojawic w API (mniej = szybciej działający kod)
    const catalogIds = '1206'; // id katalogu, łatwo znalezc wystarczy sprawdzic url na stronie
    const colorIds = ''; // to samo co wyzej
    const brandIds = ''; // jeszcze nie wiem ale sie dowiem ^^
    const sizeIds = ''; // to samo co wyzej
    const materialIds = ''; // to samo co wyzej
    const videoGameRatingIds = ''; //   to samo co wyzej
    const order = 'newest_first'; // sposob w jaki przedmioty sa ukladane w api (newest_first = od najnowszych) (oldest_first = od najstarszych)



    await page.goto(`https://www.vinted.pl/api/v2/catalog/items?per_page=${itemsPerPage}&catalog_ids=${catalogIds}&color_ids=${colorIds}&brand_ids=${brandIds}&size_ids=${sizeIds}&material_ids=${materialIds}&video_game_rating_ids=${videoGameRatingIds}&status_ids&order=${order}`)

    const data = await page.evaluate(() => {
        const rawData = JSON.parse(document.querySelector('body').innerText);
        return rawData.items.slice(0,1).map(item => ({
            // tutaj jakie dane chcemy aby program zwrocil, bedzie dodatkowy plik ze wszytskim co ma api do zaoferowania
            title: item.title,
            total_item_price: item.total_item_price,
            brand_title: item.brand_title,
            url: item.url,
            photo: {
                url: item.photo.url
            }
        }));
    });

    console.log(data);

    await browser.close()
})();