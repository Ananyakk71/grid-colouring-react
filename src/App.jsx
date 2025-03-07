
import Form from "./Form.jsx";


function App() {
  return (
    <>
      <Form />   
    </>
  );
}

export default App;

/**
 * creating an input of type number give a number and click on button submit display nxn grid
 * first create a jsx file Form.jsx return(<></>)
 * to create grid - create Grid.jsx
 * input number value - is size , nxn grid container size * size items
 * useState(0)
 *  const [size, setSize] = useState(0); // Manages grid size
 * on clicked any of the shell corresponding row will be selected
 * on clicke a shell that willl display in blue color and corresponding row will be in red color
 *  suppose click on 13th item on 5x5 grid
 * rowInd = Math.floor(index / size) = 13/5 = 2  ( 13th item belong to  3rd row ind2)
 * colInd = index % size = 13 % 5 = 3 (13th item present in 3red column)
 * 
 * in case of row 
 * to display complete row with red color, give color to the shells  (rowInd, rowInd+size)
 * 
 * in the case of column 
 * colInd+size , colInd+(size*2), ..,size*size
 * inthe case of diagonals
 * 1. index+size+1, ...
 * 2. index+size-1, ...
 * 3. index-size+1, ...
 * 4. index-size-1, ...   
 * 
 * 
 * const root =RectDOM.createRoot(document.get                     
*/
 
