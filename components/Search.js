import styled from "styled-components";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { SearchCountry } from "../store/actions/countryActions";
import { CountryRegion } from "../store/actions/countryActions";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

export default function Search({ selectItem, setSelectItem }) {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [textInput, setTextInput] = useState("");
  const dispatch = useDispatch();

  const getTextHandler = (e) => {
    setTextInput(e.target.value);
  };
  const submitFormHandler = (e) => {
    e.preventDefault();

    dispatch(SearchCountry(textInput));
    setTextInput("");
  };

  const toggleSelect = () => {
    setToggleDropdown(!toggleDropdown);
  };
  const selectOption = (option) => {
    setToggleDropdown(false);
    setSelectItem(option);

    dispatch(CountryRegion(option));
  };

  const options = ["Africa", "America", "Asia", "Europe", "Oceania"];

  return (
    <Container>
      <SearchContainer>
        <div className="row">
          <form onSubmit={submitFormHandler}>
            <input
              type="text"
              name="search"
              placeholder="Search for a country.."
              value={textInput}
              onChange={getTextHandler}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ionicon"
              viewBox="0 0 512 512"
              width="26px"
              height="26px"
            >
              <path d="M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z" />
            </svg>
          </form>
        </div>
        <div className="row">
          <div className="dropdown">
            <div className="dropdown-btn" onClick={toggleSelect}>
              <span>{selectItem ? selectItem : "Filter by Region"}</span>
              <span>
                <FontAwesomeIcon
                  icon={toggleDropdown ? faCaretUp : faCaretDown}
                />
              </span>
            </div>
            {toggleDropdown && (
              <div className="dropdown-content">
                {options.map((option) => (
                  <div
                    className="dropdown-item"
                    key={uuidv4()}
                    onClick={() => selectOption(option)}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </SearchContainer>
    </Container>
  );
}

const Container = styled.div`
  background: ${(props) => props.theme.body};
  color: ${(props) => props.theme.fontColor};
  padding: 2rem 3rem;

  @media screen and (max-width: 765px) {
    padding: 2rem 1rem;
  }
`;

const SearchContainer = styled.div`
  
  display: flex;
  justify-content:space-between;
  align-items: center;
  .row {
    form{
      position:relative;
    input {
      width:100%;
      padding: 0.8rem 0rem .8rem 3rem;
      border: none;
      background-color: ${(props) => props.theme.navColor};
      border-radius: 0.2rem;
      color: ${(props) => props.theme.input};
      box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.1);
      &:focus {
        outline: none;
      }
    }
    svg{
        position: absolute;
        left: 0;
        top: 0px;
        padding: 9px 8px;
        fill: ${(props) => props.theme.fontColor};
      }
  }
    .dropdown {
      width: 10rem;
      color: ${(props) => props.theme.fontColor};
      position: relative;
      font-size: 0.9rem;
      left: 0;
      .dropdown-btn {
        padding: 0.8rem;
        box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.1);
        background: ${(props) => props.theme.navColor};
        border-radius: 0.2rem;
        cursor: pointer;
        display:flex;
        justify-content:space-between;
        
      }
      .dropdown-content {
        position: absolute;
        top: 110%;
        padding: 0.4rem 0;
        box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.1);
        background: ${(props) => props.theme.navColor};
        border-radius: 0.2rem;
        width: 100%;
        .dropdown-item {
          padding: 0.5rem 0.8rem;
          cursor: pointer;
          transition: all 0.2s ease;
          &:hover {
            background: ${(props) => props.theme.hover};
          }
        }
      }
    }
  }
  @media screen and (max-width: 765px) {
    display:grid;
    grid-template-columns: 1fr;
   .row{
     form{
      input{
      width:85%;
      padding:1rem 0rem 1rem 2.5rem !important;
      margin:0;
    }
     }
     .dropdown{
       margin:1rem 0;
     }
    
   }
    }
  }
`;
