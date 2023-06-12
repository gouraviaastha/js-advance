const fs = require('fs');
const puppeteer = require('puppeteer');
const { error } = require('console');
async function run (){ 
    const browser = await puppeteer.launch();
    const  page =  await browser.newPage();
    await page.goto('https://www.amazon.in/s?k=-amazon&rh=n%3A1389432031%2Cp_n_format_browse-bin%3A30678580031&dc&ds=v1%3AkmVVaXqBbhIBVLood33OOzE2uBUxd%2Ft9SKJ89toGo0Y&hvadid=72499124504037&hvbmt=be&hvdev=c&hvqmt=e&qid=1686373928&rnid=30678573031&tag=msndeskstdin-21&ref=sr_nr_p_n_format_browse-bin_1');   
    const object = await page.$$eval('div.sg-col-20-of-24' , (elements)=> elements.map((e)=>(        
            {title: e.querySelector('h2.a-size-mini.a-spacing-none.a-color-base.s-line-clamp-4').innerText,
            price: e.querySelector('span.a-price-whole').innerText,
            rating: e.querySelector('span.a-size-base.s-underline-text').innerText}            
            ))) ;
    console.log(object[0]);  
    
    const product =JSON.stringify(object)
    fs.writeFile('product.JSON', product,(err)=>{
        if (err) throw err
        console.log('File saved')
        })
    
    
    // console.log(object[0]);  
    
    await browser.close(); 
}
run();