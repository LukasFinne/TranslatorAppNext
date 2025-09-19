"use client";

import { motion } from "motion/react";
import Link from "next/link";

export function WelcomeText() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 2.0 } }}
      className="max-w-md space-y-4 "
    >
      <h1 className="text-5xl font-bold">Hello there!</h1>
      <p className=" text-xl py-8">
        This is my project for translating traditional chinese text into english
        from photos using Tesseract.js together with Deepl translations.
      </p>
      <p className="text-xl font-bold ">Work in Progress...</p>
      <Link href={"/translate"} className="btn btn-primary">
        Get Started
      </Link>
    </motion.div>
  );
}
