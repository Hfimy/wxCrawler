### 微信公众号爬虫

##### config.json 配置

![截图](https://github.com/Hfimy/wxCrawler/blob/master/image/demo1.png?raw=true);

- 如图：在 config.json 配置文件中 accounts 为待抓取的微信公众号列表，其中每个公众号对象的 biz、token、cookie 由 charles 抓包获取，具体操作为登录 pc 版微信后，打开待抓取的微信公众号，点击查看历史消息，此时在 charles 能够抓取到相应请求的\_\_biz、appmsg_token、Cookie 等信息，手动填充到 config.json 文件即可
- startPage 为开始抓取页（默认为 0 则抓取最新的历史文章页），pageSize 为每页抓取的数量，fetchPageNums 为总抓取页数，主要用来计算文章的偏移量

##### 运行结果

![截图](https://github.com/Hfimy/wxCrawler/blob/master/image/demo2.png?raw=true)

##### 运行

```
npm install
npm start
```
