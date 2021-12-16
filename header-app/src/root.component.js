import React, { useState, useEffect, Component } from "react";
import { getData, state$ } from "@app/utility";
import "./root.component.css";

export default function Root(props) {
  const [dataForList, setDataForList] = useState({});

  const [localData, setLocalData] = useState([
    {
      name: "List item 1",
      value: "List item 1",
    },
    {
      name: "List item 2",
      value: "List item 2",
    },
    {
      name: "List item 3",
      value: "List item 3",
    },
  ]);

  React.useEffect(() => {
    const subscription = state$.subscribe((data) => {
      //console.log("react ", data);
      setDataForList(data);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const propsData = Array.from(dataForList);
  const localpropsData = Array.from(localData);

  const addItem = (index) => {
    let propsData1 = Array.from(dataForList);
    console.log(propsData1);

    propsData1.push({
      name: "List item 3",
      value: "List item 3",
    });
    setDataForList(propsData1);

    state$.next(propsData1);
  };

  const removeItem = (index) => {
    // console.log('removeItem');
    // console.log(index);
    //  for (let [i, user] of propsData.entries()) {
    //     if (user.name == "Tim") {
    //         users.splice(i, 1);
    //     }
    //  }
  };

  return (
    <div>
      <nav className="nav">
        <a href="/page1" className="link">
          Angular
        </a>
        <a href="/page2" className="link">
          React
        </a>
      </nav>
      <div className="divText">
        anything:
        <ul>
          {propsData.map((el, index) => (
            <li key={index}>
              {" "}
              <img
                src="https://img.icons8.com/fluency/48/000000/minus.png"
                onClick={({ index }) => removeItem({ index })}
              />{" "}
              {el.value}{" "}
            </li>
          ))}
          {localpropsData.map((el, index) => (
            <li key={index}>
              {" "}
              <img
                src="https://img.icons8.com/color/48/000000/plus-math.png"
                onClick={({ index }) => addItem({ index })}
              />
              {el.value}{" "}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
