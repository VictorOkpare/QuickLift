import React from 'react'
import "./Footer.css"
import {CiSearch} from "react-icons/ci"


function Footer() {
  return (
    <div className='f-wapper'>
        <div className='f-container'>
            <div className='f-ctn'>
                <h2 id='f-header'>Quick Lift </h2>
                <p>Lorem ipsum dolor sit amet. Dolores<br/>
                 ipsa earum quasi esse nobis<br/> recusandae? earum quod reprehenderit<br/>
                 perspiciatis quas? Assumenda
                </p>

                <div className='f-search'>
                    <input type="text" />
                    <span><CiSearch/></span>
                </div>
            </div>

            <div className='f-ctn'>
                <h5 className='f-head'> QuickLift</h5>
                <p className='address'>
                    Plot 1210 <br />
                    water coperation drive <br />
                    oppiste landmark events center <br />
                    oniru <br />
                    victoria island, Lagos.
                </p>

            </div>

            <div className='f-ctn'>
                <h5 className='f-head'>PARTNER WITH US</h5>
                <div className='list'>
                    <span>Fleets</span> <br />

                    <span>Franchise</span> <br />
                     
                    <span>Influences</span> <br />
            </div>

          
                    
                </div>

                <div className='f-ctn'>
                    <h5 className='f-head'>COMPANY</h5>
                    <div className="List">
                    
                        <span>About Use</span> <br />

                        <span>Contact</span> <br />

                        <span>Blog</span> <br />

                        <span>Brand Guildlines</span> <br />
                    </div>
            </div>


           
        </div>

        
    </div>
  )
}

export default Footer