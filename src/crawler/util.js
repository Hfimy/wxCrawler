const Crawler = require('crawler');
const { delay, createRandom } = require('../util');

const c = new Crawler({
  maxConnections: 1,
  rateLimit: 1000 // 1s
});

async function crawlerService(options) {
  // 每次抓取之前延迟30-60s的随机时间
  console.log('                ...waiting...');
  await delay(createRandom());

  return new Promise((resolve, reject) => {
    c.queue({
      ...options,
      callback: (error, res, done) => {
        if (error) {
          reject({ ret: -1 });
        } else {
          if (res.statusCode !== 200 || !res.body) {
            reject({ ret: -1 });
          }
          resolve({ ret: 0, body: res.body });
        }
        done();
      }
    });
  });
}

module.exports = { crawlerService };
