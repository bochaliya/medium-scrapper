const http = require('http');
const cheerio = require('cheerio');
const request = require('request-promise');
const puppeter = require('puppeteer');
const URL = require('url');

async function main() {
    let url = 'https://medium.com/swlh/tagged/scrapping';
    let html = await request.get(url);
    let htmlVal = cheerio.load(html.toString());
    let arr = []; 
    htmlVal("a").each((i, link) => {
      let allHref = URL.parse(htmlVal(link).attr("href"), true);
      let qArr = Object.keys(allHref['query']);
      let url = allHref['href'].split('?')[0];
      arr.push({ url, qArr });
    });
    //console.log(arr);

    let urlsArr = arr.map(x => x['url']);
    let urlsSet = new Set(urlsArr);
    let arrObj = [...urlsSet].map(url => {
      return {
        url: url,
        totalRef: arr.filter(e => e['url'] === url).length,
        params: arr.find(e => e['url'] === url).qArr,
      }
    });
    //console.log(arrObj);
    let result = await request.get('https://medium.com/swlh/scrape-the-world-with-node-js-fd9ed5aa197a');
    console.log(result);
}
main();

exports = module.exports = {
    main
}