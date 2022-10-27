import React, { useState } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

/* 学习组件传值 props，context (扩展：bus) */
/**
 * Grandson 组件如何改index.tsx组件的值？
 * Child2 如何更改 Child1 组件的值？
 * Child2 如何更改 index.tsx 组件的值
 */

export default function Test3() {
  const [count, setCount] = useState(1)
  return (
    <div>
      主组件：{count}
      <Child1 parentCount={count} />
      <Child2 />
    </div>
  )
}
