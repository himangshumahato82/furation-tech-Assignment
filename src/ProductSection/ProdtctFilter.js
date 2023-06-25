import React, { useContext, useEffect } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { myContext } from "./Context/Context";
import "./ProductFilter.css";

const Sort = () => {
  let [state, setState] = React.useState([]);
  
  let [toggle, setToggle] = React.useState(null);
  let [load, setLoad] = React.useState(false);
 
  let setfunc = useContext(myContext).fn;
  let paramName = useContext(myContext).name;
  useEffect(() => {
    console.log(toggle);
    if (toggle === 1) {
      console.log("in");
      data1();
    } else if (toggle === 2) {
      data();
    }
    

    if (state.length === 0) {
      fetchData();
    }
  }, [state, load]);

  const fetchData = async () => {
    let res = await fetch(
      `http://localhost:3004/data/?department=${paramName}`
    );
    let data = await res.json();
    setfunc(data);
  };

  // Handling Department Sort start----------------------------->
  const handleChange = (e) => {
    let { value, checked } = e.target;
    if (checked === false) {
      let newArr = state.filter((el) => {
        return el !== value;
      });
      setState(newArr);
      return;
    }
    setState([...state, value]);
    setToggle(2);
    setLoad((prev) => !prev);
  };

  const data = async () => {
    // console.log(state);
    if (state.length > 0) {
      let res = await fetch(
        "http://localhost:3004/data"
      );
      let data = await res.json();

      let arr;
      var arr3 = [];
      for (let i = 0; i < state.length; i++) {
        arr = data.filter((el) => {
          return el.department === state[i];
        });
        arr3 = [].concat(arr, arr3);
      }
      console.log(arr3);
      setfunc(shuffle(arr3));
      // setLoad((prev) => !prev);
    }
  };

  // handling department sort Ends------------------------->

  // handling brand sort Start---------------------------------->

  

  const data1 = async () => {
    if (state.length > 0) {
      let res = await fetch(
        "http://localhost:3004/data"
      );
      let data = await res.json();
      console.log(data);
      let arr;
      var arr4 = [];
      for (let i = 0; i < state.length; i++) {
        arr = data.filter((el) => {
          return el.brand === state[i];
        });
        console.log(arr);
        arr4 = [].concat(arr4, arr);
      }
      console.log(arr4);

      setfunc(shuffle(arr4));
      // setLoad((prev) => !prev);
    }
  };

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "white",
        borderRadius: "8px 8px 0px 0px",
      }}
    >
      {/* ,backgroundColor:"red" */}
      <div
        style={{
          height: "40px",
          width: "100%",
          backgroundColor: "#F5F5F5",
          display: "flex",
          padding: "19px",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: "8px 8px 0px 0px",
        }}
      >
        <h2 style={{ fontWeight: "600", fontSize: "17px" }}>Filters</h2>
        <div>
          <h3 style={{ color: "red", cursor: "pointer" }}>
            <u>Clear All</u>
          </h3>
        </div>
      </div>
      <br />
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "8px 8px 0px 0px",
          padding: "8px",
        }}
      >
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem id="div" mb="10px">
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <p className="filterhead">Book 's sort by author</p>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <CheckboxGroup colorScheme="green">
                <Box
                  display="flex"
                  flexDirection="column"
                  spacing={[1, 5]}
                  direction={["column", "row"]}
                >
                  <Checkbox onChange={handleChange} value="Brain Tracy">
                    <span className="checkboxtext">Brain Tracy</span>
                  </Checkbox>
                  <Checkbox onChange={handleChange} value="JK Rowling">
                    <span className="checkboxtext">JK Rowling</span>
                  </Checkbox>
                  <Checkbox onChange={handleChange} value="Paulo Coelho">
                  <span className="checkboxtext">Paulo Coelho</span>
                </Checkbox>
                  
                 
                 
                 
                </Box>
              </CheckboxGroup>
            </AccordionPanel>
          </AccordionItem>

         
          <br />
          <br />
          <br />
          <br />
          <br />
        </Accordion>
      </div>
    </div>
  );
};

export default Sort;
