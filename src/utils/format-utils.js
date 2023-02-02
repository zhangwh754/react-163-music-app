/**
 * 对数字进行格式化
 * @param {number} count
 */
export function getCount(count) {
  if (count < 0) return
  if (count < 10000) {
    return count
  } else if (Math.floor(count / 10000) < 10000) {
    return Math.floor(count / 1000) / 10 + '万'
  } else {
    return Math.floor(count / 10000000) / 10 + '亿'
  }
}

export function getSizeImage(imgUrl, size) {
  return `${imgUrl}?param=${size}x${size}`
}

export function formatDate(time, fmt) {
  let date = new Date(time)

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str))
    }
  }
  return fmt
}

function padLeftZero(str) {
  return ('00' + str).substr(str.length)
}

const parseExp = /\[([0-9]{2}):([0-9]{2})\.([0-9]{2,3})\]/
/**
 * @description: 对歌词进行处理
 * @return: [{time, text}, {time, text}]
 */
export const handleLyric = str => {
  const arr = str.split('\n')

  const lyricList = []

  if (arr[arr.length - 1] === '') arr.pop()

  for (const line of arr) {
    if (line) {
      const result = parseExp.exec(line)
      if (!result) continue
      const time1 = result[1] * 60 * 1000
      const time2 = result[2] * 1000
      const time3 = result[3].length > 2 ? result[3] * 1 : result[3] * 1000
      // 当前歌曲播放的总时长(毫秒)
      const time = time1 + time2 + time3
      const text = line.replace(parseExp, '').trim()
      lyricList.push({ time, text })
    }
  }

  return lyricList
}
