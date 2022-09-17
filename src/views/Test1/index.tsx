import React, { useState } from 'react'
import { Button } from 'antd'

/* debugger */

export default function Test1() {
  const [count, setCount] = useState(1)
  return (
    <div>
      <Button
        onClick={() => {
          setCount(prev => ++prev)
        }}
      >
        {count}
      </Button>
    </div>
  )
}