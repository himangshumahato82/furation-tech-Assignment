import "./NavBar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faFolder } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import { LoginContext } from "../ProductSection/Context/Context";
import { useContext } from "react";

function NavBar() {
 
  const [current, setcurrent] = useState(false);
  const [text, setText] = useState("");

  let { fn, valu } = useContext(LoginContext);

  let navigate = useNavigate();
 
  console.log(text);

  const products = [
    "Brain Tracy",
    "JK Rowling",
    "Paulo Coelho"
  ];

  function handinginputbox() {
    if (text.length > 1) {
      setcurrent(true);
    }

    if (text.length == 1) {
      setcurrent(false);
    }

    if (text == "") {
      setcurrent(false);
    }
  }

  function clickoninputdrop(targ) {
    console.log(targ);
    document.getElementById("right_lower_box_third_input_box_id").value = targ;
  }

  return (
    <div>
      <div id="main_navbar">
        <div id="navbar_left_box">
          
        </div>
        <div id="navbar_right_box">
        
          <div id="right_lower_box">
           
              {" "}
              <div className="right_lower_box_first">
               
              </div>
           
          
            <div className="right_lower_box_third">
              <input
                id="right_lower_box_third_input_box_id"
                className={
                  current
                    ? "right_lower_box_third_input_box whiteoninput"
                    : "right_lower_box_third_input_box"
                }
                onChange={(event) => {
                  setText(event.target.value);
                  handinginputbox();
                }}
                onKeyDown={(ev) => {
                  if (ev.key === "Enter") {
                    navigate(`/products/${text}`);
                    document.getElementById(
                      "right_lower_box_third_input_box_id"
                    ).value = "";
                    fn((prev) => !prev);
                    setcurrent(false);
                  }
                }}
                placeholder="Search By Author's Name"
              ></input>

              <div
                className={
                  current ? "hidden_box displayblock" : "hidden_box displayNOne"
                }
              >
                {products.map((elem) => {
                  return (
                    <div>
                      {elem.includes(text) ? (
                        <div className="inputdrop">
                          <h1
                            onClick={(ev) => {
                              clickoninputdrop(ev.target.innerText);
                            }}
                          >
                            {elem}
                          </h1>
                        </div>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="fourth_lower_box">
              <div>
                <div>
                  <h1 className="icon_heart">
                    <FontAwesomeIcon icon={faHeart} />
                  </h1>
                </div>
               
              </div>
              <div>
                <Link to="/cart">
                  <div>
                    <h1 className="icon_heart">
                      <FontAwesomeIcon icon={faFolder} />
                    </h1>
                  </div>
                </Link>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
