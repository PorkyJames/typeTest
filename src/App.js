import './App.css';
import PromptCard from '../src/Components/PromptCard/PromptCard.jsx';
import ResultsModal from './Components/ResultsModal/ResultsModal.jsx';

import { useState } from 'react';

function App() {

  //! If the timer runs out, show the results page instead of the prompt card
  const [completed, setCompleted] = useState(false);
  
  return (
    <div className="App">
      {completed ? <ResultsModal /> : <PromptCard setCompleted={setCompleted} />}
    </div>
  );
}

export default App;
