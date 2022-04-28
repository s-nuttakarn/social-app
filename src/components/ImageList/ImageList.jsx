import style from "./image-list.module.scss";

export default function ImageList({ images = [], removeImage, videos = [] }) {
  const renderImage = (image, id) => {
    const { type } = image;
    const imageType = type.split("/");
    const isVideo = imageType.includes("video");
    const isImage = imageType.includes("image");
    return (
      <div className={style.imageContainer} key={id}>
        <button type="button" onClick={() => removeImage(id)}>
          <i className="fas fa-times" />
        </button>
        <div className={style.container}>
          {isImage && <img src={URL.createObjectURL(image)} alt="images" />}
          {isVideo && (
            <video>
              <source src={URL.createObjectURL(image)} />
            </video>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className={style.imageList}>
      <div className={style.imagePreview}>
        {[...images, ...videos].map(renderImage)}
      </div>
    </div>
  );
}
