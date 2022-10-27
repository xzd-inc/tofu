import React, { useState } from 'react'
import { Button } from 'antd'

export default function Grandson() {
  const [count, setCount] = useState(1)
  return (
    <div style={{ marginLeft: 50 }}>
      Grandson: {count}
      <Button
        onClick={() => {
          setCount((prev) => ++prev)
        }}
      >
        Grandson 增加值
      </Button>
    </div>
  )
}
