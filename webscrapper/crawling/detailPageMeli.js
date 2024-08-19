import { PlaywrightCrawler, Dataset } from 'crawlee';

const crawler = new PlaywrightCrawler({
  // We removed the headless: false option to hide the browser windows.
  requestHandler: async ({ parseWithCheerio, request, enqueueLinks }) => {
    console.log(`Fetching URL: ${request.url}`);

    if (request.label === 'start-url') {
      await enqueueLinks({
        selector: 'a.promotion-item__link-container',
      });
      return;
    }

    // Fourth, parse the browser's page with Cheerio.
    const $ = await parseWithCheerio();

    const title = $('h1').text().trim()

    const cents = $('span.andes-money-amount__cents').contents()[0].data
    const currency = $('span.andes-money-amount__currency-symbol').contents()[0].data
    const priceFraction = $('span.andes-money-amount__fraction').contents()[1].data
    const finalPrice = `${currency} ${priceFraction},${cents}`

    const reviewCount = parseInt($('span.ui-pdp-review__amount').text().replace(/[^a-zA-Z0-9 ]/g, ''), 10);
    const description = $('div[class*="description"] p.ui-pdp-description__content').text().trim();


    await Dataset.pushData({
      title,
      finalPrice,
      reviewCount,
      description,
    });
  },
});

await crawler.addRequests([{
  url: `https://www.mercadolivre.com.br/ofertas`,
  label: 'start-url',
}]);

await crawler.run();
await Dataset.exportToCSV('results');
await Dataset.exportToJSON('results')
