export function ShinyText({
  children,
  text,
  className = '',
  speed = 3,
}) {
  const content = children ?? text

  return (
    <span
      className={`relative inline-block bg-[length:250%_100%] bg-clip-text text-transparent select-none font-semibold ${className}`}
      style={{
        backgroundImage:
          'linear-gradient(110deg, #71717A 0%, #A1A1AA 30%, #FFFFFF 50%, #A1A1AA 70%, #71717A 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        animation: `shinySweep ${speed}s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
      }}
    >
      {content}
    </span>
  )
}

export default ShinyText
