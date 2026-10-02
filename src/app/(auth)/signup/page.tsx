import FrontendLayout from "@/components/layouts/frontend-layout";
import Input from "@/components/ui/input";


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
          </form>
        </div>
      </section>
    </FrontendLayout>
  );
}
