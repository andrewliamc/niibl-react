export default function Badge({ variant = 'sage', children }) {
  const classNames = ['badge', `badge-${variant}`].join(' ')
  return <span className={classNames}>{children}</span>
}
