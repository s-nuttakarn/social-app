import { useState } from "react";
import style from "./create-post.module.scss";
import CreateModal from "./CreateModal/CreateModal";
export default function CreatePost() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const initialFiles = {
    images: [],
    videos: [],
    text: "",
  };
  const [files, setFiles] = useState(initialFiles);
  const closeCreateModal = () => setShowCreateModal(false);
  const openCreateModal = () => setShowCreateModal(true);

  const handleFileChange = (e) => {
    const { name, files: selectFiles } = e.target;
    setFiles({ ...files, [name]: Array.from(selectFiles) });
    openCreateModal();
  };

  const clearFiles = () => {
    setFiles({...initialFiles});
  };

  return (
    <div className={style.createPostContainer}>
      <CreateModal
        show={showCreateModal}
        onClose={closeCreateModal}
        defaultValue={files}
        clearFiles={clearFiles}
      />
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
          <label
            htmlFor="images-create-post"
            className={`${style.item} ${style.picture}`}
          >
            <i className="fas fa-image"></i>
            <span>รูปภาพ</span>
            <input
              type="file"
              id="images-create-post"
              onChange={handleFileChange}
              name="images"
              multiple
              hidden
              accept="image/*"
            />
          </label>
          <label
            htmlFor="videos-create-post"
            className={`${style.item} ${style.video}`}
          >
            <i className="fas fa-video"></i>
            <span>วีดีโอ</span>
            <input
              type="file"
              id="videos-create-post"
              name="videos"
              onChange={handleFileChange}
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
