import React, { useState } from "react";
import Button from "../../atoms/submit/submit";
import TextInputWithLabel from "../../molecules/TextInputWithLabel/TextInputWithLabel";
import Select from "../../atoms/Select/Select";

const FormOrganism: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    LastName: "",
    email: "",
  });

  const options = [
    { value: "male", label: "male" },
    { value: "female", label: "female" },
    { value: "other", label: "other" },
  ];
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("submitted");
    const message = `${formData.firstName},${formData.LastName},${formData.email},${selectedOption}`;
    alert(message);
  };
  return (
    <>
      <form>
        <TextInputWithLabel
          label="FirstName"
          type="text"
          onChange={handleChange}
          value={formData.firstName}
          name="firstName"
          placeholder="firstname"
        ></TextInputWithLabel>
        <TextInputWithLabel
          label="LastName"
          type="text"
          onChange={handleChange}
          value={formData.LastName}
          name="LastName"
          placeholder="LastName"
        ></TextInputWithLabel>
        <TextInputWithLabel
          label="Email"
          type="email"
          onChange={handleChange}
          value={formData.email}
          name="email"
          placeholder="Email"
        ></TextInputWithLabel>
        <Select
          id="my-select"
          options={options}
          value={selectedOption}
          onChange={(e) => {
            setSelectedOption(e.target.value);
          }}
        ></Select>
        <Button text="submit" onClick={handleClick}></Button>
      </form>
    </>
  );
};
export default FormOrganism;
