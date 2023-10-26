import TextField from "@/components/ui/text-field";

export default function GeneralPage() {
  return (
    <main className="flex h-full w-full flex-col space-y-4">
      <h3 className="mb-5 text-xl font-semibold">General</h3>
      <TextField
        name="custom-link"
        label="On calendar"
        description="Your custom video link. It'll be available in the event location."
        placeholder="https://github.com/gnasamx"
      />
      <TextField
        name="default-meeting-provider"
        label="Default meeting provider"
        description="Choose the preferred video call provider for your meetings."
        placeholder=""
      />
      <TextField
        name="birthday"
        label="Birthday"
        small="Month"
        description="Set your birthday. Only day and month will be visible."
        placeholder=""
      />
    </main>
  );
}
