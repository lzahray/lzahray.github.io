import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/index.css'
import ProjectBox from './components/ProjectBox.jsx'
import PublicationsBox from './components/PublicationsBox.jsx'
import PublicationsBoundingBox from './components/PublicationsBoundingBox.jsx'
import ProjectBoundingBox from './components/ProjectBoundingBox.jsx'

function App() {
  const [count, setCount] = useState(0)
  return (  
    <> 
    <div style={{textAlign: 'center'}}>
        <h1>Hi, I'm Lisa</h1>
        <p style={{ maxWidth: '770px' , margin: '0 auto' }} align="center">I'm currently an Autonomy Staff Engineer at Aurora Flight Sciences, where I work on system design and software development for autonomy capabilities. Prior to that, I conducted research in music technology. I started at MIT's Music Technology Lab, and most recently worked in Georgia Tech's Robotic Musicianship Group. I still enjoy music technology as a hobby. Some of my other hobbies are cross country skiing, and social folk dances including square dancing, contra, Scottish, and English country dancing.</p>
        <p><a href="https://www.linkedin.com/in/lisa-zahray/" target="_blank" rel="noopener noreferrer">LinkedIn</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a href="https://github.com/lzahray" target="_blank" rel="noopener noreferrer">GitHub</a></p>

      </div>
      
      <PublicationsBoundingBox 
        visiblePublications={[
          <PublicationsBox 
            key="visible-pubs"
            publications={[
              {
                title: "Robot Gesture Sonification to Enhance Awareness of Robot Status and Enjoyment of Interaction",
                venue: "2020 29th IEEE International Conference on Robot and Human Interactive Communication (RO-MAN)",
                year: "2020",
                link: "https://par.nsf.gov/servlets/purl/10190764"
              },
              {
                title: "Shimon the Rapper: A Real-Time System for Human-Robot Interactive Rap Battles",
                venue: "2020 International Conference on Computational Creativity, ICCC20",
                year: "2020",
                description: "Won Best Student Paper",
                link: "https://computationalcreativity.net/iccc20/papers/033-iccc20.pdf",
                videoLink: "https://youtu.be/zPvVpG-aCNg?si=0GJzPqHA6j4lOScC"
              }
            ]}
          />
        ]}
        hiddenPublications={[
          <PublicationsBox 
            key="hidden-pubs"
            publications={[
              {
                title: "Before, Between, and After: Enriching Robot Communication Surrounding Collaborative Creative Activities",
                venue: "Frontiers in Robotics and AI Journal",
                year: "2021",
                //description: "Won Best Student Paper",
                link: "https://www.frontiersin.org/journals/robotics-and-ai/articles/10.3389/frobt.2021.662355/full",
                //videoLink: "https://youtu.be/zPvVpG-aCNg?si=0GJzPqHA6j4lOScC"
              }
              // Add more publications here that will be hidden initially
              // Example:
              // {
              //   title: "Future Publication Title",
              //   venue: "Some Conference",
              //   year: "2024",
              //   link: "https://example.com"
              // }
            ]}
          />
        ]}
      />
      
      <ProjectBoundingBox 
        visibleProjects={[
          <ProjectBox 
            key="webapp"
            title="Reverse Musical Chairs: Webapp" 
            projectType="Personal Project" 
            date="2025" 
            technologies={["JavaScript", "React", "AI", "Web", "Music"]}
            description="Webapp where the user generates prompt-based musical tracks, and chooses different combinations to play them in, synchronized together"
          >
            <p>Additional details about the Reverse Musical Chairs project.</p>
          </ProjectBox>,
          <ProjectBox 
            key="installation"
            variant="alternate"
            title="Reverse Musical Chairs: Art Installation" 
            projectType="Personal Project" 
            date="2024" 
            technologies={["Python", "Music", "Raspberry Pi"]}
            description="Interactive art installation enabling collaborative music-making. The users sit on different chairs to trigger beat-synchronized LEDs and music tracks"
          >
            <p>Additional details about the Reverse Musical Chairs project.</p>
          </ProjectBox>
          
        ]}
        hiddenProjects={[
          <ProjectBox 
            key="pilot"
            title="Pilot Cognitive Inference" 
            projectType="Professional Project" 
            date="2021-2023" 
            technologies={["Python", "AI", "ZeroMQ"]}
            description="Software system for inferring pilot workload in real-time using physiological sensors"
          >
            <p>Additional details about the Pilot Cognitive Inference project.<br></br>
              <a href="https://www.aurora.aero/2022/06/15/bridging-the-gap-between-humans-and-autonomy/" target="_blank" rel="noopener noreferrer">Article</a>
            </p>
          </ProjectBox>,
          <ProjectBox 
            key="shimon"
            variant="alternate"
            title="Shimon - Robot Musical Gestures" 
            projectType="Research Project" 
            date="2019-2020" 
            technologies={["Python", "Robotics", "Music", "MaxMSP"]}
            description="Related projects involving choreographing and automating gestures for Shimon, a singing marimba-playing robot"
          >
            <p>Additional details about the Shimon project.</p>
          </ProjectBox>,
          <ProjectBox 
            key="macdonald"
            title="Old MacDonald Had a Harmony: An Animal-Voiced Harmonizer" 
            projectType="Class Project" 
            date="2019" 
            technologies={["Python", "AI", "Music"]}
            description="System that uses a Hidden Markov Model to generate harmonies to accompany a sung melody (to the styling of animal sounds)"
          >
            <p>Additional details about the Old MacDonald Had a Harmony project.</p>
            <a href="https://biboamy.github.io/MIRProject/demoSite/paper.pdf" target="_blank" rel="noopener noreferrer">Paper</a>
          </ProjectBox>,
          <ProjectBox 
            key="vr"
            variant="alternate"
            title="VR Music Composition Sandboxes" 
            projectType="Research Project" 
            date="2017" 
            technologies={["C#", "Unity", "VR", "Music"]}
            description="Two virtual reality environments for interactive music composition"
          >
            <p>Additional details about the VR Music Composition Sandbox.</p>
          </ProjectBox>
        ]}
      />
      
      
        
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
