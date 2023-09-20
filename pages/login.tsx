import Login from "@/components/login";
import DisplayBox from "@/components/layout/containers/display-box";
import { getSession } from "next-auth/react";
import { GetServerSidePropsContext } from 'next';

function LoginPage() {
  return (
    <div className="flex justify-center items-start mt-16">
      <DisplayBox>
        <Login />
      </DisplayBox>
    </div>
  );
}

export default LoginPage;



export async function getServerSideProps(context: GetServerSidePropsContext) {

  const session = await getSession(context);

  if (session) {
    // Redirect logged-in users to the homepage
    return {
      redirect: {
        destination: '/', // Adjust to your desired path
        permanent: false,
      },
    }
  }

  return {
    props: {}, // Props are returned as an empty object because they aren't necessary
  }
}