const path = require('path');
const fs = require('fs');

const crawlerPageList = require('./crawlerPageList');
const crawlerPageItem = require('./crawlerPageItem');

async function start(account, startPage, pageSize, fetchPageNums) {
  for (let i = 0; i < fetchPageNums; i++) {
    console.log(
      `    正在抓取第${startPage + i + 1}页文章列表，预抓取${pageSize}篇`
    );
    const pageListRawRes = await crawlerPageList(
      account,
      i,
      startPage,
      pageSize
    );

    if (pageListRawRes.ret !== 0) {
      console.log(`    抓取第${startPage + i + 1}页文章列表失败`);
      continue;
    }

    const pageListRes = JSON.parse(pageListRawRes.body);

    // 后续根据具体的字段值确定错误消息及是否可继续爬取
    if (pageListRes.ret !== 0 || pageListRes.errmsg !== 'ok') {
      console.log(`    抓取第${startPage + i + 1}页文章列表失败`);
      continue;
    }

    const pageList = JSON.parse(pageListRes.general_msg_list).list;

    for (let j = 0; j < pageList.length; j++) {
      console.log(`        开始抓取第${startPage + i + 1}页第${j + 1}篇文章`);
      const pageItemRes = await crawlerPageItem(account, pageList[j]);

      if (pageItemRes.ret !== 0) {
        console.log(`        抓取第${startPage + i + 1}页第${j + 1}篇文章失败`);
        continue;
      }

      console.log('        抓取完成，等待写入');

      // 模拟入库
      const dbDirPath = path.join(__dirname, `../../db`);
      const accountDirPath = path.join(__dirname, `../../db/${account.name}`);
      if (!fs.existsSync(dbDirPath)) {
        fs.mkdirSync(dbDirPath);
      }
      if (!fs.existsSync(accountDirPath)) {
        fs.mkdirSync(accountDirPath);
      }

      const htmlFilePath = createFilePath(account, pageList[j], 'html');
      const jsonFilePath = createFilePath(account, pageList[j], 'json');
      fs.writeFile(htmlFilePath, pageItemRes.body, err => {
        if (err) {
          throw new Error('写入文件失败，请检查');
        }
      });

      fs.writeFile(jsonFilePath, JSON.stringify(pageList[j]), err => {
        if (err) {
          if (err) {
            throw new Error('写入文件失败，请检查');
          }
        }
      });
    }

    console.log(`    抓取第${startPage + i + 1}页文章列表完成`);
  }
}

function createFilePath(account, item, ext) {
  return path.join(
    __dirname,
    `../../db/${account.name}/${item.app_msg_ext_info.title}.${ext}`
  );
}

module.exports = {
  start
};
