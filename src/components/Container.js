import React from "react";

function Container({
  header,
  children,
  textPosition = "", // possible values: left, right, center
  direction = "horizontal", // possible values: vertical, horizontal
  contentPosition = "center", // possible values: left, right, center
}) {
  return (
    <div className={`container ${textPosition}`}>
      {header ? <h2>{header}</h2> : null}

      <div className={`container-children ${direction} ${contentPosition}`}>
        {children}
      </div>
      <div class="container">
  <h1>Hello, I'm in a container!</h1>
  <p>I'm a description!</p>
</div>
    </div>
  );
}
function Header(props){
  return (
<div className="container" >
  <h1>{props.header}</h1>
  <p>{props.description}</p>
   </div>

  );
}

function Example(props) {
  return <div>{props.exampleProp}</div>;
}

<Example exampleProp="example value" />;


export default Container;
