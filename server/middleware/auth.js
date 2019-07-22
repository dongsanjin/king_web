module.exports = options => {
  const jwt = require('jsonwebtoken')
  const assert = require('http-assert')
  const AdminUser = require('../models/AdminUser')

  return async (req, res, next) => {
    // 获取localStorage.token
    const token = String(req.headers.authorization || '').split(' ').pop()
    assert(token, 401, '没有token')
    // 通过jwt.verify解密token得到id
    const { id } = jwt.verify(token, req.app.get('secret'))
    assert(id, 401, '无效token')
    // 通过id找到用户
    req.user = await AdminUser.findById(id)
    assert(req.user, 401, '请先登录')
    await next()
  }
}