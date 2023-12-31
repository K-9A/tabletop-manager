import { Typography, Button } from "@material-tailwind/react";
import Link from "next/link";

interface CharacterSheetSectionProps {
  labelBgColor: string;
}

const CharacterSheetSection: React.FC<CharacterSheetSectionProps> = ({
  labelBgColor,
}) => {
  return (
    <div className="flex-1 border border-gray-500 px-6 p-4 relative rounded-lg">
      <Typography
        variant="h6"
        color="blue-gray"
        className={`absolute -top-4 left-4 px-2 cursor-pointer inline-flex items-center ${labelBgColor} dark:bg-gray-700 dark:text-gray-300`}
      >
        Character Sheet
      </Typography>
      <div className="flex flex-col items-center space-y-6 py-5">
        <Link href="/character-view">
          <Button className="py-5" color="teal" fullWidth>
            View Character Sheets
          </Button>
        </Link>

        <Link href="/character-create">
          <Button color="teal" fullWidth>
            Create Character Sheet
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CharacterSheetSection;
