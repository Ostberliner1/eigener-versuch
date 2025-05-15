import Link from "next/link";

export default function kontakt({title, description}) {
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
            <h1 className="text-yellow-500 text-5xl">Wir sind rund um die Uhr für dich zu erreichen</h1>
            <form>
                <label className="text-red-400 text-5xl">Kontakt: </label><br />
                <input className="bg-white text-gray-800 w-80 h-20" type="text" placeholder="schreibe mir hier eine Nachricht"></input><br /> <br />
                <button className="bg-red-500 text-xl">Senden</button>

            </form>
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