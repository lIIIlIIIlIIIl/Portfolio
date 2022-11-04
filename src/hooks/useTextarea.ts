import React, { useCallback, useState } from "react";

const useTextarea = (input: string) => {
  const [value, setValue] = useState(input);
  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setValue(event.target.value);
    },
    []
  );
  return { value, onChange };
};

export default useTextarea;
