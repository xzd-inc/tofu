import React from 'react'
import Grandson from './Grandson'

interface IProps {
  parentCount: number
}

export default function Child1(props: IProps) {
  const { parentCount } = props
  return (
    <div style={{ marginLeft: 30, marginTop: 30 }}>
      Child1: {parentCount}
      <Grandson />
    </div>
  )
}
