import { useEffect, useState } from "react";
import Modal from "../../Model/Modal";
import style from "./create-modal.module.scss";
export default function CreateModal({
  show = false,
  onClose = function () {},
}) {
  const modalStyle = {
    maxWidth: "500px",
    overflow: "hidden",
  };

  const initialState = {
    text: "",
    images: [],
  };

  const [post, setPost] = useState(initialState);
  const [disabled, setDisabled] = useState(true);
  const closeModal = () => {
    console.log("close", initialState);
    setPost({ ...initialState });
    onClose();
  };
  const removeImage = (id) => {
    const images = [...post.images];
    images.splice(id, 1);
    setPost({ ...post, images });
  };
  const renderImage = (image, id) => {
    return (
      <div className={style.imageContainer} key={id}>
        <button type="button" onClick={() => removeImage(id)}>
          <i className="fas fa-times" />
        </button>
        <img src={URL.createObjectURL(image)} alt="images" />
      </div>
    );
  };
  useEffect(() => {
    setDisabled(post.text.length <= 0 && post.images.length <= 0);
  }, [post]);

  const handleChange = (e) => {
    const { name, files, value } = e.target;
    const arrayFiles = Array.from(files ?? []);
    const handleValue = arrayFiles.length > 0 ? arrayFiles : value;
    setPost({ ...post, [name]: handleValue });
  };


  const submitPost = (e) => {
    console.log(post);
  };
  return (
    <Modal
      show={show}
      onClose={onClose}
      modalStyle={modalStyle}
      closeButton={false}
    >
      <div className={style.createPostModal}>
        <div className={style.modalHeader}>
          <span>สร้างโพสต์</span>
          <button type="button" onClick={closeModal}>
            <i className="fas fa-times" />
          </button>
        </div>
        <div className={style.createPostContainer}>
          <div className={style.createPostModalHeader}>
            <div className={style.avatarContainer}>
              <img
                src={require("../../../shared/assets/camilo-contreras-HgEorvcQGPA-unsplash.jpg")}
                alt="avatar"
              />
            </div>
            <div>
              <span>Full Name</span>
            </div>
          </div>
          <div className={style.inputContainer}>
            <div className={style.input}>
              <textarea
                name="text"
                onChange={handleChange}
                value={post.text}
                placeholder="คุณกำลังคิดอะไรอยู่ FirstName"
                className={style.inputText}
              />
              <label htmlFor="images">
                <i className="fas fa-image" />
              </label>
              <input
                type="file"
                multiple
                name="images"
                id="images"
                accept="image/*"
                onChange={handleChange}
                hidden
              />
            </div>
            <div className={style.imagePreview}>
              {post.images.map(renderImage)}
            </div>
            <button
              type="button"
              className={`${style.submitPost} ${disabled && style.disabled}`}
              disabled={disabled}
              onClick={submitPost}
            >
              โพสต์
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
