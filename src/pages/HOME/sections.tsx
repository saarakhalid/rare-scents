import React, { useState } from "react";
import { Icon } from "@iconify/react";

const Gallery: React.FC = () => {
  const places = [
    { src: "istanbul.jpeg", name: "Istanbul", desc: "Famous for Hagia Sophia & Bosphorus views." },
    { src: "Italy .jpeg", name: "Italy", desc: "Known for Rome, Venice & world-class cuisine." },
    { src: "portugal2.jpeg", name: "Portugal", desc: "Scenic coastlines & rich history." },
    { src: "zanzi.jpeg", name: "Zanzibar", desc: "Tropical paradise with stunning beaches." },
    { src: "greece.jpeg", name: "Greece", desc: "Santorini sunsets & ancient ruins." },
    { src: "nai.jpeg", name: "Nairobi", desc: "Safari hub & vibrant urban culture." },
  ];

  return (
    <div className="mt-20 min-h-screen bg-white p-14">
      {/* Search bar */}
      <div className="flex justify-end mb-6">
        <div className="flex items-center bg-[#2f5748] text-white rounded-md overflow-hidden">
          {/* <input
            type="text"
            placeholder="search.."
            className="px-4 py-2 outline-none bg-[#2f5748] text-white placeholder-gray-200"
          /> */}
          {/* 
          <button className="px-3">
            <Icon icon="mdi:magnify" className="text-white text-xl" />
          </button>
          */}
        </div>
      </div>

      {/* Title row */}
      <div className="flex justify-between items-center mb-8 max-w-6xl mx-auto">
        <h2 className="text-2xl font-medium">POPULAR PLACES</h2>
        <a href="#" className="text-[#2f5748] font-medium hover:underline">
          See All
        </a>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {places.map((place, index) => (
          <ImageCard key={index} src={place.src} name={place.name} desc={place.desc} />
        ))}
      </div>
    </div>
  );
};

interface CardProps {
  src: string;
  name: string;
  desc: string;
}

const ImageCard: React.FC<CardProps> = ({ src, name, desc }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  const toggleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  return (
    <div
      className="bg-white shadow-xl shadow-gray-400 
                 hover:shadow-2xl hover:shadow-gray-600 
                 transition-shadow duration-300 overflow-hidden"
    >
      {/* Image with hover description */}
      <div className="relative group">
        <img src={src} alt={name} className="w-full h-64 object-cover" />

        {/* Description - hidden by default, shows on hover above bar */}
        <div
          className="absolute bottom-12 left-0 w-full bg-black/70 text-white p-3 
                     opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 
                     transition-all duration-300"
        >
          <p className="text-sm">{desc}</p>
        </div>
      </div>

      {/* Bottom bar like Instagram */}
      <div className="flex items-center justify-between px-4 py-2 border-t bg-white relative z-10">
        {/* Place name */}
        <span className="font-semibold">{name}</span>

        <div className="flex items-center space-x-4">
          {/* Like button */}
          <button onClick={toggleLike} className="flex items-center space-x-1">
            <Icon
              icon={liked ? "mdi:heart" : "mdi:heart-outline"}
              className={`w-6 h-6 ${liked ? "text-red-500" : "text-gray-600"}`}
            />
            <span>{likes}</span>
          </button>

          {/* Save to bucketlist */}
          <button className="flex items-center space-x-1 text-gray-700 hover:text-green-600">
            <Icon icon="mdi:playlist-plus" className="w-6 h-6" />
            <span>Save</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
