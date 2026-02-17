'use client'

import * as React from 'react'
import { DirectionProvider as RadixDirectionProvider, useDirection } from '@radix-ui/react-direction'

export function DirectionProvider({ dir = 'ltr', children }) {
  return (
    <RadixDirectionProvider dir={dir}>
      {children}
    </RadixDirectionProvider>
  )
}

export { useDirection }
