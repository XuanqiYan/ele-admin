import axios from 'axios'
import { colorMap, colorTables } from '@/common/common.js'
import color from 'css-color-function' // 基于主色生填充不同程度的白色
import rgbHex from 'rgb-hex' // 转化成16进制
/*
  生成最终的样式
*/
export const generateNewStyle = async (primary) => {
  if (!primary) return
  // 1. 获取所有的element样式  》》 https://unpkg.com/element-plus@1.2.0-beta.3/dist/index.css
  const originalStyle = await getOriginalStyle()

  // 2.分析原始样式 找出需要替换的颜色  做标记
  let newStyle = getStyleTemplate(originalStyle)
  // console.log(newStyle)
  // 3.根据主色生成对应的情景色
  const newColors = generateColors(primary)

  // 4. 在newStyle的模板中将标记都替换成生成的色值
  Object.keys(newColors).forEach((key) => {
    newStyle = newStyle.replace(
      new RegExp('(:|\\s+)' + key, 'g'),
      '$1' + newColors[key]
    )
  })
  return newStyle
}

const getOriginalStyle = async () => {
  const version = require('element-plus/package.json').version
  const url = ` https://unpkg.com/element-plus@${version}/dist/index.css`
  const { data } = await axios.get(url)
  return data
}

const getStyleTemplate = (Style) => {
  Object.keys(colorMap).forEach((key) => {
    const value = colorMap[key]
    Style = Style.replace(new RegExp(key, 'gi'), value)
  })
  return Style
}

export const generateColors = (primary) => {
  // 根据主色 生成对应的情景色
  const colors = {
    primary
  }
  Object.keys(colorTables).forEach((key) => {
    // 将主色应用到color 函数中
    const value = colorTables[key].replace(new RegExp(/primary/g), primary)
    // 生成 16进制的颜色  color('#cccccc' tint(10%))
    colors[key] = '#' + rgbHex(color.convert(value))
  })
  return colors
}

/*
  将生成的样式写入到head标签中
*/

export const writeStyleToHearTag = (newStyle) => {
  const style = document.createElement('style')
  style.innerHTML = newStyle
  document.head.appendChild(style)
}
