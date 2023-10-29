//The purpose of this helper is to allow the user to press Enter when they submit into an input field
//instead of just usual onBlur. An optional, additional submission method.
export const handleKeyDown = (callback: () => void) => (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      callback();
    }
  };
  