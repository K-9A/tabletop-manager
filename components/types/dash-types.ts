export interface DashboardProps {
    user: {
      user_id: string;
      name: string;
      email: string;
      dateJoined: string;
      campaignsOwned: string;
      characterSheetsOwned: string;
    };
    labelBgColor?: string;
  }

  export interface UserInfoProps {
   user: {
      user_id: string;
      username?: string; // this property is now optional
      email: string;
      dateJoined: string;
      campaignsOwned: string;
      characterSheetsOwned: string;
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
      campaignsOwned: string;
      characterSheetsOwned: string;
    };
  };
  