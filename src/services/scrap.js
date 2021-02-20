const cheerio = require('cheerio');
const bodyParser = require('body-parser');
const request = require('request');

let datas = [];
let tag = 'java';
request(`https://medium.com/search?q=${tag}`, (err, response, html) => {

    if (response.statusCode === 200) {
        const $ = cheerio.load(html);

        $('.js-block').each((i, el) => {

            const title = $(el).find('h3').text();
            const link = $(el).find('.postArticle-content').find('a').attr('href');

            let data = {
                title,
                link,
            }

            datas.push(data);
        })
    }
    console.log(datas);
});
    /*
    let finalData = [];
    for (let i = 0; i < datas.length; i++) {
        let currLink = datas[i]['link'];
        console.log(currLink);
        request(currLink, (err, response, html) => {
            if (response.statusCode === 200) {
                const $ = cheerio.load(html);
                let content = {};
                //content.creator = $.querySelector("#root > div > div.s > article > div > section:nth-child(3) > div > div > div:nth-child(2) > div > div > div.o.n > div.fm.aj.s > div > div > span > div > span > a");
                content.title = $('h1', '/div/div/div[3]/article/div/section[1]/div/div/div[1]', '#root');
                /*content.details = $.querySelector("#root > div > div.s > article > div > section:nth-child(3) > div > div > div:nth-child(2) > div > div > div.o.n > div.fm.aj.s > span > span > div");
                content.blog = $.querySelector("#dbda");
                content.tags = $.querySelector("#root > div > div.s > div:nth-child(7) > div > div.n.p > div > div.ox.s > ul");
                content.comments = $.querySelector("#root > div > div.s > div:nth-child(7) > div > div.n.p > div > div.ox.n.ff.z > div.n.nk > button > div > div > p > span");*/
                /*finalData.push(content);
                console.log('content: ' + JSON.stringify(content));
            }
        })
    }
});*/