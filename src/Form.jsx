import { useState } from "react";
import Grid from "./Grid";

export default function Form() {
  const [size, setSize] = useState("");
  const [gridSize, setGridSize] = useState(null);

  const handleChange = (event) => {
    setSize(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setGridSize(Number(size)); // onClick the button resize
  };

  return (
    <>
      <div className="search">
        <form onSubmit={handleSubmit}>
          <label>
            Enter grid size:
            <input
              type="number"
              min="1"
              value={size}
              onChange={handleChange}
              placeholder="Enter grid size"
            />
          </label>
          <button className="button" type="submit">
             Generate Grid
          </button>
        </form>
      </div>
      <Grid size={gridSize} />

    </>
  );
}



//   return (
//     <div className="search">
//       <label>
//         Enter a number:
//         <input
//           type="number"
//           placeholder="NxN Grid"
//           min="1"
//           value={size}
//           onChange={handleChange}
//         />
//       </label>
//       <input
//       className="button"
//       type="submit"
//       />
//     </div>
//   );
// }


// export default function Form() {
//     return(
//         <div class="grid-container">
//         <div class="item"></div>
//         <div class="item"></div>
//         <div class="item"></div>
//         <div class="item"></div>
//         </div>
//     )
// }
