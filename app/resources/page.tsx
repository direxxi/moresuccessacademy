"use client";

import { motion } from "framer-motion";
import Resources from "@/components/sections/Resources";

export default function ResourcesPage() {
  return (
    <div className="min-h-screen pt-20">
      <iframe
        src="https://gamma.app/embed/ss4pn2nv5msyqlt"
        allow="fullscreen"
        title="More Success Academy Pitch Deck"
        className="w-full"
        style={{ height: "calc(100vh - 80px)", border: "none" }}
      />
    </div>
  );
}
