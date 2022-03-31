import React from "react";
import { useState } from "react";
import "mathjs";
import { number, splitUnit } from "mathjs";
export const AddTask = (props) => {
  let today = new Date();

  const [todoData, settodoData] = useState({
    taskTitle: "add the task title here",
    startingDate: new Date(),
    finishingDate: new Date(),
    taskHoursLeft: 0,
    taskMinutesLeft: 0,
    taskDescription: "notMyrealPassword",
    status: false,
  });

  let tasks = [];
  let totalTime = Math.abs(
    new Date(todoData.finishingDate) - new Date(todoData.startingDate)
  );

  let hoursLeft = Math.floor(totalTime / 60 / 1000 / 60);
  let minutesLeft = Math.floor(
    (totalTime - hoursLeft * 60 * 60 * 1000) / 1000 / 60
  );
  const changeHandler = (e) => {
    if (e.target.id == "startingDate") {
      settodoData({
        ...todoData,
        startingDate: e.target.value,
      });
      console.log(todoData.startingDate);
    }
    if (e.target.id == "taskTitle") {
      settodoData({ ...todoData, taskTitle: e.target.value });
      console.log(e.target.value);
    }
    if (e.target.id == "finishingDate") {
      console.log(todoData.finishingDate);

      settodoData({
        ...todoData,
        finishingDate: e.target.value,
      });
    }
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          todoData.taskHoursLeft = hoursLeft;
          todoData.taskMinutesLeft = minutesLeft;
          tasks.push(todoData);
          props.sendArray(tasks);
          console.log(tasks);
          console.log(todoData.remainingDate);
        }}
      >
        <div> enter task title</div>
        <input
          value={todoData.taskTitle}
          id="taskTitle"
          onChange={changeHandler}
        />
        {/* starting date */}
        <div className="card rounded-3 bg-info m-5">
          <div className="card-header">choose when the task starts</div>

          <div className="card-body">
            <input
              id="startingDate"
              type="datetime-local"
              value={todoData.startingDate}
              onChange={changeHandler}
            />
          </div>
        </div>
        {/* finishing date */}
        <div className="card rounded-3 bg-success m-5">
          <div className="card-header">choose when the task ends</div>

          <div className="card-body">
            <input
              id="finishingDate"
              type="datetime-local"
              value={todoData.finishingDate}
              onChange={changeHandler}
            />
          </div>
        </div>
        <div>
          <input type="submit" id="submit" />
        </div>
      </form>
    </div>
  );
};
