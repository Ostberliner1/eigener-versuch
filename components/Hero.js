"use client"

import Link from "next/link";


export default function Hero() {
    return (
      <div className="
      bg-gradient-to-r from-black via-red-600 to-yellow-500
      text-center
      h-65
      py-5
      
      ">
        <div>
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

            <nav className="
            px-1
            py-20
            ">
                <ul className="
                flex
                space-x-20
                
                px-1
                ml-auto
                
                ">
                    <li>
                      <Link href="/shop" 
                       className="
                        hover:text-blue-500
                        transition-colors
                        duration-150"
                      
            
                        >
                          Shop
                      
                      </Link>
                    </li>
                    <li>
                      <Link href="/kontakt" 
                       className="
                        hover:text-blue-500
                        transition-colors
                        duration-150"
                      >
            
                        Kontakt
                      
                      </Link>
                    </li>
                    <li>
                      <Link href="/musik" 
                      className="
                        hover:text-blue-500
                        transition-colors
                        duration-150"
                      >
            
                        Musik
                      
                      </Link>
                    </li>
                    <li>
                      <Link href="/info" 
                    className="
                        hover:text-blue-500
                        transition-colors
                        duration-150"
                      >
            
                        Info
                      
                      </Link>
                    </li>
                </ul>
                


                
            </nav>

            
  
        
      </div>
      
      
    );
  }
  