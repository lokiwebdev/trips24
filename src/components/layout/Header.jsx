import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Header = ({ type }) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };

  const location = useLocation();


  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="headerList">
          <div
            className={location.pathname === "/" ? "headerListItem active" : "headerListItem"}
            onClick={() => { navigate("/") }}
          >
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
            {/* <span onClick={handleStays}>Stays</span> */}
          </div>

          <div
            className={location.pathname === "/flights" ? "headerListItem active" : "headerListItem"}
            onClick={() => { navigate("/flights") }}
          >
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
            {/* <span onClick={handleFlights}>Flights</span> */}
          </div>

          <div
            className={location.pathname === "/cars" ? "headerListItem active" : "headerListItem"}
            onClick={() => { navigate("/cars") }}
          >
            <FontAwesomeIcon icon={faCar} />
            <span >Car rentals</span>
          </div>

          <div className={location.pathname === "/attractions" ? "headerListItem active" : "headerListItem"} onClick={() => { navigate("/attractions") }}>
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className={location.pathname === "/airporttaxis" ? "headerListItem active" : "headerListItem"} onClick={() => { navigate("/airporttaxis") }}>
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Header;
