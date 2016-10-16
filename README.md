# rest-server-passport
*Use JSON web tokens for token-based user authentication*
*Use Passport module together with passport-local and passport-local-mongoose for setting up local authentication within your server.*

##jsonwebtoken 函数：
//验证函数，token: 登录成功后的token,secretOrPublicKey:自己设的加密key字符串，最后一个是回调函数
`jwt.verify(token, secretOrPublicKey, [options, callback])`
文档options
* `algorithms`: List of strings with the names of the allowed algorithms. For instance, `["HS256", "HS384"]`.
* `audience`: if you want to check audience (`aud`), provide a value here
* `issuer` (optional): string or array of strings of valid values for the `iss` field.
* `ignoreExpiration`: if `true` do not validate the expiration of the token.
* `ignoreNotBefore`...
* `subject`: if you want to check subject (`sub`), provide a value here
* `clockTolerance`: number of second to tolerate when checking the `nbf` and `exp` claims, to deal with small clock differences among different servers

设置过期时间，可以是`{expiresIn:30}`,`{expiresIn:'30d'}`,
`jwt.sign(payload, secretOrPrivateKey, options, [callback])`

##passport 函数
1.本地认证
  `passport.authenticate('local', function(err, user, info){})`
  passport.authenticate(‘local’)就是中间件，若通过就进入后面的回调函数，并且给res加上res.user，若不通过则默认返回401错误
##HTTP request操作
logIn(user, options, callback)：用login()也可以。作用是为登录用户初始化session。options可设置session为false，即不初始化session，默认为true。
logOut()：别名为logout()。作用是登出用户，删除该用户session。不带参数。
