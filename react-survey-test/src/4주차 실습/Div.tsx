import React, { useEffect } from "react";

export const Div = ({ forwardedRef }) => {
  useEffect(() => {
    console.log("Div:", forwardedRef.current);
  }, [forwardedRef.current]); // ref는 객체이므로 forwardedRef.current만 넣고 싶다면 변경하세요

  //   console.log("Div component rendered");
  //   console.log("forwardedRef:", forwardedRef);
  //   console.log("forwardedRef.current:", forwardedRef.current);
  return <div ref={forwardedRef}>Hello from Div!</div>;
};

/////// 아래 APP 코드
// import { useRef, useState } from "react";
// import "./App.css";
// import { Div } from "./input";

// function App() {
//   const [count, setCount] = useState(0);
//   const inputRef1 = useRef(1);
//   const inputRef2 = useRef(2);

//   console.log("inputRef1", inputRef1.current);
//   console.log("inputRef2", inputRef2.current);

//   return (
//     <>
//       <button onClick={() => setCount((c) => c + 1)}>Add</button>
//       <div>{count}</div>
//       <Div forwardedRef={count % 2 === 0 ? inputRef1 : inputRef2} />
//     </>
//   );
// }

// export default App;
