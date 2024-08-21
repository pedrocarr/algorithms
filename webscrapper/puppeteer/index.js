// index.js
import { gotScraping } from 'got-scraping';
import scrapeClientId from './scrapeClientId.js';

const scrape100Items = async () => {
    let nextHref = 'https://api-v2.soundcloud.com/users/141707/tracks?limit=20&offset=0';
    const items = [];

    const clientId = await scrapeClientId();

    while (items.flat().length < 100) {
        if (!nextHref) return items.flat();

        // set the "client_id" URL parameter of the
        // nextHref URL
        const nextURL = new URL(nextHref);
        nextURL.searchParams.set('client_id', clientId);

        // make the paginated request and push its results
        // into the in-memory "items" array
        const res = await gotScraping(nextURL);
        const json = JSON.parse(res.body);
        items.push(json.collection);

        // queue the next link for the next loop iteration
        nextHref = json.next_href;
    }

    // return an array of all our scraped items
    // once the loop has finished
    return items.flat();
};

// test run
(async () => {
    // run the function
    const data = await scrape100Items();

    // log the length of the items array
    console.log(data.length);
})();
