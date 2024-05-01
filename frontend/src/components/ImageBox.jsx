/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import CloudinaryUploadWidget from "./CloudinaryUploaderWidget";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useSaveProductImageMutation } from "@/store";

const uploadPreset = import.meta.env.VITE_CLOUDINARY_PRESET;
const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD;

function ImageBox({ images, product_id }) {
  const [selectedImage, setSelectedImage] = useState("");
  const [saveProductImage] = useSaveProductImageMutation();
  useEffect(() => {
    setSelectedImage(() => {
      if (images.length === 0) {
        return "";
      } else {
        return images[0].url;
      }
    });
  }, [images]);

  const handleImageUploadDone = async (result) => {
    const data = { image_info: result.info, product_id: product_id };
    //save the image address and few details in database

    try {
      await saveProductImage(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-white p-4 rounded flex gap-4 items-center border-2 border-[#ffc9ef]">
      <div className="flex flex-col gap-4 items-center">
        <div className="flex flex-wrap w-[140px] gap-2 items-center justify-center">
          {images.map((img) => {
            return (
              <div
                key={img.asset_id}
                className="w-[60px] h-[80px] bg-cover rounded shadow cursor-pointer"
                onClick={() => setSelectedImage(img.url)}
                style={{
                  backgroundImage: `url(${img.url})`,
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
            onUploadDone={handleImageUploadDone}
          />
        </div>
      </div>
      <ScrollArea className="w-[450px] h-[400px] border-2">
        <img src={selectedImage} className="mx-auto" />
        <ScrollBar />
      </ScrollArea>
    </div>
  );
}

export default ImageBox;
