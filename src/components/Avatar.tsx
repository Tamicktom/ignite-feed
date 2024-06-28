
import styles from "./Avatar.module.css";

export type AvatarProps = {
  src: string;
  hasBorder?: boolean;
}

export function Avatar(props: AvatarProps) {

  const hasBorder = props.hasBorder !== false; // Default value is true
  const borderClass = hasBorder ? styles.avatarWithBorder : styles.avatar;

  return (
    <img
      src={props.src}
      className={borderClass}
      alt=""
    />
  );
}