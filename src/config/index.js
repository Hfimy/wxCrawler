const path = require('path');
const fs = require('fs');

const wechatConfig = require('./wechatConfig');

const src = path.resolve(__dirname, '../../config.json');
const crawlerConfig = JSON.parse(fs.readFileSync(src, { encoding: 'utf8' }));

module.exports = {
  wechatConfig,
  crawlerConfig
};
