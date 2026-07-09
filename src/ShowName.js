import React from "react";

function ShowName(props) {

  const { name, age,sdt, onChangeName,onChangeAge,onChangeSDT } = props;

  return (
    <div>
      <h2>Thông tin cá nhân</h2>

      <p>Họ tên: {name}</p>
      <p>Tuổi: {age}</p>
      <p>Số điện thoại:{sdt}</p>
      <input type="text" value={name} onChange={(e) => onChangeName(e.target.value)}/>
      <br></br>
      <input type="text" value={age} onChange={(e) => onChangeAge(e.target.value)}/>
      <br></br>
      <input type="text" value={sdt} onChange={(e) => onChangeSDT(e.target.value)}/>
    </div>
  );
}

export default ShowName;