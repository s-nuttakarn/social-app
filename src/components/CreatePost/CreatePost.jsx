import { useState } from "react";
import style from "./create-post.module.scss";
import CreateModal from "./CreateModal/CreateModal";

export default function CreatePost() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const closeCreateModal = () => setShowCreateModal(false);
  const openCreateModal = () => setShowCreateModal(true);
  return (
    <div className={style.createPostContainer}>
      <CreateModal show={showCreateModal} onClose={closeCreateModal} />
      <div className={style.cardToPost}>
        <div className={style.clickToInput}>
          <div className={style.avatarContainer}>
            <img
              src={require("../../shared/assets/camilo-contreras-HgEorvcQGPA-unsplash.jpg")}
              alt="avatar"
            />
          </div>
          <div className={style.createPostTitle} onClick={openCreateModal}>
            <span>คุณคิดอะไรอยู่ FirstName</span>
          </div>
        </div>
        <div className={style.divider} />
        <div className={style.moreCreatePost}>
          <label htmlFor="image" className={`${style.item} ${style.picture}`}>
            <i className="fas fa-image"></i>
            <span>รูปภาพ</span>
            <input
              type="file"
              id="image"
              name="image"
              multiple
              hidden
              accept="image/*"
            />
          </label>
          <label htmlFor="video" className={`${style.item} ${style.video}`}>
            <i className="fas fa-video"></i>
            <span>วีดีโอ</span>
            <input
              type="file"
              id="video"
              name="video"
              multiple
              hidden
              accept="video/*"
            />
          </label>
        </div>
      </div>
    </div>
  );
}
