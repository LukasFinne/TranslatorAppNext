import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there!</h1>
          <p className="py-6">
            This is my project using the libraries Tesseract.js and Deepl
            together to be able to translate image text to another language.{" "}
            <br /> <br /> <b>Work in progress...</b>
          </p>
          <Link href={"/translate"} className="btn btn-primary">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
