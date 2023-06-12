const fs = require('fs');
const puppeteer = require('puppeteer');
async function run (){ 
    const browser = await puppeteer.launch();
    const  page =  await browser.newPage();
    await page.goto('https://www.amazon.in/s?k=-amazon&rh=n%3A1389432031%2Cp_n_format_browse-bin%3A30678580031&dc&ds=v1%3AkmVVaXqBbhIBVLood33OOzE2uBUxd%2Ft9SKJ89toGo0Y&hvadid=72499124504037&hvbmt=be&hvdev=c&hvqmt=e&qid=1686373928&rnid=30678573031&tag=msndeskstdin-21&ref=sr_nr_p_n_format_browse-bin_1');   
    const pages = await page.$$('div.s-main-slot.s-result-list.s-search-results.sg-row > .s-result-item');
    const item =[];
    for (const allpage of pages){
        let  title ='';
        let price='';
        let rating='';
    
        try{
            title = await page.evaluate(el=> el.querySelector('div > div > h2').innerText , allpage);
        } catch(error){}
        try{
            price = await page.evaluate(el=> el.querySelector(' a > span > span > span.a-price-whole').innerText , allpage);
        } catch(error){}
        try{
            rating = await page.evaluate(el=> el.querySelector(' div > div > span > a > span').innerText , allpage);
        } catch(error){}
       
        if(title !== ''){
        item.push({title,price,rating})
        }
    }
    console.log(item);   
    const product = JSON.stringify(item)       
   
    fs.writeFile('product.JSON',product,(err)=>{
        if (err) throw err
        console.log('File saved')})
    await browser.close(); 
}
run();