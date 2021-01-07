import styles from "./LinkRow.module.css"

export default function LinkRow({ href, children, ...rest }) {
  return (
    <a className={styles.linkRow} href={href} {...rest}>{ children }</a>
  );
}