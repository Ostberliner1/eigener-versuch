import Link from "next/link";

export default function info({title, description}) {
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
            <h1 className="text-yellow-500 text-5xl">Was gibt es über mich zu sagen</h1><br />
            <p className="text-2xl">Ich mache seit 25 Jahren Musik im Bereich HIP HOP/ROCK,<br />
               ich habe mich anfangs nur auf mich konzentriert und mich in den Mainstremshit eingereiht und mit vielen Künstlern gearbeitet.<br />
               Doch irgendwann wurde mir klar, das ich damit absolut nichts verändern kann und habe mich,<br />
                mit vollem Bewusstsein gegen ungeschriebene Gesetze zu verstossen, umorientiert<br />
                um den ursprünglichen Weg des Sprachgesangs zu gehen...ZURÜCK ZU DEN WURZELN!!!<br />
                Auflehen gegen ein Unrechtssystem, auf Fehler hinzuweisen und die Wahrheit auszusprechen!<br />
                Für die Zuknunft meiner Kinder, wenn nötig Aalein aber STANDHAFT gegen jede Repression einzustehen!!!

               </p>

               <div className="h-700">

               </div>

               <div className="h-400">
               <h1 className="text-red-700 text-7xl" 
                id="neu">Aktuelles:</h1>
                <p className="text-5xl">Momentan gibt es bei mir nichts Neues da ich momentan<br />
                 mit Schule und arbeiten beschäftigt bin<br />
                 doch es würde mich freuen wenn ihr euch<br />
                 wärenddessen mit dem restlichen Kram auf<br />
                 meiner Seite beschäftigt.<br />
                 Dann viel Spass auf Meiner Seite ihr Freaks.<br />
                 Petri Heil</p>
               </div>
               


               <div className="text-4xl">

                <h1 className="text-red-700 text-7xl" 
                id="wo">Wo findest du mich überall</h1><br />
                <div>
                <div>
                  <img
                   src="/facebook.png"
                   alt="facebook Icon"
                   className="w-70 h-40 mx-auto" 
                   />
                  <a className="text-blue-800 hover:text-red-500" href="https://www.facebook.com/p/Dieter-Bohlen-100075629388906/">Klick mich für Facebook</a>
                </div><br />

                 <div className="">
                  <img
                   src="/instagram.webp"
                   alt="Instagram Icon"
                   className="w-60 h-60 mx-auto" 
                   />
                   <a className="text-pink-600 hover:text-red-500" href="https://www.instagram.com/pamelaanderson/">Klick hier für Insta</a>
                 </div><br />
                 <div>
                  <img
                   src="/tiktok.jpg"
                   alt="Tiktok Icon"
                   className="w-70 h-40 mx-auto" 
                   />
                           
                  <h2>TikTok:</h2>
                  </div> <br />
                  <div>
                  <img
                   src="/youtube.jpg"
                   alt="Youtube Icon"
                   className="w-60 h-30 mx-auto" 
                   />
                  <h2>Youtube:</h2>
                  </div>
                </div>
               </div>
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