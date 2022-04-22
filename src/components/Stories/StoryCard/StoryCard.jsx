import style from "./story-card.module.scss";

export default function StoryCard(item, key) {
  return (
    <div className={style.storyCard} key={key}>
      <div className={style.logoContainer}>
        <img
          src={require("../../../shared/assets/camilo-contreras-HgEorvcQGPA-unsplash.jpg")}
          alt="logo-img"
        />
      </div>
      <div className={style.imageContainer}>
        <img
          src={require("../../../shared/assets/kristaps-ungurs-jY7v7Zw2aYM-unsplash.jpg")}
          alt="story-img"
        />
      </div>
      <span className={style.storyName}>Full Name</span>
    </div>
  );
}
