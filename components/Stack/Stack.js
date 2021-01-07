import styles from './Stack.module.css'
import cn from 'classnames'

export default function Stack({
  direction = 'column',
  align = 'center',
  justify = 'center',
  fullWidth = true,
  children,
  ...rest
}) {
  return (
    <div 
      className={cn(
        styles.stack, {
          [styles.column]: direction == 'column',
          [styles.row]: direction == 'row',
          [styles.fullWidth]: fullWidth == true,
          [styles.alignCenter]: align == 'center',
          [styles.alignStretch]: align == 'stretch',
          [styles.alignStart]: align == 'start',
          [styles.alignEnd]: align == 'end',
          [styles.justifyStart]: justify == 'start',
          [styles.justifyEnd]: justify == 'end',
          [styles.justifyCenter]: justify == 'center',
          [styles.justifyAround]: justify == 'around',
          [styles.justifyBetween]: justify == 'between',
          [styles.justifyEven]: justify == 'even',
        }
      )}
      {...rest}
    >
      { children }
    </div>
  )
}