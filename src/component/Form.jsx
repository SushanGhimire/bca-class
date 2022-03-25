import React, { useState } from "react";
import { errorHandler } from "./errorHandler";
import { inputFields } from "./formInputs";
const Form = () => {
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    author: "",
    gender: "",
  });

  const [errors, setErros] = useState({
    title: "",
    description: "",
    author: "",
    gender: "",
  });

  const handleChange = (e) => {
    const property = e.target.name;
    const value = e.target.value;

    const error = { ...errors };
    error[property] = errorHandler(property, value);

    setInputs({
      ...inputs,
      [property]: value,
    });

    setErros(error);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = ["title", "description", "gender"];
    const error = { ...errors };

    let submitForm = true;

    validation.forEach((val) => {
      let errorMessage = errorHandler(val, inputs[val]);
      error[val] = errorMessage;
      if (errorMessage) {
        submitForm = false;
      }
    });
    if (submitForm) {
      alert("success");
    }

    setErros(error);
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "auto",
      }}
    >
      <form onSubmit={handleSubmit}>
        {inputFields.map((data, index) => {
          const { lable, name, type, placeholder, dropdown, list } = data;
          return (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "10px",
              }}
            >
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
              <span
                style={{
                  color: "red",
                }}
              >
                {errors[name]}
              </span>
            </div>
          );
        })}
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
