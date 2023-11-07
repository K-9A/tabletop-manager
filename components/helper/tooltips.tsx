//Helper file for all the big tooltips both create and view sheets use.
import { Typography } from "@material-tailwind/react";

export const MarkAsCompleteTooltip = () => {
  return (
    <div>
      <Typography variant="small">All fields in this section are optional. Fill out as many as you</Typography>
      <Typography variant="small">like and click the Mark as Complete checkbox once you are done.</Typography>
    </div>
  );
};

export const SkillsCreateTooltip = () => {
  return (
    <div>
      <Typography variant="small">You may add up to 30 skills maximum. Add as many</Typography>
      <Typography variant="small">as you want and Mark as Complete when finished.</Typography>
    </div>
  );
};

export const SpellsCreateTooltip = () => {
  return (
    <div>
      <Typography variant="small">You may add up to 40 cantrips/spells maximum. Add as many</Typography>
      <Typography variant="small">as you want and Mark as Complete when finished.</Typography>
    </div>
  );
};

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

export const EquipmentCreateTooltip = () => {
  return (
    <div>
      <Typography variant="small">You may add up to 20 pieces of equipment maximum. Add as many</Typography>
      <Typography variant="small">as you want and Mark as Complete when finished.</Typography>
    </div>
  );
};

export const ItemsCreateTooltip = () => {
  return (
    <div>
      <Typography variant="small">You may add up to 40 items maximum. Add as many</Typography>
      <Typography variant="small">as you want and Mark as Complete when finished.</Typography>
    </div>
  );
};


//Ability Score Tooltip
//Proficiency Tooltip
export const AbilityScoresTooltip = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <Typography variant="small" className="mr-4 font-bold">Score</Typography>
        <Typography variant="small" className="font-bold">Modifier</Typography>
      </div>
      <div className="flex justify-between">
        <Typography variant="small" className="mr-2">1</Typography>
        <Typography variant="small">-5</Typography>
      </div>
      <div className="flex justify-between">
        <Typography variant="small" className="mr-2">2-3</Typography>
        <Typography variant="small">-4</Typography>
      </div>
      <div className="flex justify-between">
        <Typography variant="small" className="mr-2">4-5</Typography>
        <Typography variant="small">-3</Typography>
      </div>
      <div className="flex justify-between">
        <Typography variant="small" className="mr-2">6-7</Typography>
        <Typography variant="small">-2</Typography>
      </div>
      <div className="flex justify-between">
        <Typography variant="small" className="mr-2">8-9</Typography>
        <Typography variant="small">-1</Typography>
      </div>
      <div className="flex justify-between">
        <Typography variant="small" className="mr-2">10-11</Typography>
        <Typography variant="small">+0</Typography>
      </div>
      <div className="flex justify-between">
        <Typography variant="small" className="mr-2">12-13</Typography>
        <Typography variant="small">+1</Typography>
      </div>
      <div className="flex justify-between">
        <Typography variant="small" className="mr-2">14-15</Typography>
        <Typography variant="small">+2</Typography>
      </div>
      <div className="flex justify-between">
        <Typography variant="small" className="mr-2">16-17</Typography>
        <Typography variant="small">+3</Typography>
      </div>
      <div className="flex justify-between">
        <Typography variant="small" className="mr-2">18-19</Typography>
        <Typography variant="small">+4</Typography>
      </div>
      <div className="flex justify-between">
        <Typography variant="small" className="mr-2">20-21</Typography>
        <Typography variant="small">+5</Typography>
      </div>
      <div className="flex justify-between">
        <Typography variant="small" className="mr-2">22-23</Typography>
        <Typography variant="small">+6</Typography>
      </div>
      <div className="flex justify-between">
        <Typography variant="small" className="mr-2">24-25</Typography>
        <Typography variant="small">+7</Typography>
      </div>
      <div className="flex justify-between">
        <Typography variant="small" className="mr-2">26-27</Typography>
        <Typography variant="small">+8</Typography>
      </div>
      <div className="flex justify-between">
        <Typography variant="small" className="mr-2">28-29</Typography>
        <Typography variant="small">+9</Typography>
      </div>
      <div className="flex justify-between">
        <Typography variant="small" className="mr-2">30</Typography>
        <Typography variant="small">+10</Typography>
      </div>
    </div>
  );
};