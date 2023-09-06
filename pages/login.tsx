import Login from "@/components/login";
import DisplayForm from "@/components/layout/displayform";

function LoginPage() {
  return (
    <div className="flex justify-center items-start mt-16 min-h-screen">
      <DisplayForm>
        <Login />
      </DisplayForm>
    </div>
  );
}

export default LoginPage;
