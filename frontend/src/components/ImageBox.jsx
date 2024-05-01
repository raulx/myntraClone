/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import CloudinaryUploadWidget from "./CloudinaryUploaderWidget";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  useDeleteProductImageMutation,
  useSaveProductImageMutation,
} from "@/store";
import { FaTimes } from "react-icons/fa";

const uploadPreset = import.meta.env.VITE_CLOUDINARY_PRESET;
const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD;

function ImageBox({ images, product_id }) {
  const [selectedImage, setSelectedImage] = useState("");
  const [isDelete, setIsDelete] = useState(false);
  const [saveProductImage] = useSaveProductImageMutation();
  const [deleteImage] = useDeleteProductImageMutation();

  useEffect(() => {
    setSelectedImage(() => {
      if (images.length === 0) {
        return "";
      } else {
        return images[0].url;
      }
    });
    setIsDelete(false);
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

  const handleImageDelete = async (imgId, product_id) => {
    const body = { imageId: imgId, productId: product_id };
    try {
      const res = await deleteImage(body);
      console.log(res);
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
                className="w-[60px] h-[80px] bg-cover rounded shadow cursor-pointer border-2 relative"
                onClick={() => setSelectedImage(img.url)}
                style={{
                  backgroundImage: `url(${img.url})`,
                  backgroundPosition: "center",
                }}
              >
                {isDelete && (
                  <div
                    className="rounded-3xl h-[24px] w-[24px] flex justify-center items-center bg-white border p-[2px] absolute translate-x-1/2 -translate-y-1/2 right-0"
                    onClick={() => {
                      handleImageDelete(img.asset_id, product_id);
                    }}
                  >
                    <FaTimes />
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-4">
          {!isDelete ? (
            <button
              className="bg-red-400 text-white rounded-lg p-[4px]"
              onClick={() => setIsDelete(true)}
            >
              Delete Image
            </button>
          ) : (
            <button
              className="bg-green-600 text-white rounded-lg py-[2px]"
              onClick={() => setIsDelete(false)}
            >
              Undo
            </button>
          )}

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
