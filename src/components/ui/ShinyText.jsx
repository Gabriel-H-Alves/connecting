export function ShinyText({
  children,
  text,
  className = '',
}) {
  const content = children ?? text

  return (
    <span className={`relative inline-block font-medium text-ink ${className}`}>
      {content}
    </span>
  )
}

export default ShinyText
