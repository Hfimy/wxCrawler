const { crawlerService } = require('./util');
const { wechatConfig } = require('../config');

async function crwalerPageList(account, index, startPage, pageSize) {
  return await crawlerService(
    combinePageListOptions(account, index, startPage, pageSize)
  );
}

function combinePageListOptions(account, index, startPage, pageSize) {
  const qs = {
    ...wechatConfig.querystring,
    count: pageSize,
    offset: (startPage + index) * pageSize,
    __biz: account.biz,
    appmsg_token: account.token
  };
  return {
    uri: wechatConfig.domain + wechatConfig.path,
    headers: { ...wechatConfig.headers, Cookie: account.cookie },
    qs: qs,
    gzip: false,
    jQuery: false
  };
}

module.exports = crwalerPageList;
