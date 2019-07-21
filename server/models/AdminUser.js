const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  username: { type: String},
  password: { 
    type: String,
    select: false,
    //使用散列对密码进行加密
    set(val){
      return require('bcrypt').hashSync(val, 12)
    }
  }
})
 
module.exports = mongoose.model('AdminUser', schema)