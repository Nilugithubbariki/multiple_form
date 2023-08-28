import React, { useContext } from "react";
import { Button, TextField } from "@mui/material";
import { multiStepContext } from "../ContextApi";

const ThirdStep = () => {
  const { setCurrentState, userData, setUserData, submitData } =
    useContext(multiStepContext);
  return (
    <div>
      <div>
        <TextField
          label="City"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={userData["city"]}
          onChange={(e) => setUserData({ ...userData, city: e.target.value })}
        />
      </div>
      <div>
        <TextField
          label="Land Mark"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={userData["land"]}
          onChange={(e) => setUserData({ ...userData, land: e.target.value })}
        />
      </div>
      <div>
        <TextField
          label="Postal Code"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={userData["postal"]}
          onChange={(e) => setUserData({ ...userData, postal: e.target.value })}
        />
      </div>
      <div>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setCurrentState(2)}
        >
          Back
        </Button>
        <span> </span>
        <Button variant="contained" color="primary" onClick={submitData}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default ThirdStep;
