// main.js
import { CheerioCrawler, log, KeyValueStore } from 'crawlee';
import { router } from './routes.js';
import { BASE_URL } from './constants.js';

const { keyword = 'iphone' } = (await KeyValueStore.getInput()) ?? {};

const crawler = new CheerioCrawler({
    requestHandler: router,
});

await crawler.addRequests([
    {
        // Use BASE_URL here instead
        url: `${BASE_URL}/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=${keyword}`,
        label: 'START',
        userData: {
            keyword,
        },
    },
]);

log.info('Starting the crawl.');
await crawler.run();
log.info('Crawl finished.');
