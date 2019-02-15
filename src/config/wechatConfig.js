// 微信公众号请求通用配置 count offset __biz appmsg_token Cookie 动态写入
const wechatConfig = {
  domain: 'https://mp.weixin.qq.com',
  path: '/mp/profile_ext',
  querystring: {
    action: 'getmsg',
    f: 'json',
    is_ok: 1,
    scene: 123,
    uin: '777',
    key: '777',
    pass_ticket: '',
    wxtoken: '',
    x5: '0'

    // count: 10,
    // offset: 10,

    // __biz: config.wechat.biz,
    // appmsg_token: config.wechat.appmsg_token,
  },
  headers: {
    Accept: '*/*',
    'Accept-Language': 'zh-CN,zh;q=0.8',
    'Cache-Control': 'no-cache',
    Connection: 'keep-alive',
    Host: 'mp.weixin.qq.com',
    'User-Agent':
      'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1'
    // Cookie: config.wechat.cookie,
  }
};

module.exports = wechatConfig;
