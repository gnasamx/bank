import TextField from "@/components/ui/text-field";

export default function CalendarPage() {
  return (
    <main className="flex h-full w-full flex-col space-y-4">
      <h3 className="mb-5 text-xl font-semibold">General</h3>
      <TextField
        label="On calendar"
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
