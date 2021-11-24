import i18n from '@/i18n/index.js'

export const passwordValidate = () => {
  return (rule, value, callback) => {
    // 获取到输入的值做验证 至少是6位
    if (value.length < 6) {
      callback(new Error(i18n.global.t('msg.login.passwordRule'))) //  $t t global.t
    } else {
      callback() // ok
    }
  }
}

export const usernameValidate = () => {
  return (rule, value, callback) => {
    if (value.length <= 0) {
      callback(new Error(i18n.global.t('msg.login.usernameRule'))) //   $t t global.t
    } else {
      callback() // ok
    }
  }
}
