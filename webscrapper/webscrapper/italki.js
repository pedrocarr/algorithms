// import { Actor } from 'apify';
// import { CheerioCrawler, Dataset } from 'crawlee';

// import { parseInteger } from './helper.js';

// await Actor.init();

// const {
//     startUrls,
//     maxRequestsPerCrawl = 2,
// } = await Actor.getInput() ?? {};

// const proxyConfiguration = await Actor.createProxyConfiguration();

// const crawler = new CheerioCrawler({
//     proxyConfiguration,
//     maxRequestsPerCrawl,
//     async requestHandler({ enqueueLinks, request, $, log }) {
//         log.info('enqueueing new URLs');
//         await enqueueLinks();

//         const name = $('h1').text().trim();
//         const image = $('img').attr('src');
//         const teachLanguages = $('div[class*="items-center"] span.small-secondary').text().trim();
//         const speakLanguages = $('div[class*="md:flex"] span.small-secondary').eq(1).text().trim();
//         const rating = parseFloat($('div.text-warning').text().trim()) || 0;
//         const reviewsString = $('h2').contents()[2]?.data?.trim() || '0';
//         const reviews = parseInteger(reviewsString);
//         const students = parseInteger($('div[class*="h4"]').eq(1).text());
//         const lessons = parseInteger($('div[class*="h4"]').eq(2).text());
//         const attendance = $('div[class*="h4"]').eq(3).text().trim();
//         const response = $('div[class*="h4"]').eq(4).text().trim();
//         const country = $('div[class*="relative overflow-hidden"] span').eq(0).text().replace('From', '')
//             .trim();
//         const description = $('div[class*="relative overflow-hidden"] span.whitespace-pre-wrap').eq(0).text().trim()
//             .replace(/\n/g, ' ');
//         const trialLesson = $('div[class*="text-red2 rounded-full"]').eq(0).text().replace('+', '')
//             .trim();
//         const locationText = $('div[class*="relative overflow-hidden"] span').eq(1).text();
//         const location = locationText.split(',')[1]?.split('(')[0]?.trim() || '';
//         const timezone = locationText.match(/UTC[+-]\d{2}:\d{2}/)?.[0] || '';

//         log.info(`${name}`, { url: request.loadedUrl });

//         const output = {
//             image,
//             name,
//             url: request.loadedUrl,
//             teachLanguages,
//             speakLanguages,
//             trialLesson,
//             rating,
//             reviews,
//             activeStudents: students,
//             lessons,
//             attendance,
//             responseRate: response,
//             countryOfOrigin: country,
//             livesIn: location,
//             timezone,
//             description,
//         };

//         const filteredOutput = Object.fromEntries(
//             Object.entries(output)
//                 // eslint-disable-next-line no-unused-vars
//                 .filter(([_, value]) => typeof value === 'string' && value.match(/https:\/\/www\.italki\.com\/en\/teacher\/\d+\/english/),
//                 ),
//         );

//         if (Object.keys(filteredOutput).length > 0) {
//             log.info('Saving data to dataset');
//             await Dataset.pushData({
//                 ...output,
//                 ...filteredOutput,
//             });
//         } else {
//             log.info('No valid data to save to dataset');
//         }
//     },
// });

// await crawler.run(startUrls);

// await Actor.exit();
