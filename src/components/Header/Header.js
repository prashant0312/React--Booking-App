import React, { useState } from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendarDays,
  faCar,
  faHotel,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";





function Header({type}) {

  const[getDestination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [getOptions, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const onOptionHandler = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]:
          operation === "increase"
            ? getOptions[name] + 1
            : getOptions[name] - 1,
      };
    });
  };

  const navigate = useNavigate()

  const onSearchHandler = () => {
      navigate("/hotels", {state: { getDestination, date, getOptions }})
  }

  return (
    <div className="header">
      <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faHotel} />
            <span>Stays</span>
          </div>

          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} className="headerIconItem" />
            <span>Flights</span>
          </div>

          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} className="headerIconItem" />
            <span>Car Rentals</span>
          </div>

          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} className="headerIconItem" />
            <span>Attractions</span>
          </div>

          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} className="headerIconItem" />
            <span>Airport Taxis</span>
          </div>
        </div>
        { type !== "list" &&
          <> 
            <h1 className="headerTitle">
            Discounts for the rest of your life? That's a genius idea.
            </h1>
            <p className="headerDesc">
                Join MH Booking for free and earn instant savings of 10% or more on your travels. 
            </p>
            <button className="headerBtn">Sign In</button>

            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>

              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText"
                >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                  date[0].endDate,
                  "dd/MM/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>

              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText"
                >{`${getOptions.adult} adult . ${getOptions.children} children . ${getOptions.room} room`}</span>
                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Adult</span>
                      <div className="optionCounter">
                        <button
                          disabled={getOptions.adult <= 1}
                          onClick={() => onOptionHandler("adult", "decrease")}
                          className="optionCounterButton"
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {getOptions.adult}
                        </span>
                        <button
                          onClick={() => onOptionHandler("adult", "increase")}
                          className="optionCounterButton"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="optionItem">
                      <span className="optionText">Children</span>
                      <div className="optionCounter">
                        <button
                          disabled={getOptions.children <= 0}
                          onClick={() =>
                            onOptionHandler("children", "decrease")
                          }
                          className="optionCounterButton"
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {getOptions.children}
                        </span>
                        <button
                          onClick={() =>
                            onOptionHandler("children", "increase")
                          }
                          className="optionCounterButton"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="optionItem">
                      <span className="optionText">Room</span>
                      <div className="optionCounter">
                        <button
                          disabled={getOptions.room <= 1}
                          onClick={() => onOptionHandler("room", "decrease")}
                          className="optionCounterButton"
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {getOptions.room}
                        </span>
                        <button
                          onClick={() => onOptionHandler("room", "increase")}
                          className="optionCounterButton"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <button onClick={onSearchHandler} className="headerBtn">Search</button>
              </div>
            </div>
          </>
        }
      </div>
    </div>
    
  );
}

export default Header;
