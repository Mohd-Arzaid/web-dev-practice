import FrontendLayout from "@/components/layouts/frontend-layout";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import { FcGoogle } from "react-icons/fc";

export default function SignupPage() {
  return (
    <FrontendLayout>
      <section className="flex min-h-[70vh] items-center justify-center py-16">
        <div className="max-w-md w-full">
          {/* header */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground">
              Create Account
            </h2>

            <p className="mt-3 text-muted-foreground">
              Join us and start shopping your favorite styles.
            </p>
          </div>
          <form className="space-y-5 mt-8">
            <Input
              label="Full Name"
              placeholder="Enter your full name"
              type="text"
            />
            <Input
              label="Email Address"
              placeholder="Enter your email address"
              type="email"
            />
            <Input
              label="Password"
              placeholder="Create a password"
              type="text"
            />

            <Button className="w-full">Create Account</Button>

            <Button
              variant="outline"
              className="w-full"
              leftIcon={<FcGoogle size={18} />}
            >
              Continue with Google
            </Button>
          </form>
        </div>
      </section>
    </FrontendLayout>
  );
}
