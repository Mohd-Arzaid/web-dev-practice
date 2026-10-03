"use client";

import FrontendLayout from "@/components/layouts/frontend-layout";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import z from "zod";

const LoginSchema = z.object({
  email: z.email("Please enter a valid email address."),
  password: z.string().min(6, "Password must be at least 6 characters long."),
});

type LoginFormValues = z.infer<typeof LoginSchema>;

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(LoginSchema), // connection for form validation
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginFormValues) => {
    console.log(data);
  };

  return (
    <FrontendLayout>
      <section className="flex min-h-[70vh] items-center justify-center py-16">
        <div className="max-w-md w-full">
          {/* header */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground">Welcome Back</h2>
            <p className="mt-3 text-muted-foreground">
              Login to your account to continue shopping.
            </p>
          </div>

          {/* form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 mt-8">
            <Input
              label="Email Address"
              placeholder="Enter your email address"
              type="email"
              {...register("email")}
              error={errors.email?.message}
            />
            <Input
              label="Password"
              placeholder="Enter your password"
              type="text"
              {...register("password")}
              error={errors.password?.message}
            />

            {/* forgot password link */}
            <div className="flex justify-end text-sm">
              <Link
                className="font-medium text-primary hover:underline"
                href="/forgot-password"
              >
                Forgot Password?
              </Link>
            </div>

            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? "Logging in..." : "Log In"}
            </Button>

            <Button
              type="button"
              variant="outline"
              className="w-full"
              leftIcon={<FcGoogle size={18} />}
            >
              Continue with Google
            </Button>
          </form>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link
              className="font-semibold text-primary hover:underline"
              href="/signup"
            >
              Create an account
            </Link>
          </p>
        </div>
      </section>
    </FrontendLayout>
  );
}
