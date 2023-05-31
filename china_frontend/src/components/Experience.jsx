import { Float, Text, OrbitControls } from '@react-three/drei'
import { Model } from './Model'
import { TextureLoader} from "three";
import { useLoader } from '@react-three/fiber'

export default function Experience()
{
    

    return <>

        {/*Controles*/}
        <OrbitControls makeDefault />

        {/*Luces*/}
        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />      
        

        {/*Templo Griego*/}
        <Model scale={0.003}></Model>

        {/*Texto*/}
        <Float speed={10} floatIntensity={3}>
            <Text font="./font.otf" position-y={3.4} position-z={2} maxWidth={0.2} textAlign="center">
                Templo Chino
                <meshBasicMaterial/>
            </Text>

        </Float>

        {/*Piso*/}
     <mesh  position-y={-0.3} rotation-x={- Math.PI*0.5} scale={10}>
         <planeGeometry />
         <meshStandardMaterial/>
     </mesh>


    </>
}