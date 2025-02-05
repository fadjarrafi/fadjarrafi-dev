'use client'

import { useEffect, useState } from 'react'
import Loading from './loading'

export default function InitialLoadingProvider({ children }) {
  const [isInitialLoad, setIsInitialLoad] = useState(true)

  useEffect(() => {
    setIsInitialLoad(false)
  }, [])

  if (isInitialLoad) return <Loading />
  return children
}
