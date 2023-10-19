import Button from "@/components/ui/button";

export default function SavingsPage() {
  return (
    <main className="flex h-full w-full flex-col space-y-4">
      <h3 className="mb-5 text-xl font-semibold">Savings</h3>
      <div className="space-x-4">
        <Button size="small">Add connection</Button>
        <Button variant="secondary">Remove connection</Button>
        <Button variant="danger" size="large">
          Send feedback
        </Button>
      </div>
    </main>
  );
}
