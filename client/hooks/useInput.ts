import { ChangeEvent, useState } from 'react';

export const useInput = (text: string) => {
  const [value, setValue] = useState(text);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return { value, onChange };
};
