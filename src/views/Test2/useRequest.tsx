import React, { useEffect, useState } from 'react'

/* 获取远程请求的接口 */
const getList = async () => {
  const data = await Promise.resolve([
    { name: '小豆腐', food: '大米' },
    { name: '小熊猫', food: '馒头' },
  ])
  return data
}

export default function useRequest() {
  const [list, setList] = useState([] as Array<Record<'name' | 'food', string>>)

  useEffect(() => {
    // 这儿漏了什么?
    getList()
      .then(res => {
        setList(res)
      })
  }, [])

  return list
}