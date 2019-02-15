const Crawler = require('crawler');

const c = new Crawler({
  maxConnections: 1,
  rateLimit: 1000
});

function crawlerService(options) {
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
