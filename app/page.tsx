import { Button } from "../components/ui/button";
import { ModeToggle } from "../components/modeToggle";
import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16">
      <header className="w-full max-w-4xl mb-8 flex justify-between items-center py-4 border-b border-gray-200">
        <h1 className="text-2xl font-bold">My Tailwind Layout</h1>
        <ModeToggle />
      </header>
      <main className="w-full max-w-4xl shadow-md rounded-lg p-6 space-y-6">
        <Button>Click me</Button>
        <h2 className="text-3xl font-semibold tracking-tight border-b pb-2">
          The People of the Kingdom
        </h2>
        <p className="leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec
          massa a nulla volutpat pharetra.
        </p>
      </main>
      <footer className="w-full max-w-4xl mt-8 py-4 text-center">
        © 2025 contributer#1 contributer#420.
      </footer>
    </div>
  );
}
