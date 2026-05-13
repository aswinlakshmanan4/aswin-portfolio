"use client";

import dynamic from "next/dynamic";

// Client-only wrapper so the parent (Server Component layout) can mount
// AuroraBackground without R3F running during SSR.
const AuroraBackground = dynamic(() => import("./AuroraBackground"), {
  ssr: false,
});

export default function AuroraBackgroundClient() {
  return <AuroraBackground />;
}
