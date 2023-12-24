import React from "react";
import "../Allcss.css/all.css";
import {  Input } from "@chakra-ui/react";
const MyBag = () => {
  return (
    <>
      <div id="mybag">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div>
           
          </div>
          <div>
            <h2>My Bag</h2>
          </div>
        </div>

        <div id="bagin">
          <p>Bengaluru</p>
          <Input
            variant="flushed"
            type="text"
            maxLength={"6"}
            placeholder="Change PIN Code...."
          />
        </div>
      </div>
    </>
  );
};

export default MyBag;
