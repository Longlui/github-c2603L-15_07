import React from "react";
import { useState } from "react";

function EmployeeForm(props) {

  const { onAddEmployee } = props;

  const [name, setName] = useState("");

  function submitEmployee() {

    onAddEmployee(name);

    setName("");
  }

  return (
    <div>

      <input type="text" placeholder="Nhập tên nhân viên" value={name} onChange={(e) => setName(e.target.value)}/>

      <button onClick={submitEmployee}>Submit</button>

    </div>
  );
}

export default EmployeeForm;