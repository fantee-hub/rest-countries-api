import styled from "styled-components";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { SearchCountry } from "../store/actions/countryActions";
import { CountryRegion } from "../store/actions/countryActions";
import { useDispatch } from "react-redux";

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
              placeholder="search"
              value={textInput}
              onChange={getTextHandler}
            />
          </form>
        </div>
        <div className="row">
          <div className="dropdown">
            <div className="dropdown-btn" onClick={toggleSelect}>
              {selectItem ? selectItem : "Filter by Region"}
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
  background: hsl(207, 26%, 17%);
  padding: 2rem 3rem;
  @media screen and (max-width: 765px) {
    padding: 2rem 1rem;
  }
`;

const SearchContainer = styled.div`
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  .row {
    form{
      width:95%;
    input {
      padding: 0.8rem 2rem;
      border: none;
      
      background: hsl(209, 23%, 22%);
      border-radius: 0.2rem;
      color: #ffffff;
      box-shadow: 3px 3px 10px 5px rgba(0, 0, 0, 0.1);
      &:focus {
        outline: none;
      }
    }
  }
  
  
    .dropdown {
      width: 10rem;
      
      color: #ffffff;
      position: relative;
      font-size: 0.9rem;
      left: 0;
      .dropdown-btn {
        padding: 0.8rem;
        box-shadow: 3px 3px 10px 5px rgba(0, 0, 0, 0.1);
        background: hsl(209, 23%, 22%);
        border-radius: 0.2rem;
        cursor: pointer;
      }
      .dropdown-content {
        position: absolute;
        top: 110%;
        padding: 0.4rem 0;
        box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.1);
        background: hsl(209, 23%, 22%);
        border-radius: 0.2rem;
        width: 100%;
        .dropdown-item {
          padding: 0.5rem 0.8rem;
          cursor: pointer;
          transition: all 0.3s ease;
          &:hover {
            background: hsl(207, 26%, 17%);
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
        width:90%;
      padding:1rem 1.2rem !important;
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
