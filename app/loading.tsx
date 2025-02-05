'use client'

import { useEffect, useState } from 'react'
import Logo from '@/data/logo.svg'

export default function Loading() {
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsExiting(true), 2500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-inherit transition-opacity duration-500 ${
        isExiting ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
    >
      <div className="relative flex flex-col items-center space-y-8">
        <div className="animate-fade-in opacity-0">
          <Logo className="h-16 w-16" />
        </div>

        <div className="flex flex-col items-center space-y-4">
          <div className="h-2 w-32 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
            <div className="animate-loading-bar h-full w-full bg-lime-500 dark:bg-lime-400" />
          </div>
        </div>
      </div>
    </div>
  )
}
