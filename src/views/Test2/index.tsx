import React from 'react'
import useRequest from './useRequest'

/* 自定义hook */
/**
 * 思考：如何实现一个useSetTimeout，达到页面数字每秒 +1 效果
*/

export default function Test2() {
  const list = useRequest()
  return (
    <div>
      {
        list.map((v, i) => {
          return (
            <div key={i}>
              {v.name}爱{v.food}
            </div>
          )
        })
      }
    </div>
  )
}