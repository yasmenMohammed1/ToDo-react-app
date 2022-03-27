import React from "react";
import { useState } from "react";
export const AddTask = () => {
  const [todoData, settodoData] = useState({
    taskTitle: "add the task title here",
    startingDate: new Date(),
    finishingDate: new Date(),
    // taskTime: finishingDate - startingDate,

    taskDescription: "notMyrealPassword",
  });
  let startingHours;
  let finishingHours;

  // const diffTime = Math.abs(todoData.startingDate - date1); //! give me the milllseconds
  //   const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); //TODO GIVE ME THE DAYES
  //   console.log(diffTime + " milliseconds");
  //   console.log(diffDays + " days");
  const changeHandler = (e) => {
    if (e.target.id == "startingDate") {
      settodoData({
        ...todoData,
        startingDate: new Date(e.target.value),
      });
      console.log(todoData.startingDate);
    }
    if (e.target.id == "finishingDate") {
      console.log(todoData.finishingDate);

      settodoData({
        ...todoData,
        finishingDate: new Date(e.target.value),
      });
    }
  };
  return (
    <div>
      enter data title
      {/* starting date */}
      <div className="card rounded-3 bg-info m-5">
        <div className="card-header">choose when the task ends</div>

        <div className="card-body">
          <input
            id="startingDate"
            type="date"
            value={todoData.startingDate.toISOString().split("T")[0]}
            onChange={changeHandler}
          />
          <input
            type="time"
            value={todoData.startingHours}
            onChange={(e) => {
              startingHours = e.target.value;
              console.log(e.target.value, startingHours + "starting hourd");
            }}
          />
        </div>
      </div>
      {/* finishing date */}
      <div className="card rounded-3 bg-success m-5">
        <div className="card-header">choose when the task ends</div>

        <div className="card-body">
          <input
            id="finishingDate"
            type="date"
            value={todoData.finishingDate.toISOString().split("T")[0]}
            onChange={changeHandler}
          />
          <input
            type="time"
            value={finishingHours}
            onChange={(e) => {
              finishingHours = e.target.value;
              console.log(e.target.value, finishingHours + "finishing hourd");
            }}
          />
        </div>
      </div>
      <input
        value={todoData.taskTitle}
        id="taskTitle"
        onChange={(e) => {
          console.log(e.target.value - startingHours);
        }}
      />
    </div>
  );
};
