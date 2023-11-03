import Counter from "@/components/Counter";

export default async function Home() {
  const appName = 'Counter App';
  return (
    <main
      className="
  container mx-auto px-5 py-28 lg:px-28">
      {/* Counter app  */}
      <Counter appName={appName} />
    </main>
  );
}
