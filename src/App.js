import { useState } from "react";
import EmployeeForm from "./EmployeeForm";
import EmployeeList from "./EmployeeList";

function App() {

  const [employees, setEmployees] = useState([]);

  function addEmployee(name) {

    if (name.trim() === "") {
      alert("Vui lòng nhập tên nhân viên");
      return;
    }

    
    var newEmployees = [];

    
    for (var i = 0; i < employees.length; i++) {
      newEmployees.push(employees[i]);
    }

    
    newEmployees.push(name);

    setEmployees(newEmployees);
  }

  return (
    <div>

      <h2>Ứng dụng Quản lý Nhân viên</h2>

      <EmployeeForm onAddEmployee={addEmployee}/>

      <EmployeeList employees={employees}/>

    </div>
  );
}

export default App;