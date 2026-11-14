import PageMeta from "../../components/common/PageMeta";
import AuthLayout from "./AuthPageLayout";
import SignUpForm from "../../components/auth/SignUpForm";

export default function SignUp() {
  return (
    <>
      <PageMeta
        title="Sign Up | H.E.L.S Sports Academy"
        description="Create an account for H.E.L.S Sports Academy sports venue and pitch management dashboard."
      />
      <AuthLayout>
        <SignUpForm />
      </AuthLayout>
    </>
  );
}


