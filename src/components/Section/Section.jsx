import style from "./section.module.scss";
export default function Section({ children }) {
  return <div className={style["section-container"]}>{children}</div>;
}
