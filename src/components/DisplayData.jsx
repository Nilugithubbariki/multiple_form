import React, { useContext } from "react";
import {
  TableContainer,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Table,
} from "@mui/material";
import { multiStepContext } from "../ContextApi";
const DisplayData = () => {
  const { finalData } = useContext(multiStepContext);
  return (
    <div>
      <TableContainer style={{ display: "flex", justifyContent: "center" }}>
        <Table
          border="1"
          style={{ width: "70%", justifyContent: "center" }}
          size="small"
          aria-label="caption table"
        >
          <TableHead>
            <TableRow
              style={{ backgroundColor: "burlywood", color: "aliceblue" }}
            >
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Contact Number</TableCell>
              <TableCell>Email Address</TableCell>
              <TableCell>Country</TableCell>
              <TableCell>District</TableCell>
              <TableCell>City</TableCell>
              <TableCell>Landmark</TableCell>
              <TableCell>Postal Code</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {finalData.map((item) => {
              return (
                <TableRow key={item.email}>
                  <TableCell>{item.firstname}</TableCell>
                  <TableCell>{item.lastname}</TableCell>
                  <TableCell>{item.contact}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{item.country}</TableCell>
                  <TableCell>{item.district}</TableCell>
                  <TableCell>{item.city}</TableCell>
                  <TableCell>{item.land}</TableCell>
                  <TableCell>{item.postal}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DisplayData;
