import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProjectBox from './components/ProjectBox.jsx'

function App() {
  const [count, setCount] = useState(0)
  return (  
    <> 
    <div style={{textAlign: 'center'}}>
        <h1>Hi, I'm Lisa</h1>
        <p style={{ maxWidth: '770px' , margin: '0 auto' }} align="center">I'm currently an Autonomy Staff Engineer at Aurora Flight Sciences, where I work on system design and software development for autonomy capabilities. Prior to that, I conducted research in music technology. I started at MIT's Music Technology Lab, and most recently worked in Georgia Tech's Robotic Musicianship Group. I still enjoy music technology as a hobby. Some of my other hobbies are cross country skiing, and social folk dances including square dancing, contra, Scottish, and English country dancing.</p>
        <p><a href="https://www.linkedin.com/in/lisa-zahray/" target="_blank" rel="noopener noreferrer">LinkedIn</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a href="https://github.com/lzahray" target="_blank" rel="noopener noreferrer">GitHub</a></p>

      </div>
      <div className="horizontal-container">
        <div>
          <h2>Skills</h2>
          <ul align="left" style={{ listStyleType: 'none' }}>
            <li><b>Languages:</b> Proficient in Python; Familiar with C++ and JavaScript</li>
            <li><b>Technologies:</b> NumPy, Git, Unity, Linux, ZeroMQ, React</li>
            <li><b>Areas:</b> Software Architecture, Robotics, Multi-Agent Systems, Music Technology</li>
          </ul>
        </div>
      </div>
      <ProjectBox 
        title="Reverse Musical Chairs: Webapp" 
        projectType="Personal Project" 
        date="2025" 
        technologies={["JavaScript", "React", "AI", "Web", "Music"]}
        description="Webapp where the user generates prompt-based musical tracks, and chooses different combinations to play them in, synchronized together"
      >
        <p>Additional details about the Reverse Musical Chairs project.</p>
      </ProjectBox>
      <ProjectBox 
        title="Reverse Musical Chairs: Art Installation" 
        projectType="Personal Project" 
        date="2024" 
        technologies={["Python", "Music", "Raspberry Pi"]}
        description="Interactive art installation enabling collaborative music-making. The users sit on different chairs to trigger beat-synchronized LEDs and music tracks"
      >
        <p>Additional details about the Reverse Musical Chairs project.</p>
      </ProjectBox>
      <ProjectBox 
        title="Pilot Cognitive Inference" 
        projectType="Professional Project" 
        date="2021-2023" 
        technologies={["Python", "AI", "Backend"]}
        description="Software system for inferring pilot workload in real-time using physiological sensors"
      >
        <p>Additional details about the Pilot Cognitive Inference project.<br></br>
          <a href="https://www.aurora.aero/2022/06/15/bridging-the-gap-between-humans-and-autonomy/" target="_blank" rel="noopener noreferrer">Article</a>
        </p>
      </ProjectBox>
      <ProjectBox 
        title="Shimon - Robot Musical Gestures" 
        projectType="Research Project" 
        date="2019-2020" 
        technologies={["Python", "Robotics", "Music", "MaxMSP"]}
        description="Related projects involving choreographing and automating gestures for Shimon, a singing marimba-playing robot"
      >
        <p>Additional details about the Shimon project.</p>
      </ProjectBox>
      <ProjectBox 
        title="Old MacDonald Had a Harmony: An Animal-Voiced Harmonizer" 
        projectType="Class Project" 
        date="2019" 
        technologies={["Python", "AI", "Music"]}
        description="System that uses a Hidden Markov Model to generate harmonies to accompany a sung melody (to the styling of animal sounds)"
      >
        <p>Additional details about the Old MacDonald Had a Harmony project.</p>
        <a href="https://biboamy.github.io/MIRProject/demoSite/paper.pdf" target="_blank" rel="noopener noreferrer">Paper</a>
      </ProjectBox>

      <ProjectBox 
        title="VR Music Composition Sandboxes" 
        projectType="Research Project" 
        date="2017" 
        technologies={["C#", "Unity", "VR", "Music"]}
        description="Two virtual reality environments for interactive music composition"
      >
        <p>Additional details about the VR Music Composition Sandbox.</p>
      </ProjectBox>
      
      
        
    </>
  )
}
export default App
//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
