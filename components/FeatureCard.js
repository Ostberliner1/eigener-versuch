import Link from "next/link";
import Button from "./Button";
import { useRouter } from "next/router";

export default function FeatureCard({ title, description, buttonText, onClickHandler }) {
  
  
  return (
    <div
      className="
    bg-yellow-600
    text-center
    rounded-full
    py-12
    px-10
    shadow-xl/30
    shadow-blue-200/50
    h-70
    
    "
    >
      <h1
        className="
      text-4xl
      "
      >
        {title}
      </h1>
      <p
        className="
      text-black
      py-3
      "
      >
        {description}
      </p>
      
      {buttonText && onClickHandler &&(
      <div className="bg-red-600 hover:bg-black text-white w-35 mx-auto rounded-full">
        <Button buttonText={buttonText} onClickHandler={onClickHandler} />
      </div>
      )}
    </div>
  );
}
