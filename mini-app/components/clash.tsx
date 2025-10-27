"use client";

import { useState } from "react";
import { useMiniAppContext } from "./context/miniapp-provider";
import { Button } from "./ui/button";

export function Clash() {
  const { sdk } = useMiniAppContext();
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleClash = async () => {
    setLoading(true);
    const participants = ["Tevaera1", "Tevaera2"];
    const winner = participants[Math.floor(Math.random() * participants.length)];
    const clashResult = {
      participants,
      winner,
      timestamp: new Date().toISOString(),
    };
    try {
      // Record to blockchain via sdk actions
      await sdk.actions.sendTransaction({
        type: "clash",
        data: clashResult,
      });
      setResult(`Winner: ${winner}`);
    } catch (e) {
      console.error(e);
      setResult("Failed to record clash");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-xl font-semibold">Tevaera Clash</h2>
      <Button onClick={handleClash} disabled={loading}>
        {loading ? "Clashing..." : "Start Clash"}
      </Button>
      {result && <p>{result}</p>}
    </div>
  );
}
