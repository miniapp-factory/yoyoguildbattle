import { Clash } from "@/components/clash";
import { Header } from "@/components/header";

export default function ClashPage() {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-3 place-items-center px-4">
        <Clash />
      </main>
    </>
  );
}
