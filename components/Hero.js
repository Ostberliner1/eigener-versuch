"use client"

import Link from "next/link";
import Header from "./Header";


export default function Hero() {
    return (
      <div className="
      bg-gradient-to-r from-black via-red-600 to-yellow-500
      text-center
      h-170
      
      
      ">
        <div>
          <Header />
            
        </div>

        <p className="
        text-7xl
        
        py-4
        text-yellow-600
        shadow-xl/10
        hover:bg-black
        hover:text-white
        hover:shadow-xl/90
        
        ">
            Willkommen<br /> in meinem Block</p>
        <h1 className="
        text-9xl
        text-black
        font-bold
        py-6
        
        
        
        ">
            <img
                   src="https://user.myownmusic.de/artist_pics/109780.jpg"
                   alt="facebook Icon"
                   className="w-100 h-80 mx-auto shadow-xl/90" 
                   /></h1>
        

            <form className="py-4 ">
                  <input className="bg-white text-gray-900 w-60 h-10" type="text" placeholder="Wonach suchst du?"></input>
                  <button className="
                    bg-blue-800 text-white hover:bg-red-800 w-30 h-10" type="submit">Los geht's</button>
            </form>

           

            
  
        
      </div>
      
      
    );
  }
  