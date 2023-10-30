export interface DashboardProps {
    user: {
      user_id: string;
      name: string;
      email: string;
      dateJoined: string;
      totalCampaigns: number;
      totalCharacterSheets: number;
    };
    labelBgColor?: string;
  }

  export interface UserInfoProps {
   user: {
      user_id: string;
      username?: string; // this property is now optional
      email: string;
      dateJoined: string;
      totalCampaigns: number;
      totalCharacterSheets: number;
      created_at?: string; // this property is now optional
   };
   labelBgColor: string;
}

  export type UserStaticProps = {
    user: {
      user_id: string;
      name: string;
      id: string;
      username: string;
      email: string;
      dateJoined: string;
      totalCampaigns: number;
      totalCharacterSheets: number;
    };
  };
  