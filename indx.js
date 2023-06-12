const puppeteer = require('puppeteer');
async function run (){ 
    const browser = await puppeteer.launch();
    const  page =  await browser.newPage();
    await page.goto('https://www.amazon.in/s?bbn=1389401031&rh=n%3A976419031%2Cn%3A1389401031%2Cn%3A1389432031&dc&qid=1686552676&rnid=1389401031&ref=lp_1389401031_nr_n_3');   
    // const result = await page.evaluate(()=> {
    //     let a = document.querySelectorAll('.a-size-base-plus a-color-base a-text-normal');
    //     const  b =[...a];
    //     b.map((h)=> h.innerText);
    // })
    console.log(result);
    await browser.close();
}
run();