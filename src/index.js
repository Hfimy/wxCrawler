const { crawlerConfig } = require('./config');

const crawler = require('./crawler');

const { accounts, startPage, pageSize, fetchPageNums } = crawlerConfig;

// 预先同步抓取  异步并发抓取是否导致封号？
async function main() {
  for (let i = 0; i < accounts.length; i++) {
    console.time(accounts[i].name);
    console.log(`开始抓取公众号:${accounts[i].name},预抓取${fetchPageNums}页`);
    await crawler.start(accounts[i], startPage, pageSize, fetchPageNums);
    console.log(`抓取公众号${accounts[i].name}完成`);
    console.timeEnd(accounts[i].name);
    console.log('\n');
  }
}

main();
