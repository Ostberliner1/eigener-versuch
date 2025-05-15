
import Link from "next/link";
import Button from "./Button";


export default function FeatureCard({ title, description, buttonText, onClickHandler }) {
  
  
  return (
    <div
      className="
    bg-yellow-600
    text-center
    rounded-full
    
    shadow-xl/30
    shadow-blue-200/50
    
    w-full
    aspect-square
    flex
    flex-col
    justify-center
    py-3
    
    
    "
    >
      <h1
        className="
      text-7xl
      "
      >
        {title}
      </h1>
      <p
        className="
      text-black
      py-3
      text-xl
      "
      >
        {description}
      </p>
      
      {buttonText && onClickHandler &&(
      <div className="bg-red-600 hover:bg-black text-white w-45 text-xl mx-auto rounded-full">
        <Button buttonText={buttonText} onClickHandler={onClickHandler} />
      </div>
      )}
    </div>
  );
}
