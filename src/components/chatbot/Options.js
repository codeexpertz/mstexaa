import React from "react";

const Options = (props) => {
  const options = [
    { text: "Hello", handler: props.actionProvider.greet, id: 1 },
    {
      text: "What is your name?",
      handler: props.actionProvider.handleName,
      id: 2,
    },
    {
      text: "How can I contact support?",
      handler: props.actionProvider.handleContact,
      id: 3,
    },
    // Add more options here
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;
