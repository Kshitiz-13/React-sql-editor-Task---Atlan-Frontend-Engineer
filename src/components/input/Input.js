import React from "react";
import { Button } from "../reusable/Button";

const Input = ({ setQuery, value, setValue }) => {
  const onChange = (newValue) => {
    setValue(newValue);
  };

  const handelSubmit = () => {
    var inputValue = value
      .toLowerCase()
      .slice(value.indexOf("from") + "from".length);
    setQuery(inputValue.split(" ")[1]);
  };

  return (
    <main className="col-start-2 col-end-3 row-start-2 row-end-3 mx-6 my-12 lg:mx-12">
      <label htmlFor="editor">
        <input
          id="editor"
          class="
        form-control
        block
        w-full
        h-10
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
          }}
          placeholder="Enter a valid query or select from Sidebar"
        />
      </label>
      <div>
        <Button handleClick={handelSubmit}>▶️ Run Query</Button>
      </div>

      <div>
        {" "}
        <p>Example: select * from mock</p>
        <p>Example: select * from customers</p>
      </div>
    </main>
  );
};

export default Input;
