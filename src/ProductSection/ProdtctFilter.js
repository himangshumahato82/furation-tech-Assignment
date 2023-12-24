import React, { useContext, useEffect, useState } from "react";
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
  const [state, setState] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [toggle, setToggle] = useState(null);
  const [load, setLoad] = useState(false);
  const setfunc = useContext(myContext).fn;
  // eslint-disable-next-line no-unused-vars
  const paramName = useContext(myContext).name;

  useEffect(() => {
    if (toggle === 1) {
      data1();
    } else if (toggle === 2) {
      data();
    }

    if (state.length === 0) {
      fetchData();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state, load]);

  const fetchData = async () => {
    try {
      let res = await fetch(
        `https://dummyjson.com/products/category/smartphones`
      );
      let data = await res.json();
      setOriginalData(data.products);
      setfunc(data.products);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

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
    // Your existing data function
    if (state.length > 0) {
      let res = await fetch(
        "https://dummyjson.com/products/category/smartphones"
      );
      let data = await res.json();

      let arr;
      var arr3 = [];
      for (let i = 0; i < state.length; i++) {
        arr = data.products.filter((el) => {
          return el.brand === state[i];
        });
        arr3 = [].concat(arr, arr3);
      }
      console.log(arr3);
      setfunc(shuffle(arr3));
      // setLoad((prev) => !prev);
    }
  
  };

  const data1 = async () => {
    // Your existing data1 function
    if (state.length > 0) {
      let res = await fetch(
        "https://dummyjson.com/products/category/smartphones"
      );
      let data = await res.json();
      console.log(data);
      let arr;
      var arr4 = [];
      for (let i = 0; i < state.length; i++) {
        arr = data.products.filter((el) => {
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

  const shuffle = (array) => {
    // Your existing shuffle function
    let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
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
  };

  const sortDataByPrice = () => {
    const sortedProducts = [...originalData].sort((a, b) => a.price - b.price);
    setfunc(sortedProducts);
    console.log(sortedProducts)
  };

  const showAllData = () => {
    setfunc(originalData);
  };

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "white",
        borderRadius: "8px 8px 0px 0px",
      }}
    >
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
                  <p className="filterhead">Smart Phone 's sort by Brand</p>
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
                  <Checkbox onChange={handleChange} value="Samsung">
                    <span className="checkboxtext">Samsung</span>
                  </Checkbox>
                  <Checkbox onChange={handleChange} value="OPPO">
                    <span className="checkboxtext">OPPO</span>
                  </Checkbox>
                  <Checkbox onChange={handleChange} value="Apple">
                    <span className="checkboxtext">Apple</span>
                  </Checkbox>
                </Box>
              </CheckboxGroup>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <button onClick={sortDataByPrice}>Sort by Price</button>
        <button onClick={showAllData}>Show All Data</button>
      </div>
    </div>
  );
};

export default Sort;
