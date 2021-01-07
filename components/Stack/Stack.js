import styles from './Stack.module.css'
import cn from 'classnames'

export default function Stack({
  direction = 'column',
  children,
  ...rest
}) {
  return (
    <div 
      className={cn(
        styles.stack, {
          [styles.column]: direction == 'column',
          [styles.row]: direction == 'row',
        }
      )}
      {...rest}
    >
      { children }
    </div>
  )
}