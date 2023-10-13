import { Typography, Button } from "@material-tailwind/react";
import Link from "next/link";

interface CampaignSectionProps {
  labelBgColor: string;
}

const CampaignSection: React.FC<CampaignSectionProps> = ({ labelBgColor }) => {
  return (
    <div className="flex-1 border border-gray-500 px-6 p-4 relative rounded-lg">
      <Typography
        variant="h6"
        color="blue-gray"
        className={`absolute -top-4 left-4 px-2 cursor-pointer inline-flex items-center ${labelBgColor}`}
      >
        Campaign
      </Typography>
      <div className="flex flex-col items-center space-y-6 py-4">
      <Link href="/campaign-view">
        <Button className="py-6 px-8" color="deep-purple" fullWidth>
          View Campaign
        </Button>
        </Link>
        <Link href="/campaign-create">
        <Button className="py-6" color="deep-purple" fullWidth>
          Create Campaign
        </Button>
        </Link>
      </div>
    </div>
  );
};

export default CampaignSection;
