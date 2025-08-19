// components/MermaidDiagram.tsx
'use client'

import { useEffect, useRef, useState } from 'react'

interface MermaidDiagramProps {
  chart: string
  className?: string
}

export default function MermaidDiagram({ chart, className = '' }: MermaidDiagramProps) {
  const chartRef = useRef<HTMLDivElement>(null)
  const modalChartRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [renderedSVG, setRenderedSVG] = useState('')

  useEffect(() => {
    const renderChart = async () => {
      if (chartRef.current && chart) {
        try {
          // Dynamic import to avoid SSR issues
          const mermaid = (await import('mermaid')).default

          // Initialize mermaid with simplified config
          mermaid.initialize({
            startOnLoad: false,
            theme: 'default',
            securityLevel: 'loose',
            fontFamily: 'inherit',
            fontSize: 14,
            themeVariables: {
              background: '#ffffff',
              primaryColor: '#0ea5e9',
              primaryTextColor: '#1f2937',
              primaryBorderColor: '#e5e7eb',
              lineColor: '#6b7280',
            },
          })

          // Clear previous content
          chartRef.current.innerHTML = ''

          // Generate unique ID for this diagram
          const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`

          // Render the diagram
          const { svg } = await mermaid.render(id, chart)

          if (chartRef.current) {
            chartRef.current.innerHTML = svg
            setRenderedSVG(svg)
            setIsLoaded(true)
          }
        } catch (error) {
          console.error('Error rendering Mermaid diagram:', error)
          if (chartRef.current) {
            chartRef.current.innerHTML = `
              <div class="p-4 bg-red-50 border border-red-200 rounded-lg">
                <p class="text-red-700 text-sm">Error rendering diagram</p>
              </div>
            `
          }
        }
      }
    }

    renderChart()
  }, [chart])

  // Handle modal open
  const handleDiagramClick = () => {
    setIsModalOpen(true)
  }

  // Handle modal close
  const handleModalClose = () => {
    setIsModalOpen(false)
  }

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false)
      }
    }

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'auto'
    }
  }, [isModalOpen])

  // Update modal content when SVG changes
  useEffect(() => {
    if (isModalOpen && modalChartRef.current && renderedSVG) {
      // Create a larger version of the SVG for the modal
      const tempDiv = document.createElement('div')
      tempDiv.innerHTML = renderedSVG
      const svgElement = tempDiv.querySelector('svg')

      if (svgElement) {
        // Remove existing width/height and make it responsive
        svgElement.removeAttribute('width')
        svgElement.removeAttribute('height')
        svgElement.style.width = '100%'
        svgElement.style.height = 'auto'
        svgElement.style.maxWidth = '1200px'
        svgElement.style.maxHeight = '800px'

        modalChartRef.current.innerHTML = tempDiv.innerHTML
      }
    }
  }, [isModalOpen, renderedSVG])

  return (
    <>
      <div className={`mermaid-container ${className}`}>
        {!isLoaded && (
          <div className="flex items-center justify-center rounded-lg bg-gray-50 p-8">
            <div className="h-6 w-6 animate-spin rounded-full border-b-2 border-blue-500"></div>
            <span className="ml-2 text-sm text-gray-600">Loading diagram...</span>
          </div>
        )}
        <div
          ref={chartRef}
          className={`mermaid-diagram ${
            !isLoaded ? 'hidden' : ''
          } cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500`}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            padding: '16px',
          }}
          onClick={handleDiagramClick}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              handleDiagramClick()
            }
          }}
          tabIndex={0}
          role="button"
          aria-label="Click to zoom in on diagram"
        />
      </div>

      {/* Modal for zoomed view */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
          onClick={handleModalClose}
          role="dialog"
          aria-modal="true"
          aria-label="Zoomed diagram view"
        >
          <div
            className="relative h-full max-h-none w-full max-w-none overflow-hidden rounded-lg bg-white"
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '60vw',
              height: '65vh',
            }}
          >
            {/* Close button */}
            <button
              onClick={handleModalClose}
              className="absolute right-4 top-4 z-10 rounded-full bg-gray-100 p-2 transition-colors hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Close dialog"
            >
              <svg
                className="h-6 w-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Zoomed diagram */}
            <div
              ref={modalChartRef}
              className="overflow-auto p-16"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#ffffff',
                minHeight: '600px',
                minWidth: '800px',
              }}
            />

            {/* Instructions */}
            <div className="border-t border-gray-200 bg-gray-50 p-4 text-center">
              <p className="text-sm text-gray-600">
                Press <kbd className="rounded bg-gray-200 px-2 py-1 text-xs">ESC</kbd> or click
                outside to close
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
