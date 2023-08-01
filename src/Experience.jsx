import { Float, Html, OrbitControls, PresentationControls } from '@react-three/drei'
import { useControls } from 'leva'
import { Perf } from 'r3f-perf'
import Gameboy from './gameboy'
import { extend, useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Image } from '@react-three/drei'

export default function Experience()
{
    

    

    const [hasClicker, setHasClicker] = useState(true)
    const [count, setCount] = useState(0)
    const toggleClickerClick = () =>{
      setHasClicker(!hasClicker)
    }

    const [hasClickerA, setHasClickerA] = useState(true)
    const [countA, setCountA] = useState(0)
    const toggleClickerClickA = () =>{
      setHasClickerA(!hasClickerA)
    }

    
    const choiceB = async () =>{
        toggleClickerClick()
        {hasClickerA ? null : toggleClickerClickA()}
        const delay = ms => new Promise(res => setTimeout(res, ms));
        const img1 = document.querySelector('.choiceB_img1')
        const img2 = document.querySelector('.choiceB_img2')
        const img3 = document.querySelector('.choiceB_img3')
        const screen = document.querySelector('.screen')
        img1.style.visibility = 'visible'
        screen.style.visibility = 'hidden'
    

        
        await delay(5000);
        console.log("Waited 5s");
        img1.style.visibility = 'hidden'
        img2.style.visibility = 'visible'
        screen.style.visibility = 'hidden'

        await delay(5000);
        console.log("Waited 5s");
        img2.style.visibility = 'hidden'
        img3.style.visibility = 'visible'
        screen.style.visibility = 'hidden'

        await delay(5000);
        console.log("Waited 5s");
        img3.style.visibility = 'hidden'
        screen.style.visibility = 'hidden'


        await delay(10);
        console.log("Waited 1s");
        screen.style.visibility = 'visible'
    }

    const choiceA = async () =>{
        toggleClickerClickA()
        {hasClicker ? null : toggleClickerClick()}
        const delay = ms => new Promise(res => setTimeout(res, ms));
        const img1 = document.querySelector('.choiceA_img1')
        const img2 = document.querySelector('.choiceA_img2')
        const img3 = document.querySelector('.choiceA_img3')
        const screen = document.querySelector('.screen')
        img1.style.visibility = 'visible'
        screen.style.visibility = 'hidden'
    

        
        await delay(5000);
        console.log("Waited 5s");
        img1.style.visibility = 'hidden'
        img2.style.visibility = 'visible'

        await delay(5000);
        console.log("Waited 5s");
        img2.style.visibility = 'hidden'
        img3.style.visibility = 'visible'

        await delay(5000);
        console.log("Waited 5s");
        img3.style.visibility = 'hidden'


        await delay(10);
        console.log("Waited 1s");
        screen.style.visibility = 'visible'
    }
    
    
    return <>
        
        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />

        <PresentationControls 
        global
        polar={[-Math.PI / 10, Math.PI / 5]}
        azimuth={[-Math.PI / 5, Math.PI / 5]}
        config={{mass: 2, tension: 400}}
        snap={{mass: 4, tension: 400}}
        >
            <Float speed={0.5} rotationIntensity={0.5}>
        
                <mesh position-y={-0.5} rotation={[-0.99, -0.85, -0.78]} scale={2.1} >
                <Gameboy />

                <Html className='screen' occlude transform position={[0, 0.7, 0.249]} scale={0.0659}>
                    <iframe src='https://64c9396c1c30cb066a3d3115--radiant-kleicha-9d1a35.netlify.app/' />
                </Html>
                </mesh>

                <mesh onClick={toggleClickerClickA} position={[-0.30, -0.39, 0.83]} scale={0.17}>
                    <sphereGeometry />
                    <meshBasicMaterial visible={false} />
                    {hasClickerA ? null : <Html center position={[-8.89, 0, 0]} className='deleteDefaultCube'>
                        <h3>🙌 Let the cube chill out a bit.</h3>
                        <button onClick={choiceA} >YES! He's part of the family.</button> 
                        <button onClick={toggleClickerClickA}>meeeehhh, I will wait</button>
                    </Html>}
                </mesh>

                <mesh onClick={toggleClickerClick} position={[-0.08, -0.22, 1.12]} scale={0.17}>
                    <sphereGeometry />
                    <meshBasicMaterial visible={false} />
                    {hasClicker ? null : <Html position={[2, 2, 2]} className='deleteDefaultCube'>
                        <h3>🖕 Delete default cube ?</h3>
                        <button onClick={choiceB} >YES! He should'nt be here.</button>
                        <button onClick={toggleClickerClick}>meeeehhh, I will wait.</button>
                    </Html>}

                </mesh>

            </Float>
        </PresentationControls>
        

        

    </>
}