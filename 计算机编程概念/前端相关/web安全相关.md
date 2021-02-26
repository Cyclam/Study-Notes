### XSS(Cross Site Scripting)

### CSRF(Cross-site request forgery)

#### 攻击过程

受害者必须依次完成两个步骤：
1. 登录受信任网站A，并在本地生成Cookie
2. 在不退出A的情况下，访问危险网站B

#### 预防手段

1. 正确使用GET,POST和Cookie
2. 在非GET请求中增加`伪随机数`

### 中间人攻击

### SQL注入