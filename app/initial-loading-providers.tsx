// app/initial-loading-providers.tsx
'use client'

import { useEffect, useState, ReactNode } from 'react'
import Loading from './loading'

interface InitialLoadingProviderProps {
  children: ReactNode
}

export default function InitialLoadingProvider({ children }: InitialLoadingProviderProps) {
  const [isInitialLoad, setIsInitialLoad] = useState(true)

  useEffect(() => {
    setIsInitialLoad(false)
  }, [])

  if (isInitialLoad) return <Loading />
  return <>{children}</>
}
