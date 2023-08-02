import React from "react";
import Form from "react-bootstrap/Form";


const FiltrEquipment = (props) => {
  return (
    <div className="filtr_equipment">
      <Form.Check
        inline
        label={props.equipmentText}
        name="group1"
        // type={type}
        // id={`inline-${type}-1`}
      />
    </div>
  );
};

export default FiltrEquipment;
