import './App.css';
import { useQuery } from '@apollo/client';
import { BOOK } from './api/client';
import Page from './components/Page';

function App() {
  // const [loading, error, data] = useQuery(BOOK)
  const page = {
    content: "We slipped into the car and closed the doors quietly and off we went. “Look at those streetlamps,” my father said, “glowing like tiny moons all in a row.”",
    tokens: [
      {
        "position": [
          0,
          2
        ],
        "value": "we"
      },{ "position": [  3,10], "value": "slipped"},{ "position": [ 11,15], "value": "into"},{ "position": [ 16,19], "value": "the"},{ "position": [ 20,23], "value": "car"},{ "position": [ 24,27], "value": "and"},{ "position": [ 28,34], "value": "closed"},{ "position": [ 35,38], "value": "the"},{ "position": [ 39,44], "value": "doors"},{ "position": [ 45,52], "value": "quietly"},{ "position": [ 53,56], "value": "and"},{ "position": [ 57,60], "value": "off"},{ "position": [ 61,63], "value": "we"},{ "position": [ 64,68], "value": "went"},{ "position": [ 71,75], "value": "look"},{ "position": [ 76,78], "value": "at"},{ "position": [ 79,84], "value": "those"},{ "position": [ 85,96], "value": "streetlamps"},{"position": [ 99,101],"value": "my"},{"position": [102,108],"value": "father"},{"position": [109,113],"value": "said"},{"position": [116,123],"value": "glowing"},{"position": [124,128],"value": "like"},{"position": [129,133],"value": "tiny"},{"position": [134,139],"value": "moons"},{"position": [140,143],"value": "all"},{"position": [144,146],"value": "in"},{"position": [147,148],"value": "a"},{"position": [149,152],"value": "row"}
    ]
  }
  
  return (
    <Page page={page}/>
  );
}

export default App;
