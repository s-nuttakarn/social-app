import style from "./comment.module.scss";

export default function Comment() {
  return (
    <div className={style.commentContainer}>
      <div className={style.avatarContainer}>
        <img
          src={require("../../shared/assets/camilo-contreras-HgEorvcQGPA-unsplash.jpg")}
          alt="avatar"
        />
      </div>
      <div>
        <div className={style.commentText}>
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint,
            quam. Facilis, quaerat, autem similique officia ad commodi ipsa
            cupiditate error unde repudiandae provident saepe totam quos optio
            quis incidunt! Laudantium sint eveniet modi maxime? Repudiandae!
          </span>
        </div>
        <div className={style.liked}>
          <span>ถูกใจ</span>
        </div>
      </div>
    </div>
  );
}
