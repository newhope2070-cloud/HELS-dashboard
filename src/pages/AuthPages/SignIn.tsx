import PageMeta from "../../components/common/PageMeta";
import AuthLayout from "./AuthPageLayout";
import SignInForm from "../../components/auth/SignInForm";

export default function SignIn() {
  return (
    <>
      <PageMeta
        title="Sign In | H.E.L.S Sports Academy"
        description="Sign in to H.E.L.S Sports Academy sports venue and pitch management dashboard."
      />
      <AuthLayout>
        <SignInForm />
      </AuthLayout>
    </>
  );
}


