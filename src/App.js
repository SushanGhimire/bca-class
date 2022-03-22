import React, { useState } from "react";
import { inputFields } from "./formInputs";

const App = () => {
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    author: "",
    gender: "",
  });

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <center>
      <h1>{inputs.gender}</h1>
      <div>
        {inputFields.map((data, index) => {
          const { lable, name, type, placeholder, dropdown, list } = data;
          return (
            <div key={index}>
              <label htmlFor="">{lable}</label>
              {dropdown === true ? (
                <select
                  name={name}
                  value={inputs[name]}
                  onChange={handleChange}
                >
                  {list.map((listData, index) => {
                    const { name, value } = listData;
                    return (
                      <option value={value} key={index}>
                        {name}
                      </option>
                    );
                  })}
                </select>
              ) : (
                <input
                  type={type}
                  value={inputs[name]}
                  name={name}
                  placeholder={placeholder}
                  onChange={handleChange}
                />
              )}
            </div>
          );
        })}
      </div>
    </center>
  );
};

export default App;
