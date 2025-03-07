import React, { useState } from "react";

export default function Grid({ size }) {
  const [selected, setSelected] = useState(""); //initially selected is null

  const handleClick = (index) => {

    if (selected[index] === "red") return;   //if selected is red the return
    const rowInd = Math.floor(index / size);
    const colInd = index % size;
    const newSelected = [...selected]; 

    //  row
    for (let i = rowInd * size; i < rowInd * size + size; i++) {
      newSelected[i] = "red";
    }

    //  column
    for (let i = colInd; i < size * size; i += size) {
      newSelected[i] = "red";
    }
     //main-diagonal bottom
     for (let i = index; i < size * size; i += size + 1) {
      if (Math.floor(i / size) - rowInd === (i % size) - colInd) {
        newSelected[i] = "red";
      }
    }
    //main-diagonal top
    for (let i = index; i >= 0; i -= size + 1) {
      if (Math.floor(i / size) - rowInd === (i % size) - colInd) {
        newSelected[i] = "red";
      }
    }

    //anti-diagonal bottom
    for (let i = index; i < size * size; i += size - 1) {
      if (Math.floor(i / size) - rowInd === colInd - (i % size)) {
        newSelected[i] = "red";
      }
    }
    // anti-/diagonal top
    for (let i = index; i >= 0; i -= size - 1) {
      if (Math.floor(i / size) - rowInd === colInd - (i % size)) {
        newSelected[i] = "red";
      }
    }

    newSelected[index] = "blue";
    setSelected(newSelected);
  };

  const gridElements = [];
  for (let i = 0; i < size * size; i++) {
    gridElements.push(
      <div
        className="grid-item"
        style={{
          backgroundColor: selected[i],
        }}
        onClick={() => handleClick(i)}
      ></div>
    );
  }

  return (
    <div
      className="grid-container"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${size}, 1fr)`,
      }}
    >
      {gridElements}
    </div>
  );
}
        

// import React, { useState } from "react";

// function Grid({ size }) {
//   const [selectedItem, setSelectedItem] = useState(null);
//   const gridElements = [];

//   const handleClick = (index) => {
//     setSelectedItem(index);
//   };

//   for (let index = 0; index < size * size; index++) {
//     const rowInd = Math.floor(index / size);
//     const colInd = index % size;
//
//
//     gridElements.push(
//       <div
//         key={index}
//         className={`grid-item ${isBlue ? "blue" : isRed ? "red" : ""}`}
//         onClick={() => handleClick(index)}
//       ></div>
//     );
//   }

//

// export default Grid;

// import React, { useState } from "react";

// function Grid({ size }) {
//   const gridElements = [];
//   const [selectItem,setSelectItem] = useState();

//   for (let i = 0; i < size * size; i++) {
//     gridElements.push(<div className="grid-item"
//      onClick={() => handleClick(index)}></div>);
//   }

// export default Grid;

// import React from "react";

// function Grid({ size }) {
//   const gridElements = [];

//   for (let i = 0; i < size * size; i++) {
//     gridElements.push(<div className="grid-item"></div>);
//   }

// export default Grid;

// export default function Grid() {
//     return(
//         <div class="grid-container">
//         <div class="item"></div>
//         <div class="item"></div>
//         <div class="item"></div>
//         <div class="item"></div>
//         </div>
//     )
// }   


