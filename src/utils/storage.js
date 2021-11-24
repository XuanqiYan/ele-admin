// 存储数据
export const setItem = (key, value) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }

  window.localStorage.setItem(key, value)
}

// 获取数据
export const getItem = (key) => {
  const value = window.localStorage.getItem(key)
  try {
    // 是一个对象的字符串
    return JSON.parse(value)
  } catch (err) {
    // 不是一个对象的字符串
    return value
  }
}

// 删除 单个
export const deleteItem = (key) => {
  window.localStorage.removeItem(key)
}

// 清空所有
export const clearItem = () => {
  window.localStorage.deleteItem()
}
