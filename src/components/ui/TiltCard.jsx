export function TiltCard({
  children,
  className = '',
}) {
  return (
    <div className={`crop bg-paper-2 border border-rule p-6 ${className}`}>
      {children}
    </div>
  )
}

export default TiltCard
