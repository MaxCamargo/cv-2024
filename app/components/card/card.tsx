import CodeGreen from "@/app/assets/svg/codeGreen";
import styles from "./card.module.css";
import Nextjs from "@/app/assets/svg/next";
import { CardProps } from "./types"
import Remix from "@/app/assets/svg/remix";
import BracketsGreen from "@/app/assets/svg/braketsGreen";
import ReactLogo from "@/app/assets/svg/pureRact";

const Card = ({ title, description, tags, icon, framework, url }: CardProps) => {
  const SelectIcon = (icon: string) => {
    switch (icon) {
      case "CodeGreen":
        return <CodeGreen width={24} height={24} />;
      case "BracketsGreen":
        return <BracketsGreen width={24} height={24} />;
      case "CodeRed":
        return <CodeGreen />;
      default:
        return <CodeGreen />;
    }
  };

  const selectionFramework = (framework: string) => {
    switch (framework) {
      case "Next.js":
        return <Nextjs width={24} height={24} />;
      case "Remix":
        return <Remix width={20} height={20} />;
      case "React":
        return <ReactLogo width={24} height={24} />;
      default:
        return <ReactLogo width={24} height={24} />;
    }
  };

  const tagColor = (tag: string) => {
    switch (tag) {
      case "TypeScript":
        return `${styles.typescript}`;
      case "React":
        return `${styles.react}`;
      case "Css Modules":
        return `${styles.cssModule}`;
      case "Redux":
        return `${styles.redux}`;
      case "Tailwind":
        return `${styles.tailwind}`;
      case "Angular":
        return `${styles.angular}`;    
      case "CSS in JS":
        return `${styles.cssInJS}`;
      default:
        return `${styles.normal}`;
    }
  };

  return (
    <article className={styles.card}>
      <div className={styles.headerCard}>
        <div className={styles.icons}>
          {selectionFramework(framework)}
          {SelectIcon(icon)}
        </div>
        <a href={url} target="_blank" className={styles.headerTitle}>{title}</a>
      </div>
      <div className={styles.descriptionBox}>
        <p className={styles.description}>{description}</p>
        <div className={`${styles.tags}`}>
          {tags.map((tag, index) => (
            <div key={`${tag}-${index}`} className={`${tagColor(tag)}`}>
              <div className={`${styles.tag}`}>
                <div className={`${styles.circle} ${tagColor(tag)}`}></div>
                <p>{tag}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

export default Card;
