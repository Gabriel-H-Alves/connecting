export function SpotlightBackground({ children, className = '' }) {
  return (
    <div className={`relative w-full overflow-hidden bg-paper ${className}`}>
      <svg className="hidden" aria-hidden="true">
        <filter id="noiseFilter" />
      </svg>
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  )
}

export default SpotlightBackground
