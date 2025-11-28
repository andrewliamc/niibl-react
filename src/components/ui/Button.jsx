const sizeStyles = {
  sm: { padding: '8px 14px', fontSize: '14px' },
  md: { padding: '10px 20px', fontSize: '15px' },
  lg: { padding: '12px 22px', fontSize: '16px' },
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  as = 'button',
  className,
  ...props
}) {
  const Component = as
  const classNames = ['btn', `btn-${variant}`, className].filter(Boolean).join(' ')

  return (
    <Component
      className={classNames}
      style={{
        width: fullWidth ? '100%' : 'auto',
        ...sizeStyles[size],
      }}
      {...props}
    >
      {children}
    </Component>
  )
}
