import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import PollDetail from './PollDetail';
import VoteOnThisPoll from './VoteOnThisPoll';
import CreatePoll from './CreatePoll';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/polls/" element={<PollDetail />} /> */}
<Route path="/polls/:id" element={<PollDetail />} />          
          <Route path="/vote/:id" element={<VoteOnThisPoll />} />
          <Route path="/create" element={<CreatePoll />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
