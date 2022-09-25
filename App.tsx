import * as React from 'react';
import { Rendering } from './Rendering';
import './style.css';

export default function App() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scene = React.useRef<Rendering>();

  React.useEffect(() => {
    scene.current = new Rendering(containerRef.current);
  }, []);

  return <div ref={containerRef}></div>;
}
