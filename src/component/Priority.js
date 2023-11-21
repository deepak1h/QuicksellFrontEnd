import React from 'react';
import {FcOk , FcClock, FcExpired, FcPlus, FcCancel, FcHighPriority, FcLowPriority, FcMediumPriority,FcLeave } from "react-icons/fc";
import { AiOutlinePlus, AiOutlineEllipsis} from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { FaSignal } from "react-icons/fa";
import { MdOutlineSignalCellularAlt, MdOutlineSignalCellularAlt2Bar, MdOutlineSignalCellularAlt1Bar} from "react-icons/md";
import { RiArrowDropDownLine, RiDropdownList } from "react-icons/ri";

const PriorityIcon = ({ priority }) => {
  const getPriorityIcon = () => {
    switch (priority) {
      case 'Dropdown':
        return <RiArrowDropDownLine  />;
      case 'DropdownMenu':
          return <RiDropdownList  />;
      case 'In progress':
        return <FcClock  />;
      case 'Todo':
        return <FcPlus   />;
      case 'Backlog':
        return <FcExpired  />;
      case 'Done':
        return <FcOk />;
      case 'Canceled':
        return <FcCancel  />;
      case 'plus':
        return <AiOutlinePlus />;
      case 'dots':
        return <BsThreeDots  />;
      case 'dot':
        return <GoDotFill  />;
      case 'No priority':
        return <AiOutlineEllipsis  />;
      case 'Low':
        return <FcLowPriority />;
      case 'Medium':
        return <FcMediumPriority  />;
      case 'High':
        return <FcLeave />;
      case 'Urgent':
        return <FcHighPriority  />;
      case 0:
        return <MdOutlineSignalCellularAlt1Bar  />;
      case 1:
        return <MdOutlineSignalCellularAlt2Bar />;
      case 2:
        return <MdOutlineSignalCellularAlt  />;
      case 3:
        return <FaSignal />;
      case 4:
        return <FcHighPriority  />;
      default:
        return null;
    }
  };

  return (
    <div>
      {getPriorityIcon()}
    </div>
  );
};

export default PriorityIcon;
