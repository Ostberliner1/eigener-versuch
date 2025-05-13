"use client"

import Link from "next/link";
import Header from "./Header";


export default function Hero() {
    return (
      <div className="
      bg-gradient-to-r from-black via-red-600 to-yellow-500
      text-center
      h-65
      py-5
      
      ">
        <div>
          <Header />
            <form className="ml-190 ">
                  <input className="bg-white text-gray-700 w-30" type="text" placeholder="Suche"></input>
                  <button className="
                    bg-blue-800 text-white hover:bg-red-800 w-15" type="submit">Start</button>
            </form>
        </div>
        <h1 className="
        text-7xl
        text-black
        
        
        ">
            V. FANPAGE</h1>
        <p className="
        text-3xl
        ">
            Willkommen in meinem Block</p>

           

            
  
        
      </div>
      
      
    );
  }
  