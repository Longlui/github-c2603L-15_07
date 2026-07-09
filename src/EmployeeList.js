function EmployeeList(props) {

    const { employees } = props;

    return (
        <div>

            <h3>Danh sách nhân viên</h3>

            <ul>

                {
                    employees.map(function(EmployeeName) {

                        return (
                            <li>{EmployeeName}</li>
                        );

                    })
                }

            </ul>

            <h3>Tổng số nhân viên: {employees.length}</h3>

        </div>
    );

}

export default EmployeeList;