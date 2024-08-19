// routes.js
import { createCheerioRouter } from 'crawlee';
import { BASE_URL } from './constants.js';

export const router = createCheerioRouter();

router.addDefaultHandler(({ log }) => {
    log.info('Route reached.');
});

// Add a handler to our router to handle requests with the 'START' label
router.addHandler('START', async ({ $, crawler, request }) => {
    const { keyword } = request.userData;

    const products = $('div > div[data-asin]:not([data-asin=""])');

    // loop through the resulting products
    for (const product of products) {
        const element = $(product);
        const titleElement = $(element.find('.a-text-normal[href]'));

        const url = `${BASE_URL}${titleElement.attr('href')}`;

        // scrape some data from each and to a request
        // to the crawler for its page
        await crawler.addRequests([{
            url,
            label: 'PRODUCT',
            userData: {
                // Pass the scraped data about the product to the next
                // request so that it can be used there
                data: {
                    title: titleElement.first().text().trim(),
                    asin: element.attr('data-asin'),
                    itemUrl: url,
                    keyword,
                },
            },
        }]);
    }
});

router.addHandler('PRODUCT', ({ log }) => log.info('on a product page!'));
