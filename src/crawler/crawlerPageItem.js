const { crawlerService } = require('./util');
const { wechatConfig } = require('../config');

async function crwalerPageItem(account, item) {
  return await crawlerService(combinePageItemOptions(account, item));
}

function combinePageItemOptions(account, item) {
  return {
    uri: item.app_msg_ext_info.content_url,
    headers: { ...wechatConfig.headers, Cookie: account.cookie },
    gzip: false,
    priority: 1
  };
}

module.exports = crwalerPageItem;
