// components/OptimizedImage.tsx
import NextImage from 'next/image'
import { useState } from 'react'
import { OptimizedImageProps } from '@/types/components'
import LoadingSpinner from './ui/LoadingSpinner'

export default function OptimizedImage({
  src,
  alt,
  fallbackSrc = '/static/images/placeholder.png',
  showLoader = true,
  className = '',
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  const handleLoad = () => setIsLoading(false)
  const handleError = () => {
    setIsLoading(false)
    setError(true)
  }

  return (
    <div className={`relative ${className}`}>
      {isLoading && showLoader && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
          <LoadingSpinner size="sm" />
        </div>
      )}

      <NextImage
        src={error ? fallbackSrc : src}
        alt={alt}
        onLoad={handleLoad}
        onError={handleError}
        className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        {...props}
      />
    </div>
  )
}
