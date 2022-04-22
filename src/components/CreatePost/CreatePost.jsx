import style from "./create-post.module.scss";

export default function CreatePost() {
  return (
    <div className={style.createPostContainer}>
      <div className={style.cardToPost}>
        <div className={style.clickToInput}>
          <div className={style.avatarContainer}>
            <img
              src={require("../../shared/assets/camilo-contreras-HgEorvcQGPA-unsplash.jpg")}
              alt="avatar"
            />
          </div>
          <div className={style.createPostTitle}>
            <span>คุณคิดอะไรอยู่ FirstName</span>
          </div>
        </div>
        <div className={style.divider} />
        <div className={style.moreCreatePost}>
          <div className={`${style.item} ${style.picture}`}>
            <i className="fas fa-image"></i>
            <span>รูปภาพ</span>
          </div>
          <div className={`${style.item} ${style.video}`}>
            <i className="fas fa-video"></i>
            <span>วีดีโอ</span>
          </div>
        </div>
      </div>
    </div>
  );
}
