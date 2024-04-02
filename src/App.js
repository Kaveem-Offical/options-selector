import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserDescriptionForm from "./Components/UserDescription";
import UserInterestedForm from "./Components/UserInterestedForm";
import RignPlacePage from "./Components/RignPlacePage";
import MathForm from "./Components/MathForm";
import Thoughts from "./Components/Thoughts";
import LearningPath from "./Components/LearningPath";
import Final from "./Components/Final";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserDescriptionForm />} />
        <Route path="/intrests" element={<UserInterestedForm />} />
        <Route path="/rightplace" element={<RignPlacePage />} />
        <Route path="/mathform" element={<MathForm />} />
        <Route path="/thoughts" element={<Thoughts />} />
        <Route path="/learningpath" element={<LearningPath />} />
        <Route path="/final" element={<Final />} />
      </Routes>
    </Router>
  );
}

export default App;
