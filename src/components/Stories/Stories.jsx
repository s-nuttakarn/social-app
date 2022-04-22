import StoryCard from "./StoryCard/StoryCard";
import style from "./stories.module.scss";
import SVGArrow from "../../shared/icons/right-svgrepo-com.svg";
export default function Stories({ items = [] }) {
  return (
    <div className={style.listContainer}>
      <div className={style.storyList}>
        {items.map(StoryCard)}
        <div className={style.moreStories}>
          <img src={SVGArrow} alt="arrow-right" />
        </div>
      </div>
    </div>
  );
}
