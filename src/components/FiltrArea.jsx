import React from "react";
import Form from "react-bootstrap/Form";

const FiltrArea = (props) => {
  return (
    <div className="filtr_area">
      <Form.Check
        inline
        label={props.area}
        name="group1"
        // type={type}
        // id={`inline-${type}-1`}
      />
    </div>
  );
};

export default FiltrArea;
