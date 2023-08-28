import { Button, TextField } from "@mui/material";
import { multiStepContext } from "../ContextApi";
import { useContext } from "react";
const FirstStep = () => {
  const { setCurrentState, userData, setUserData } =
    useContext(multiStepContext);
  return (
    <div>
      <div>
        <TextField
          label="First name"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={userData["firstname"]}
          onChange={(e) =>
            setUserData({ ...userData, firstname: e.target.value })
          }
        />
      </div>
      <div>
        <TextField
          label="Last name"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={userData["lastname"]}
          onChange={(e) =>
            setUserData({ ...userData, lastname: e.target.value })
          }
        />
      </div>
      <div>
        <TextField
          label="Contact Number"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={userData["contact"]}
          onChange={(e) =>
            setUserData({ ...userData, contact: e.target.value })
          }
        />
      </div>
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setCurrentState(2)}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default FirstStep;
