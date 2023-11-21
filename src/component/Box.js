import React from "react";
import { useSelector } from "react-redux";
import "./Box.css";
import Card from "./Card";
import Status from './Status';
import PriorityIcon from './Priority';



const Box = () => {
  const { selectedData, user } = useSelector(
    (state) => state.selectedData
  );
  
  if (!selectedData) {
    return null;
  }

  return (
    <div className="boxContainer">
      {selectedData.map((group, index) => (
        <div key={index} className="boxCardContainer">
          <div className="boxcardHead">
            <div className="userInfo">
              {!user ? (
                  <PriorityIcon priority={group[index]?.title}/>
              ) : (
                  <Status userId={group[index]?.value[0]?.userId} />
              )}
              {group[index]?.title} {group[index]?.value?.length}
            </div>
            <div className="icons">
              <PriorityIcon priority={"plus"}/>
              <PriorityIcon priority={"dots"}/>
            </div>
          </div>
          <div className="cardsList">
            {group[index]?.value?.map((item, ind) => (
              <Card key={ind} id={item.id} title={item.title} tag={item.tag} status={item.userId} priority={item.priority}/>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Box;
