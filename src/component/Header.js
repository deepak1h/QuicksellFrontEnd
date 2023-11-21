import React, { useEffect, useState } from "react";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { selectData } from "../Action";
import PriorityIcon from "./Priority";

const Header = () => {

  const { Tickets, allUser } = useSelector(state => state.data);
  const getDefaultGroup = () => {
    return localStorage.getItem("group") || "status";
  };
  const [selectedGroup, setSelectedGroup] = useState(getDefaultGroup());
  const [isDisplayDropdownOpen, setDisplayDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const getDefaultOrder = () => {
    return localStorage.getItem("order") || "priority";
  };
  const [selectedOrder, setSelectedOrder] = useState(getDefaultOrder());

  const handleSelectChange = (e, isGroup) => {
    if (isGroup) {
      setSelectedGroup(e.target.value);
      localStorage.setItem("group", e.target.value);
    } else {
      setSelectedOrder(e.target.value);
      localStorage.setItem("order", e.target.value);
    }

    setDisplayDropdownOpen(!isDisplayDropdownOpen);
  };

  useEffect(() => {
    const dataForSelection = selectedGroup === 'user' ? { Tickets, allUser } : Tickets;
    dispatch(selectData(selectedGroup, dataForSelection, selectedOrder));
  }, [Tickets, dispatch, selectedGroup, allUser, selectedOrder]);

  return (
    <div className="headContainer">
      <div className="buttonContainer">
        <button onClick={() => setDisplayDropdownOpen(!isDisplayDropdownOpen)}>
          <PriorityIcon priority={"DropdownMenu"}/> 
          {"Display"}
          <PriorityIcon priority={"Dropdown"}/>
        </button>
        {isDisplayDropdownOpen && (
          <div className="dropMenu">
            <div className="selectGroup">
              <span>Grouping</span>
              <select name="groupby" id="groupby" value={selectedGroup} onChange={(e) => handleSelectChange(e, true)} className="selectStyle">
                <option value="status">Status</option>
                <option value="user">User</option>
                <option value="priority">Priority</option>
              </select>
            </div>
            <div className="selectGroup">
              <span>Ordering</span>
              <select name="order" id="order" value={selectedOrder} onChange={(e) => handleSelectChange(e, false)} className="selectStyle">
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
