import React from 'react'
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Model from './3d_tree-processed';
import './App.css';

function App() {
  return (
    <div className="App">
      <Canvas
        camera={{ position: [1, 0, 12.25], fov: 15 }}
      >
        <OrbitControls enableZoom={false} maxPolarAngle={2}/>
        <ambientLight intensity={1} />
        <directionalLight intensity={0.5} />
        <Model position={[0, -1, 0]} />
      </Canvas>
    </div>
  );
}

export default App;
