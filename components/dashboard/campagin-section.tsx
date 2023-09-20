import { Typography, Button } from "@material-tailwind/react";

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
        <Button className="py-6" color="deep-purple" fullWidth>
          View Campaign
        </Button>
        <Button className="py-6" color="deep-purple" fullWidth>
          Create Campaign
        </Button>
      </div>
    </div>
  );
};

export default CampaignSection;
