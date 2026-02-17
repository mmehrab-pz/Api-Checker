import React from 'react'
import Header from './header/Header'
import Send from './send/Send'

export default function Checker() {
  return (
    <div className={'h-175 w-[55%] rounded-[14px] border border-border'}>
      <Header />
      <Send />
    </div>
  )
}
