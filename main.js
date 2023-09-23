const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    const ua = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36";
    await page.setUserAgent(ua);
    await page.goto('https://www.vinted.pl/', { waitUntil: "domcontentloaded" });

    const cookies = await page.cookies();
    await page.setCookie(...cookies);
    await page.setUserAgent(ua);

    await page.goto('https://www.vinted.pl/api/v2/catalog/items?per_page=985&time=1695509006&catalog_ids=1242&color_ids&brand_ids&size_ids&material_ids&video_game_rating_ids&status_ids&order=newest_first')

    const data = await page.evaluate(() => {
        const rawData = JSON.parse(document.querySelector('body').innerText);
        return rawData.items.slice(0, 5).map(item => ({
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