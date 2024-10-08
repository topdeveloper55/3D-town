import { type MeshProps } from "@react-three/fiber";
import {
  getCachedBoxGeometry,
  getCachedCylinderGeometry,
  getCachedPhongMaterial,
} from "./caches";
import { Html } from "@react-three/drei";

const ROD_HEIGHT = 18;
const ROD_RADIUS = 0.3;
const BOARD_HEIGHT = 6;
const BOARD_WIDTH = 12;
const BOARD_THICKNESS = ROD_RADIUS * 4;

export function InfoBoard(props: MeshProps) {
  return (
    <mesh {...props}>
      <mesh
        position-y={ROD_HEIGHT + BOARD_HEIGHT / 2}
        castShadow
        geometry={getCachedBoxGeometry([
          BOARD_WIDTH,
          BOARD_HEIGHT,
          BOARD_THICKNESS,
        ])}
        material={getCachedPhongMaterial({
          color: 0x331118,
          emissive: 0x000000,
          emissiveIntensity: 1,
          shininess: 1000,
        })}
      />
      <mesh
        position-y={ROD_HEIGHT / 2}
        castShadow
        geometry={getCachedCylinderGeometry([
          ROD_RADIUS,
          ROD_RADIUS,
          ROD_HEIGHT,
        ])}
        material={getCachedPhongMaterial({
          color: 0x331118,
          emissive: 0x000000,
          emissiveIntensity: 1,
          shininess: 1000,
        })}
      />

      <Html
        className="three-html"
        position-y={ROD_HEIGHT + BOARD_HEIGHT * 0.5}
        position-z={BOARD_THICKNESS / 2 + 0.01}
        style={{
          fontSize: 18,
          color: "#fffc",
        }}
        transform
        occlude
      >
        <p>Three.js, React.js, react-three-fiber</p>
      </Html>
    </mesh>
  );
}
