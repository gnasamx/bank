import TextField from "./components/ui/text-field";

export default function Home() {
  return (
    <main className="flex flex-col w-full h-full p-4 space-y-4">
      <TextField
        label="Custom link"
        name="custom-link"
        placeholder="https://github.com/gnasamx"
        description="Your custom video link. It'll be available in the event location."
      />
      <TextField
        label="Default meeting provider"
        name="default-meeting-provider"
        placeholder=""
        description="Choose the preferred video call provider for your meetings."
      />
    </main>
  );
}
