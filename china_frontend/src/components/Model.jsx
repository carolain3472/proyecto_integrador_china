
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

/**
 *
 * Componente que muestra un modelo 3D de un templo chino.
 * Utiliza la biblioteca React Three Fiber y el formato glTF.
 *
 * @component
 * @param {Object} props - Propiedades del componente.
 * @returns {JSX.Element} Modelo 3D del templo chino.
 *
 */

export function Model(props) {
  // Carga el archivo glTF del templo chino y obtiene los nodos y materiales del modelo
  const { nodes, materials } = useGLTF("/static/chinese_temple.glb");

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[-738.59, -6.13, -294.79]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={39.54}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.BrickFloor008_StoneFloorBrick2_0.geometry}
              material={materials.StoneFloorBrick2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.BrickFloor008_StoneFloorBrick2_0_1.geometry}
              material={materials.StoneFloorBrick2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.BrickFloor008_StoneFloorBrick2_0_2.geometry}
              material={materials.StoneFloorBrick2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.BrickFloor008_StoneFloorBrick2_0_3.geometry}
              material={materials.StoneFloorBrick2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.BrickFloor008_StoneFloorBrick3_0.geometry}
              material={materials.StoneFloorBrick3}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.BrickFloor008_StoneFloorBrick3_0_1.geometry}
              material={materials.StoneFloorBrick3}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.BrickFloor008_StoneFloorBrick1_0.geometry}
              material={materials.StoneFloorBrick1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.BrickFloor008_StoneFloorBrick1_0_1.geometry}
              material={materials.StoneFloorBrick1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.BrickFloor008_StoneFloorBrick1_0_2.geometry}
              material={materials.StoneFloorBrick1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.BrickFloor008_StoneFloorBrick1_0_3.geometry}
              material={materials.StoneFloorBrick1}
            />
          </group>
          <group
            position={[152.95, 0, 891.51]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={39.54}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.BrickFloor007_carpet2_0.geometry}
              material={materials.carpet2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.BrickFloor007_Carpet_0.geometry}
              material={materials.Carpet}
            />
          </group>
          <group
            position={[433.13, 0, 873.78]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={113.47}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.LionRight_Lion001_0.geometry}
              material={materials["Lion.001"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.LionRight_Pedestal001_0.geometry}
              material={materials["Pedestal.001"]}
            />
          </group>
          <group
            position={[-442.66, 0, 872.6]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={113.47}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.LionLeft_Lion_0.geometry}
              material={materials.Lion}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.LionLeft_Pedestal_0.geometry}
              material={materials.Pedestal}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MainTempleWindows_Wood1_0.geometry}
              material={materials.Wood1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MainTempleWindows_Wood3_0.geometry}
              material={materials.Wood3}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MainTempleWindows_Wood5_0.geometry}
              material={materials.Wood5}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MainTempleWindows_Wood4_0.geometry}
              material={materials.Wood4}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MainTemple_Wood3_0.geometry}
              material={materials.Wood3}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MainTemple_Brick2_0.geometry}
              material={materials.Brick2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MainTemple_StairBrick2_0.geometry}
              material={materials.StairBrick2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MainTemple_Wood1_0.geometry}
              material={materials.Wood1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MainTemple_Wood2_0.geometry}
              material={materials.Wood2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MainTemple_Wood5_0.geometry}
              material={materials.Wood5}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MainTemple_SideBrick001_0.geometry}
              material={materials["SideBrick.001"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MainTemple_Gold_0.geometry}
              material={materials.Gold}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MainTemple_Brick1_0.geometry}
              material={materials.Brick1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MainTemple_StairBrick2001_0.geometry}
              material={materials["StairBrick2.001"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MainTemple_StairBrick1001_0.geometry}
              material={materials["StairBrick1.001"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MainTemple_StairBrick3001_0.geometry}
              material={materials["StairBrick3.001"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MainTemple_Wood4_0.geometry}
              material={materials.Wood4}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MainTempleRoof_Roof2_0.geometry}
              material={materials.Roof2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MainTempleRoof_Roof3_0.geometry}
              material={materials.Roof3}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MainTempleRoof_Roof1_0.geometry}
              material={materials.Roof1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MainTempleRoof_Roof4_0.geometry}
              material={materials.Roof4}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MainTempleRoof_Wood5_0.geometry}
              material={materials.Wood5}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

// Precarga el modelo para mejorar el rendimiento
useGLTF.preload("/static/chinese_temple.glb");
