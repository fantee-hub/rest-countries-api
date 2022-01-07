import styled from "styled-components";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Search({ selectItem, setSelectItem }) {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  const toggleSelect = () => {
    setToggleDropdown(!toggleDropdown);
  };
  const selectOption = (option) => {
    setToggleDropdown(false);
    setSelectItem(option);
  };

  const options = ["Africa", "America", "Asia", "Europe", "Oceania"];

  return (
    <Container>
      <SearchContainer>
        <div className="row">
          <input type="text" name="search" placeholder="search" />
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
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .row {
    input {
      padding: 0.8rem 2rem;
      border: none;
      background: hsl(209, 23%, 22%);
      width: 20rem;
      border-radius: 0.2rem;
      color: #ffffff;
      box-shadow: 3px 3px 10px 5px rgba(0, 0, 0, 0.1);
      &:focus {
        outline: none;
      }
    }
    .dropdown {
      width: 10rem;
      margin: 0 auto;
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
`;
