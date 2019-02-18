async function delay(seconds) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, seconds * 1000);
  });
}

function createRandom() {
  // 30-60s
  return Math.floor(Math.random() * 30) + 30;
}

module.exports = {
  delay,
  createRandom
};
