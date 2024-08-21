// import the puppeteer module
import puppeteer from 'puppeteer';

const scrapeClientId = async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    // initialize a variable that will eventually hold the client_id
    let clientId = null;

    // handle each response
    page.on('response', async (res) => {
        // try to grab the 'client_id' parameter from each URL
        const id = new URL(res.url()).searchParams.get('client_id') ?? null;

        // if the parameter exists, set our clientId variable to the newly parsed value
        if (id) clientId = id;
    });

    // visit the page
    await page.goto('https://soundcloud.com/tiesto/tracks');

    // wait for a selector that ensures the page has time to load and make requests to its API
    await page.waitForSelector('.profileHeader__link');

    await browser.close();

    return clientId
};

export default scrapeClientId
