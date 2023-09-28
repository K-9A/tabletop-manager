import React from "react";
import { Card, Input } from "@material-tailwind/react";


export default function AbilityScores() {

  return (
    <Card color="transparent" shadow={false} className="shadow-none">
      <div
        className="mt-8 mb-2 max-w-screen-lg w-full"
      >
        <Input
          variant="outlined"
          label="Strength"
          crossOrigin=""
        />
      </div>
    </Card>
  );
}
