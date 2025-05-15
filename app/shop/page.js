import Link from "next/link";

export default function shop({title, description}) {
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