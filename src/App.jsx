import React, { useState } from "react";
// import styled from "styled-components";
// import { NaverMapsProvider } from "react-naver-maps";

// export const MapDiv = styled.div``;

function App() {
  const [minutes, setMinutes] = useState("");
  const onChange = (event) => {
    setMinutes(event.target.value);
  };
  return (
    <>
      <div>
        <h1>Super Converter</h1>
        <input
          value={minutes}
          placeholder="Minutes"
          type="number"
          onChange={onChange}
        />
        <h4>you want to convert {minutes} </h4>
        <input placeholder="Hours" type="number" />
      </div>

      {/* <NaverMapsProvider
        ncpClientId="MY_NAVERMAPS_CLIENT_ID"
        // or finClientId, govClientId
      >
        <MyMap />
      </NaverMapsProvider> */}
    </>
  );
}

export default App;
