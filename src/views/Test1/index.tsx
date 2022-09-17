import React, { useState } from 'react'
import { Button } from 'antd'

/**
 * debugger
 * key，表单用什么key，自己如何生成key？
 * array 生成方式
*/

const name1 = '小豆腐'
const name2 = '小熊猫'

const getList = (num: number) => {
  return Array.from({ length: num }).map((_, i) => {
    return i % 2 ? `${name1}&${name2}` : `${name2}&${name1}`
  })
}

export default function Test1() {
  const [count, setCount] = useState(1)
  return (
    <div>
      <Button
        onClick={() => {
          // 想要实现 count + 1
        }}
      >
        {count}
      </Button>
      {
        getList(count).map((v) => {
          return (
            <div>
              {v}
            </div>
          )
        })
      }
    </div>
  )
}
