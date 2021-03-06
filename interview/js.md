  

### 浏览器事件循环机制
  1. js任务分为同步任务和异步任务
  2. 同步任务:会直接进入js的主线程执行,形成一个执行栈,依次执行
  3. 异步任务不进入主线程,注册回调函数后进入任务队列中,等执行栈中后为空后,进行下一个同步任务
  4. 异步任务分为宏任务和微任务


### http
  http 改进：
0.9：
    功能简陋，只有一个 GET 请求命令，只支持纯文本内容，该版本已经过时。

1.0：
 - 增加了内容的发送格式：传输文字、图像、视频、二进制文件等。
 - 除了 GET 命令，引入了 POST 命令和 HEAD 命令。
 - 通信增加了头部信息（HTTP header），用来描述一些元数据。
 - 使用 if-Modified-Since 、Expires 作为缓存失效的标准。
 - 不支持断点续传，也就是说，每次都会传送全部的页面和数据。

1.1：http1.1 是目前最为主流的 http 协议版本。
 - 引入了持久连接，即 tcp 连接连接默认不关闭，可以被多个请求复用，不用声明 Connection：keep-alive。长连接的连接时常可以通过 keep-alive 来设置。
 - 引入了管道机制，同一个 tcp 连接中，客户端可以同时发送多个请求。
 - 增加了一些缓存控制标头控制缓存失效
 - 支持断点续传，通过请求头中的 Range 字段来设置。
 - 新增 PUT，DELETE 等方法。

2.0:
 - 二进制分帧
 - 头部压缩: HTTP 1.1版本会出现 User-Agent、Cookie、Accept、Server、Range 等字段可能会占用几百甚至几千字节，而 Body 却经常只有几十字节，所以导致头部偏重。HTTP 2.0 使用 HPACK 算法进行压缩。
 - 多路复用：复用 tcp 连接，在一个连接中，客户端和浏览器可以同时发送多个请求或回应，且不用按顺序--对应，这样解决了对头阻塞的问题。
 - 请求优先级，可以设置数据帧的优先级，让服务端优先处理重要资源，优化用户体验。