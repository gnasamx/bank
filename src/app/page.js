import TextField from "@/components/ui/text-field";

export default function Home() {
  return (
    <main className="flex h-full w-full flex-col space-y-4 p-4">
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
