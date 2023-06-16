
import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

/**
 *
 * Componente que muestra un modelo 3D de un dragón.
 * Utiliza la biblioteca React Three Fiber y el formato glTF.
 *
 * @component
 * @param {Object} props - Propiedades del componente.
 * @returns {JSX.Element} Modelo 3D del dragón.
 *
 */

export function Modelo(props) {
  // Crea una referencia al grupo de objetos del modelo 3D
  const group = useRef();

  // Carga el archivo glTF del dragón y obtiene los nodos, materiales y animaciones del modelo
  const { nodes, materials, animations } = useGLTF("static/cute_dragon.glb");

  // Controla las animaciones del modelo
  const { actions } = useAnimations(animations, group);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="dragFBX" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <group name="Object_6" position={[33.78, -1.01, 0]} />
                  <group name="Object_8" position={[31, -1.81, 0]} />
                  <group name="Object_10" position={[31, -1.81, 0]} />
                  <group name="Object_12" position={[5.86, -1.81, 0]} />
                  <group name="Object_14" position={[5.86, -1.81, 0]} />
                  <group name="Plane003" position={[33.78, -1.01, 0]} />
                  <group name="Sphere002" position={[31, -1.81, 0]} />
                  <group name="Object001" position={[31, -1.81, 0]} />
                  <group name="Object002" position={[5.86, -1.81, 0]} />
                  <group name="Sphere003" position={[5.86, -1.81, 0]} />
                  <skinnedMesh
                    name="Object_11"
                    geometry={nodes.Object_11.geometry}
                    material={materials.Material_28}
                    skeleton={nodes.Object_11.skeleton}
                  />
                  <skinnedMesh
                    name="Object_13"
                    geometry={nodes.Object_13.geometry}
                    material={materials.Material_28}
                    skeleton={nodes.Object_13.skeleton}
                  />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.Material_26}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    name="Object_9"
                    geometry={nodes.Object_9.geometry}
                    material={materials.Material_26}
                    skeleton={nodes.Object_9.skeleton}
                  />
                  <skinnedMesh
                    name="Object_15"
                    geometry={nodes.Object_15.geometry}
                    material={materials.Material_26}
                    skeleton={nodes.Object_15.skeleton}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

// Precarga el modelo para mejorar el rendimiento
useGLTF.preload("static/cute_dragon.glb");
