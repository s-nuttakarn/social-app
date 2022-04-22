import style from "./postlist.module.scss";
import Post from "./Posts/Post";

export default function PostList() {
  return (
    <div className={style.postListContainer}>
      <div className={style.postList}>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
      </div>
    </div>
  );
}
