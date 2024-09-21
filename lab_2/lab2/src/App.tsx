// @ts-ignore

import './App.css'
import { CourseStaff } from "./components/CourseStaff.tsx"

function App() {


  return (
    <div>
        <h2>The amazing CS391 staffs!</h2>
        <div>
            <CourseStaff name="Taymaz" title="Professor" rating={92} />
            <CourseStaff name="Jeffrey" title="Teaching Assistant" rating={90} />
            <CourseStaff name="Sadiq" title="Course Assistant" rating={90} />
            <CourseStaff name="Ale" title="Course Assistant" rating={100} />
        </div>
    </div>
  )
}

export default App
