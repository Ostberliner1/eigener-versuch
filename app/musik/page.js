import Link from "next/link";

export default function musik({title, description}) {
    return (
      <div className="
      bg-black
      text-center
      
      py-12
      px-10
      shadow-xl/30
      shadow-blue-200/50
      
      ">
        <div className="text-center">
            <h1 className="text-yellow-500 text-5xl">Willkommen im Shop</h1>
            <br />

            <Link
        className="
        text-blue-600
        text-xl
        py-12
        "
        href="/"
        prefetch={false}
      >
        {" "}
        Zurück zur Startseite
      </Link>
        </div>
        
  </div>
      
      
    );
  }