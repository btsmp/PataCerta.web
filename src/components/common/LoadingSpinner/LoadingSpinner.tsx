const sizeClasses = {
  xs: 'loading-xs',
  sm: 'loading-sm',
  md: 'loading-md',
  lg: 'loading-lg',
}
type LoadingSpinnerProps = {
  size?: keyof typeof sizeClasses
}

export function LoadingSpinner({ size = 'md' }: LoadingSpinnerProps) {
  const sizeClass = sizeClasses[size] || sizeClasses.md
  return <span className={`loading loading-spinner ${sizeClass}`}></span>
}
