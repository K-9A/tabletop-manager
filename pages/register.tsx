import Register from "@/components/register";
import DisplayForm from "@/components/layout/containers/display-form";

function RegisterPage() {
  return (
    <div className="flex justify-center items-start mt-16 min-h-screen">
      <DisplayForm>
        <Register />
      </DisplayForm>
    </div>
  );
}

export default RegisterPage;
