"use client";
import Link from "next/link";
import { UserPlus } from "lucide-react";

export default function RampWalkCard() {
    const googleFormUrl = "https://forms.google.com/your-dhoti-form-link";
  return (
    <Link href={googleFormUrl} 
      target="_blank"
    className="group relative w-full md:w-[320px] cursor-pointer">
      {/* Animated Glow Background */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-50 group-hover:opacity-100 blur transition duration-500"></div>
      <div className="relative flex items-center gap-4 p-4 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl h-full hover:bg-black/70 transition-all">
        {/* Icon/Visual */}
        <div className="relative w-16 h-16 shrink-0 rounded-lg bg-gradient-to-br from-purple-900 to-black border border-purple-500/30 flex items-center justify-center">
             <span className="text-2xl">✨</span>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex justify-between items-start">
            <h3 className="text-purple-200 font-[var(--font-cinzel)] text-sm font-bold">
              Fashion Show
            </h3>
            <span className="text-[10px] px-2 py-0.5 bg-purple-500/80 text-white rounded-full">
              Open
            </span>
          </div>
          <p className="text-gray-300 text-xs mt-1 leading-tight">
            Register for the Grand Ramp Walk event.
          </p>
          <div className="mt-2 flex items-center gap-2 text-purple-300 text-xs font-semibold group-hover:translate-x-1 transition-transform">
            <UserPlus size={14} />
            <span>Register Here &rarr;</span>
          </div>
        </div>
      </div>
    </Link>
  );
}