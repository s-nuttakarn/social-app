import { useRef } from "react";
import Comment from "../../Comment/Comment";
import style from "./posts.module.scss";

export default function Post() {
  const commentRef = useRef();
  const goToComment = () => {
    commentRef.current.focus();
  };
  return (
    <div className={style.postContainer}>
      <div className={style.post}>
        <div className={style.profilePost}>
          <div className={style.avatarContainer}>
            <img
              src={require("../../../shared/assets/camilo-contreras-HgEorvcQGPA-unsplash.jpg")}
              alt="avatar"
            />
          </div>
          <div className={style.postDetail}>
            <span className={style.name}>Full Name</span>
            <span className={style.time}>57 นาที </span>
          </div>
        </div>
        <div className={style.postContent}>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            asperiores necessitatibus aliquam nihil expedita maxime neque
            excepturi nisi deserunt! Autem architecto in sed dolore ducimus,
            dolores quae accusantium maiores quidem tempore debitis distinctio!
            A nihil, facilis distinctio iusto totam et delectus, officia quod
            natus odio ad mollitia ipsam odit! Vitae eligendi ex nostrum
            pariatur facilis inventore eos sapiente quod, at repellendus
            voluptas omnis id consectetur. Doloribus accusamus molestias
            distinctio quos sit, eos deleniti. Illum, dolorem, est saepe id
            quidem aut impedit consequuntur obcaecati perspiciatis quas labore
            velit, ipsum rerum fugiat iste dolore quibusdam architecto! Incidunt
            recusandae dolore optio ad repellendus.
          </span>

          <div className={style.postLiked}>
            <i className="fas fa-heart" />
            <span>FirstName และคนอื่นๆ อีก 3 คน</span>
          </div>
        </div>
        <div className={style.postAction}>
          <div>
            <i className="fas fa-heart" />
            <span>ถูกใจ</span>
          </div>
          <div onClick={goToComment}>
            <i className="fas fa-comment" />
            <span>แสดงความคิดเห็น</span>
          </div>
          {/* <div>
            <i className="fas fa-share" />
            <span>แชร์</span>
          </div> */}
        </div>
        <div className={style.commentList}>
          <Comment />
          <Comment />
        </div>
        <div className={style.comment}>
          <div className={style.avatarContainer}>
            <img
              src={require("../../../shared/assets/camilo-contreras-HgEorvcQGPA-unsplash.jpg")}
              alt="avatar"
            />
          </div>
          <div className={style.inputContainer}>
            <input
              type="text"
              placeholder="แสดงความคิดเห็น..."
              ref={commentRef}
            />
            <button type="button">
              <i className="fas fa-image" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
