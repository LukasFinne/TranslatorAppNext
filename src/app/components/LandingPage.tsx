"use server";
import { WelcomeText } from "./WelcomeText";

export default async function LandingPage() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <WelcomeText />
      </div>
    </div>
  );
}
