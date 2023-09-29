//Helper file for all the tooltips both create and view sheets use.
import { Typography } from "@material-tailwind/react";

//Proficiency Tooltip
export const ProficiencyTooltip = () => {
  return (
    <div>
      <Typography variant="small">Level 1-4: +2</Typography>
      <Typography variant="small">Level 5-8: +3</Typography>
      <Typography variant="small">Level 9-12: +4</Typography>
      <Typography variant="small">Level 13-16: +5</Typography>
      <Typography variant="small">Level 17-20: +6</Typography>
    </div>
  );
};

//Ability Score Tooltip
