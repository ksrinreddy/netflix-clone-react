import React from "react";
import { MdOutlineLanguage } from "react-icons/md";

const SelectLanguage = () => {
  return (
    <div className="language">
      <MdOutlineLanguage className="language__icon" />
      <select name="language" id="language" className="language__select">
        <option lang="en" value="language" className="language__option">
          English
        </option>
        <option lang="hi" value="language" className="language__option">
          Hindi
        </option>
      </select>
    </div>
  );
};

export default SelectLanguage;
