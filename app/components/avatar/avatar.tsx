import styles from "./avatar.module.css";
import emoji from "../../assets/images/emoji-max.png";
import MaxLogo from "../../assets/images/max.svg"
import Image from 'next/image';

const MaxAvatar = () => {
  return (
    <div className={styles.avatarWrapper}>
      <div className={styles.avatar}>
        <div className={styles.imgContainer}>
          <img className={styles.img} src={emoji.src} alt="max camargo" />
        </div>
      </div>
      <div>
      <Image
        priority
        src={MaxLogo}
        alt="Follow us on Twitter"
        />
      </div>
    </div>
  );
};

export default MaxAvatar;
