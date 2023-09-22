import DisplayBox from "@/components/layout/containers/display-box";
import Dashboard from "@/components/dashboard/dashboard";
import { UserStaticProps } from "@/components/types/dash-types";
import axios from "axios";
import { getSession } from "next-auth/react";
import { Session } from "next-auth"; //For typescripting
import { GetServerSidePropsContext } from "next";

type MySession = Session & {
  user: UserStaticProps['user'];
};


function DashboardPage({ user }: UserStaticProps) {
  return (
    <div className="flex justify-center items-start mt-16">
      <DisplayBox>
        <Dashboard user={user} />
      </DisplayBox>
    </div>
  );
}

export default DashboardPage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context) as MySession;
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  // If the user is NOT logged in, redirect to the homepage or login page
  if (!session || !session.user || !session.user.id) {
    return {
      redirect: {
        destination: "/login", // redirect to login if user isn't logged in
        permanent: false,
      },
    };
  }

  // For logged-in users, fetch their data
  const userId = session.user.id;
  const { data: user } = await axios.get(`${apiUrl}/api/user/${userId}`);

  return {
    props: {
      user,
    },
  };
}
