/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import CloudinaryUploadWidget from "./CloudinaryUploaderWidget";

const uploadPreset = import.meta.env.VITE_CLOUDINARY_PRESET;
const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD;

function ImageBox({ images }) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  useEffect(() => {
    setSelectedImage(images[0]);
  }, [images]);

  const handleImageUpload = async (result) => {
    console.log(result);
  };

  return (
    <div className="bg-white p-4 rounded flex gap-4 items-center border-2 border-[#ffc9ef]">
      <div className="flex flex-col gap-4 items-center">
        <div className="flex flex-wrap w-[140px] gap-2 items-center justify-center">
          {images.map((img) => {
            return (
              <div
                key={img}
                className="w-[60px] h-[50px] bg-cover rounded shadow cursor-pointer"
                onClick={() => setSelectedImage(img)}
                style={{
                  backgroundImage: `url(${img})`,
                  backgroundPosition: "center",
                }}
              />
            );
          })}
        </div>
        <div className="flex flex-col gap-4">
          <button className="bg-red-400 text-white rounded-lg py-[2px]">
            Delete Image
          </button>
          <CloudinaryUploadWidget
            uwConfig={{
              uploadPreset,
              cloudName,
              folder: "/ecommerce_assets/ProductImages",
            }}
            onUploadDone={handleImageUpload}
          />
        </div>
      </div>
      <div
        className="w-[450px] h-[300px] border-2 bg-contain"
        style={{
          backgroundImage: `url(${selectedImage})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
    </div>
  );
}

export default ImageBox;
