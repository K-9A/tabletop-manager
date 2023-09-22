export interface DashboardProps {
    user: {
      id: string;
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
      id: string;
      name: string;
      email: string;
      dateJoined: string;
      campaignsOwned: string;
      characterSheetsOwned: string;
    };
    labelBgColor: string;
  }

  export type UserStaticProps = {
    user: {
      id: string;
      name: string;
      email: string;
      dateJoined: string;
      campaignsOwned: string;
      characterSheetsOwned: string;
    };
  };
  