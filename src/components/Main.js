import React from 'react'
import mainImg from '../assets/img/noun-skateboard-2921148.png';

const Main = () => {
  return (
    <>
        <section className='w-full h-full flex justify-around items-center'>
            <content className="w-1/2 m-8">
                <h2 className='text-5xl font-extrabold'>Ready to Sk8..</h2>
                <p className="text-lg font-mono">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet molestias, perspiciatis natus doloremque delectus quas placeat totam, id voluptates quis aspernatur? Quis maiores molestiae ad beatae quisquam aliquid hic expedita?</p>
            </content>
            <img src={mainImg} className='w-1/2 object-cover p-3' alt="mainImage"/>
        </section>
    </>
  )
}

export default Main