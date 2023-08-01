import React from 'react'
import ReactDOM from 'react-dom/client'
import Experience from './Experience.jsx'
import './index.css'
import { Canvas } from '@react-three/fiber'
import { StrictMode } from 'react'
import { EffectComposer, Pixelation } from '@react-three/postprocessing'
import { Center } from '@react-three/drei'
const root = ReactDOM.createRoot(document.querySelector('#root'))



root.render(
    <StrictMode>
    <img className='choiceB_img1' src='scene1B.jpg' />
    <img className='choiceB_img2' src='scene2B.jpg' />
    <img className='choiceB_img3' src='scene3B.jpg' />
    <img className='choiceA_img1' src='scene1.jpg' />
    <img className='choiceA_img2' src='scene2.jpg' />
    <img className='choiceA_img3' src='scene3.jpg' />
    <Canvas
        camera={ {
            fov: 45,
            near: 0.1,
            far: 200,
            position: [ - 4, 3, 6 ]
        } }
    >
        <Experience />
    </Canvas>
    <div className='div_credits'><a href='https://sketchfab.com/3d-models/gameboy-challenge-1c7378f4de9b4ff99e58d01ca132ad89' target='blank' className='credits'>credits </a></div>
    </StrictMode>
)