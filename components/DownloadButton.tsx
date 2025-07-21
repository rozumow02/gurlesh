import React from "react";

import apple from "@/public/images/apple.png";
import android from "@/public/images/android.png";

interface DownloadButtonProps {
  text?: string;
  bgColor?: string;
  textColor?: "white" | "black";
  showApple?: boolean;
  showAndroid?: boolean;
  gradient?: boolean;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({
  text = "Скачать приложение",
  bgColor = "transparent",
  textColor = "white",
  showApple = false,
  showAndroid = false,
  gradient = false,
}) => {
  return (
    <button
      className={`flex items-center gap-3 px-5 py-2 rounded-full border border-${textColor} ${
        gradient
          ? "bg-gradient-to-r from-blue-500 to-purple-600"
          : `bg-${bgColor}`
      } text-${textColor} hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
    >
      {showApple && (
        <img
          src={apple.src}
          className="w-[22px] h-[22px]"
          style={{
            filter: textColor === "white" ? "invert(1)" : "invert(0)",
          }}
        />
      )}
      {showAndroid && (
        <img
          src={android.src}
          className="w-[22px] h-[22px]"
          style={{
            filter: textColor === "white" ? "invert(1)" : "invert(0)",
          }}
        />
      )}
      <span className="font-medium text-sm md:text-base">{text}</span>
    </button>
  );
};

export default DownloadButton;
