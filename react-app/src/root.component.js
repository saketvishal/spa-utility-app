import React, { useState, useEffect, Component } from "react";
import { getData, state$ } from "@app/utility";
import ReactList from "./ReactList";

// export default class Root extends Component {
//           constructor(props){
//             super(props);
//             this.state = {
//                 dataForList: this.props.dataForList
//             }
//         }

//   const [dataForList, setDataForList] = useState({});

//   return (
//            {"sdf"};
//     )
//     ;

// }

export default function Root(props) {
  const [dataForList, setDataForList] = useState({});

  const [localData, setLocalData] = useState([
    {
      name: "List item 100",
      value: "List item 100",
    },
    {
      name: "List item 200",
      value: "List item 200",
    },
    {
      name: "List item 300",
      value: "List item 300",
    },
  ]);

  React.useEffect(() => {
    // getData("/data").then((data) => {
    //   console.log("react ", data);
    // });
    const subscription = state$.subscribe((data) => {
      //console.log("react ", data);
      setDataForList(data);
    });
    // state$.next({ name: "React Data" });
    // sessionStorage.setItem("shared", "React App data");
    // console.log("react storage ", localStorage.getItem("shared"));

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

    // state$.next(propsData1);
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
    <section>
      {props.name} is mounted!
      {/* {console.log("Vishal ", dataForList)} */}
      {/* <ReactList propsData={dataForList} />   */}
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
    </section>
  );
}
