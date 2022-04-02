import React, { useState } from "react";

const Display = function (props) {
  let [displayedTasks, setDisplayedTasks] = useState([]);

  return (
    <div>
      {/* <h1>displayed elements {displayedTasks.taskTitle}</h1> */}
      <button
        onClick={() => {
          setDisplayedTasks(props.sentArray());
        }}
      >
        get the tasks
      </button>
      <button
        onClick={() => {
          console.log(displayedTasks);
        }}
      >
        here's the main test
      </button>
      <table class="table table-success table-striped">
        <tbody className="text-center">
          {displayedTasks.map((element, index) => {
            console.log(index);
            return (
              <>
                {" "}
                <tr>
                  <td className="rounded-3" key={index}>
                    {element.taskTitle}
                  </td>
                  <td className="rounded-3" key={index}>
                    {element.taskDescription}
                  </td>
                  <td className="rounded-3" key={index}>
                    {element.taskHoursLeft}
                  </td>
                  <td className="rounded-3" key={index}>
                    {element.taskMinutesLeft}
                  </td>
                </tr>{" "}
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Display;
