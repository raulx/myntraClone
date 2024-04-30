import { useState } from "react";

const dummyImages = [
  {
    alt: "img1",
    url: "https://plus.unsplash.com/premium_photo-1666900440561-94dcb6865554?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tfGVufDB8fDB8fHww",
  },
  {
    alt: "img2",
    url: "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fHww",
  },
  {
    alt: "img3",
    url: "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tfGVufDB8fDB8fHww",
  },
  {
    alt: "img4",
    url: "https://images.unsplash.com/photo-1508138221679-760a23a2285b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZG9tfGVufDB8fDB8fHww",
  },
  {
    alt: "img5",
    url: "https://images.unsplash.com/photo-1509281373149-e957c6296406?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFuZG9tfGVufDB8fDB8fHww",
  },
  {
    alt: "img6",
    url: "https://plus.unsplash.com/premium_photo-1664392248318-4e1d9361726e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D",
  },
];

function ImageBox() {
  const [selectedImage, setSelectedImage] = useState({
    alt: "",
    url: "",
  });

  return (
    <div className="bg-white p-4 rounded flex gap-4 items-center border-2 border-[#ffc9ef]">
      <div className="flex flex-col gap-4 items-center">
        <div className="flex flex-wrap w-[140px] gap-2 items-center justify-center">
          {dummyImages.map((img) => {
            return (
              <div
                key={img.alt}
                className="w-[60px] h-[50px] bg-contain rounded shadow cursor-pointer"
                onClick={() => setSelectedImage(img)}
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
          <button className="bg-green-400 text-white rounded-lg py-[4px]">
            Upload more Images
          </button>
        </div>
      </div>
      <div
        className="w-[450px] h-[300px] border-2 bg-contain"
        style={{
          backgroundImage: `url(${selectedImage.url})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
    </div>
  );
}

export default ImageBox;
