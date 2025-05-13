import Link from "next/link";
import Button from "./Button";
import { useRouter } from "next/router";

export default function FeatureCard({ title, description, Button }) {
  const router = useRouter();
  const handleNavigateClick = () => {
    router.push("/shop");
  };
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
    
    "
    >
      <h1
        className="
      text-6xl
      "
      >
        {title}
      </h1>
      <p
        className="
      text-black
      "
      >
        {description}
      </p>

      <div className="bg-blue-600 text-white">
        <Button buttonText="JETZT SHOPPEN" oncklickHandler={handleNavigateClick} />
      </div>
    </div>
  );
}
