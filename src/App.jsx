import { LogIn } from "lucide-react";
import Landing from "./routes/Landing";
import {Routes, Route, Navigate} from 'react-router-dom'
import Signup from "./routes/Signup";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      </>
  );
}

export default App;
