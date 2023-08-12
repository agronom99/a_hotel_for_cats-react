import React from "react";
import Form from "react-bootstrap/Form";


const FiltrEquipment = () => {
  return (
    <div className="filtr_equipment">
      <Form.Check
        inline
        label="Пустий номер"
        name="group1"
      />
        <Form.Check
        inline
        label="Лежак"
        name="group1"
      />
        <Form.Check
        inline
        label="Когтіточка"
        name="group1"
      />
        <Form.Check
        inline
        label="Ігровий комплекс"
        name="group1"
      />
        <Form.Check
        inline
        label="Хатинка"
        name="group1"
      />
    </div>
  );
};

export default FiltrEquipment;
