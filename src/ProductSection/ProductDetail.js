import React, { useEffect, useContext, useState } from "react";
import {
  Box,
  Heading,
  Image,
  Text,
  Button,
 
} from "@chakra-ui/react";
import ProductOffer from "./ProductOffer";


import { Link, useParams } from "react-router-dom";
import "./ProductDetails.css";
import Productwishlist from "./Productwishlist";
import { useToast } from "@chakra-ui/react";
import { LoginContext } from "./Context/Context";


const ProductDetail = () => {
 
  const { loginInfo } = useContext(LoginContext);
 
  const toast = useToast();
  let [productdata, setproductdata] = useState([]);
  let { id } = useParams();
  let [cartdata, setcartdata] = useState([]);
  let [disabled, setDisable] = useState(false);
  let cartdatalocal = JSON.parse(localStorage.getItem("cartdata")) || [];
  // const { loginInfo, setloginInfo } = useContext(LoginContext);
  

  const buyNow = async (value) => {

    if (loginInfo !== "{}") {
      let temp = [...cartdatalocal, value];
      setcartdata(temp);
      localStorage.setItem("cartdata", JSON.stringify(temp));
      toast({
        title: "Added to Buy",
        status: "success",
        position: "top",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Login first",
        status: "error",
        position: "top",
        duration: 3000,
        isClosable: true,
      });
    }
    // console.log("addto bag")
  };
  

  const addNow = async (value) => {
    if (loginInfo !== "{}") {
      let temp = [...cartdatalocal, value];
      setcartdata(temp);
      localStorage.setItem("cartdata", JSON.stringify(temp));
      toast({
        title: "Added to cart",
        status: "success",
        position: "top",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Login first",
        status: "error",
        position: "top",
        duration: 3000,
        isClosable: true,
      });
    }
    // console.log("addto bag")
  };

  // const handleChange = (event) => {
  //   setsort(event.target.value);
  // };
  useEffect(() => {
    fetchproduct();
    let temp = cartdatalocal.filter((el) => {
      if (el.id ===id) {
        return el;
      }
    });
    if (temp.length !== 0) {
      setDisable(true);
    }
  }, [id, cartdata]);
  const fetchproduct = async () => {
    let res = await fetch(
      `http://localhost:3004/data/${id}`
    );
    let data = await res.json();
    setproductdata(data);
  };
  let obj = productdata;
 
  let offer1 = {
    img: "https://www.tatacliq.com/src/pdp/components/img/bank_offers.svg",
    detail: "15% off on AU Small Finance Bank Limited Debit & Credit Cards.",
    code: "Use Code: AUCLIQ300 | Min Purchase: ₹1500",
  };
  let offer2 = {
    img: "https://assets.tatacliq.com/medias/sys_master/images/27678831149086.png",
    detail: "15% off on HSBC Bank Credit & Debit Cards",
    code: "Use Code: HSBC500 | Min Purchase: ₹1000",
  };
  let offer3 = {
    img: "https://www.tatacliq.com/src/pdp/components/img/userOfferIcon.svg",
    detail: "15% off on AU Small Finance Bank Limited Debit & Credit Cards.",
    code: "Use Code: UPI | Max Discount: ₹300",
  };
  return (
    <div>
      <Box backgroundColor={"rgb(236,236,236)"}>
        <Box width="100%" margin={"auto"}>
          <Box backgroundColor={"#FFFFFF"} mt={"25px"}>
            <div className="ImageDetailDiv">
              <Box
                width={"100%"}
                backgroundColor={"#FFFFFF"}
                position={"relative"}
              >
                <Image
                  width="100%"
                  borderRadius={"5px"}
                  display="block"
                  margin="auto"
                  src={obj.img}
                />
                <Image
                  position={"absolute"}
                  top="10%"
                  width={"25%"}
                  left="-2%"
                  src="https://i.ibb.co/xL3pwP6/discounttag.png"
                />
              </Box>
              <Box backgroundColor={"#FFFFFF"} width="100%" mt={"30px"}>
                {/* NAME BRAND PRICE START */}
                <Box backgroundColor={"#FFFFFF"}>
                  <Box
                    backgroundColor={"#FFFFFF"}
                    display={"flex"}
                    width="100%"
                    margin="15px auto 5px 0px"
                    justifyContent="space-between"
                  >
                    <Heading
                      textAlign="left"
                      backgroundColor={"#FFFFFF"}
                      fontSize="20px"
                      fontWeight="600"
                      fontFamily="Rubik, sans-serif"
                      color="#181818"
                    >
                      {obj.brand}
                    </Heading>
                    <Box backgroundColor={"#FFFFFF"}>
                      <Productwishlist data={productdata} />
                    </Box>
                  </Box>
                  <Box backgroundColor={"#FFFFFF"} margin="5px auto 5px auto">
                    <Text
                      textAlign="left"
                      fontSize={"22px"}
                      fontWeight={"300"}
                      fontFamily="Rubik, sans-serif"
                    >
                      {obj.name}
                    </Text>
                  </Box>
                  <Box
                    backgroundColor={"#FFFFFF"}
                    display={"flex"}
                    margin="20px auto 5px auto"
                    alignItems="center"
                  >
                    <Text
                      mr={4}
                      textAlign="center"
                      backgroundColor={"#FFFFFF"}
                      fontSize="24px"
                      fontWeight={600}
                      color="#231F20"
                    >
                      ₹{obj.price}
                    </Text>
                    <Text
                      mr={4}
                      textAlign="center"
                      backgroundColor={"#FFFFFF"}
                      textDecoration={"line-through"}
                      fontSize="17px"
                      fontWeight={400}
                      color="#80797B"
                    >
                      MRP: ₹{obj.strikedprice}
                    </Text>
                    <Text
                      mr={4}
                      textAlign="center"
                      backgroundColor={"#FFFFFF"}
                      fontSize="17px"
                      fontWeight={600}
                      color="#499B1F"
                    >
                      (10% OFF)
                    </Text>
                  </Box>
                  <Box backgroundColor={"#FFFFFF"} margin="5px auto 5px auto">
                    <Text
                      backgroundColor={"#FFFFFF"}
                      textAlign={"left"}
                      fontSize="15px"
                      fontWeight={"14px"}
                      color="#80797B"
                    >
                      inclusive of all taxes
                    </Text>
                  </Box>
                  <Box backgroundColor={"#FFFFFF"} margin="25px auto 25px auto">
                    <Text backgroundColor={"#FFFFFF"} textAlign="left">
                      <span
                        style={{
                          textAlign: "left",
                          backgroundColor: "#49A862",
                          color: "#FFFFFF",
                          padding: "1px 4px",
                        }}
                      >
                        4.2
                      </span>{" "}
                      <span
                        style={{
                          textAlign: "left",
                          fontSize: "14px",
                          fontWeight: "600",
                          color: "#212121",
                        }}
                      >
                        30
                      </span>{" "}
                      <span
                        style={{
                          textAlign: "left",
                          fontSize: "14px",
                          fontWeight: "300",
                          color: "#212121",
                        }}
                      >
                        Ratings
                      </span>{" "}
                    </Text>
                  </Box>
                </Box>
                {/* NAME BRAND PRICE END */}

                {/* AVALIBLE OFFERS */}
                <Box backgroundColor={"#FFFFFF"} padding="15px auto 5px auto">
                  <Text
                    textAlign={"left"}
                    backgroundColor={"#FFFFFF"}
                    margin="25px auto 15px auto"
                    color="#231F20"
                    fontSize={"18px"}
                    fontWeight="600"
                  >
                    AVAILABLE OFFERS
                  </Text>
                  <ProductOffer obj={offer1} />
                  <ProductOffer obj={offer2} />
                  <ProductOffer obj={offer3} />
                </Box>
                {/* AVALIBLE OFFERS */}
                <Box
                  backgroundColor={"#FFFFFF"}
                  margin={"20px auto"}
                  display={"flex"}
                  justifyContent="left"
                  alignItems="center"
                >
                  <Link to="/cart">
                    <Button
                      _hover={{ backgroundColor: "red" }}
                      onClick={() => {
                        buyNow(productdata);
                      }}
                      cursor="pointer"
                      colorScheme="red"
                      color="white"
                      border="none"
                      width="195px"
                      height="45px"
                      margin={"2% 1%"}
                      padding="0px 15px"
                      fontSize="13px"
                      fontWeight={"600"}
                      backgroundColor={"rgb(218, 28, 92)"}
                      borderRadius="22px"
                      variant="outline"
                    >
                      BUY NOW
                    </Button>
                  </Link>
                  <Button
                    disabled={disabled ? true : false}
                    backgroundColor={disabled ? "grey" : "#FFFFFF"}
                    onClick={() => {
                      addNow(productdata);
                    }}
                    cursor={disabled ? "not-allowed" : "pointer"}
                    color={disabled ? "white" : "#FF1744"}
                    border={disabled ? "2px solid grey" : "2px solid #FF1744"}
                    margin={"2% 1%"}
                    width="195px"
                    height="45px"
                    padding="0px 15px"
                    fontSize="13px"
                    fontWeight={"600"}
                    borderRadius="22px"
                    variant="outline"
                  >
                    ADD TO BAG
                  </Button>
                  {/* {disabled?<Alert status='success' variant='subtle'>
                                <AlertIcon />
                                ADD to cart
                            </Alert>:""} */}
                </Box>

              
              </Box>
            </div>
          </Box>
        

        
        </Box>
      </Box>
    </div>
  );
};

export default ProductDetail;
