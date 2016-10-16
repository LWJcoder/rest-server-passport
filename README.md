# rest-server-passport
REST API ,passport to authentiacate


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
  
