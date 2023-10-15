import TextField from "./components/ui/text-field";

export default function Home() {
  return (
    <main className="flex w-full h-full p-4">
      <TextField
        label="Twitter"
        placeholder="John"
        description="Your Twitter handle. Visible to everyone."
      />
    </main>
  );
}
