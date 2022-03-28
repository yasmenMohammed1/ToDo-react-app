import React, { useState } from "react";

const Display = function (props) {
  let displayedTasks = props.displayedtasks;
  //   displayedTasks.map((element) => {
  //     <>
  //       <tr>{element.taskTitle}</tr>
  //       <tr>{element.taskDescription}</tr>
  //       <tr>
  //         <label class="form-check-label" for="flexSwitchCheckDefault">
  //           finished
  //         </label>
  //       </tr>
  //     </>;
  //   });
  return (
    <div>
      <button
        onClick={() => {
          console.log(displayedTasks + "y");
        }}
      >
        {" "}
        get the tasks
      </button>
      <table class="table table-success table-striped"></table>
    </div>
  );
};

export default Display;
