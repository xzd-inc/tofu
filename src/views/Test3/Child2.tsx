import React, { useState } from 'react'
import { Button } from 'antd'

export default function Child2() {
  const [count, setCount] = useState(1)
  return (
    <div style={{ marginLeft: 30, marginTop: 30 }}>
      Child2: {count}
      <Button
        onClick={() => {
          setCount(prev => ++prev)
        }}
      >
        Child2 增加值
      </Button>
    </div>
  )
}