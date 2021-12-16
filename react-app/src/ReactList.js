import React, { Component } from "react";
export default class ReactList extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //     dataForList: [{
    //         "name":"df",
    //         "value":"sfd"
    //     }]
    // }

    // this.state = {dataForList:this.props.propsData};
  }

  render() {
    const propsData = Array.from(this.props.propsData);
    console.log(propsData);
    return (
      <ul>
        {propsData.map((el, index) => (
          <li key={index}> {el.value} </li>
        ))}
      </ul>
    );
  }
}
