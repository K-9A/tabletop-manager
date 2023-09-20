import DisplayBox from "@/components/layout/containers/display-box";
import Dashboard from "@/components/dashboard/dashboard";
import axios from 'axios';
import { getSession } from "next-auth/react";
import { GetServerSidePropsContext } from 'next';

type UserProps = {
  user: {
    id: string;
    name: string;
    email: string;
    dateJoined: string;
    campaignsOwned: string;
    characterSheetsOwned: string;
  };
};

function DashboardPage({ user }: UserProps) {

    return (
        <div>
            <DisplayBox>
              <Dashboard user={user}/>
            </DisplayBox>
        </div>
    )
}

export default DashboardPage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const session = await getSession(context);

    // If the user is NOT logged in, redirect to the homepage or login page
    if (!session) {
      return {
        redirect: {
          destination: '/', // Adjust to your desired path, like /login
          permanent: false,
        },
      }
    }

    // For logged-in users, fetch their data
    // Ideally, you'd get the user ID from the session, not hard-code it.
    const userId = "12345678";
    const { data: user } = await axios.get(`http://localhost:3000/api/user/${userId}`);

    return {
      props: {
        user
      }
    }
}
