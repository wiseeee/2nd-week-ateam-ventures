import React, { useState } from 'react';

interface CheckboxProps {
  name: string;
  checkedItemHandler: (name: string, isChecked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ checkedItemHandler, name }) => {
  const [checked, setChecked] = useState(false);

  const checkHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(!checked);
    checkedItemHandler(name, e.target.checked);
  };

  return (
    <input
      type="checkbox"
      name={name}
      checked={checked}
      onChange={(e) => checkHandler(e)}
    ></input>
  );
};

export default Checkbox;
