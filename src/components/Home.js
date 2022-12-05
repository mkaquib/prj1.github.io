import React from 'react'
import vg from '../assets/2.webp'
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from  'react-icons/ai'

function Home() {
  return (
    <>
    <div className='home' id='home'>
    
        <main>
            <h1>AquibKhan</h1>
            <p>Solution to all your problems</p>
        </main>
    
    </div>
    <div className='home2'>
        <img src={vg} alt="Graphics">

        </img>
        <div>
            <p>
                We are your one and only solution to the Tech Problems you face
                every day. We are leading tech company whose aim is to increase
                the problem solving ability in children.
            </p>
        </div>
    </div>

    <div className='home3' id='about'>
        <div>
            <h1>Who we are?</h1>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        </div>
    </div>

    <div className='home4' id='brand'>
        <div>
            <h1>Brands</h1>
            <article>
                <div style={{animationDelay:'0.3s'}}>
                    <AiFillGoogleCircle/>
                    <p>Google</p>
                </div>
                <div style={{animationDelay:'0.5s'}}>
                    <AiFillAmazonCircle/>
                    <p>Amazon</p>
                </div>
                <div style={{animationDelay:'0.7s'}}>
                    <AiFillYoutube/>
                    <p>Youtube</p>
                </div>
                <div style={{animationDelay:'1s'}}>
                    <AiFillInstagram/>
                    <p>Instagram</p>
                </div>
            </article>
        </div>
    </div>

    
    </>
  )
}

export default Home