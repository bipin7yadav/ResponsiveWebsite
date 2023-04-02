import React from 'react'
import "./MainBody.css"
import image from "../images/image-hero-desktop.png"
import img1 from "../images/client-databiz.svg"
import img2 from "../images/client-audiophile.svg"
import img3 from "../images/client-maker.svg"
import img4 from "../images/client-meet.svg"

function MainBody() {
    return (
        <div className='maincontainer flex-row-evenly'>
            <div className='flex-column' style={{width:"40%"}}>
                <div className='center'>
                    <div className='centerl2'>
                        <p className='font'>Make </p>
                        <p className='font'>Remote Work</p>
                        <p style={{color:"hsl(0, 0%, 41%)"}}>Use this section to recap over some of your major
                            learnings while working through this project. Writing these out and
                            providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.</p>
                        <button  style={{backgroundColor:"black",borderRadius:"5px",color:"white",padding:"8px",width:"150px"}}>Learn More</button>
                    </div>
                    <div className='flex-row' style={{width:"100%"}}>
                        <img src={img1}/>
                        <img src={img2}/>
                        <img src={img3}/>
                        <img src={img4}/>
                    </div>
                </div>

                 
                    {/* <div className='flex-row' style={{width:"80%"}}>
                        <img src={img1}/>
                        <img src={img2}/>
                        <img src={img3}/>
                        <img src={img4}/>
                    </div> */}
            </div>
            <div style={{width:"45%",height:"100%",boxSizing:"border-box"}}>
                <img style={{objectFit:"contain",width:"100%",height:"90%"}} src={image} alt='png'/>
            </div>

        </div>
    )
}

export default MainBody
