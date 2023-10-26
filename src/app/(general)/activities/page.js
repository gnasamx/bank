import PageHeading from "@/components/page-heading";

const ways = {
  Expenditures: [
    { id: "01", label: "Groceries" },
    { id: "02", label: "Restaurants" },
    { id: "03", label: "Breakfast" },
    { id: "04", label: "Lunch" },
    { id: "05", label: "Tea and Snacks" },
    { id: "06", label: "Dinner" },
    { id: "07", label: "Hair & Skin care" },
    { id: "08", label: "Fun & Entertainment" },
    { id: "09", label: "Miscellaneous" },
  ],
  "Bills and Subscriptions": [
    { id: "01", label: "Credit card" },
    { id: "02", label: "Kitchen Gas" },
    { id: "03", label: "Internet" },
    { id: "04", label: "Electricity" },
    { id: "05", label: "Water" },
    { id: "06", label: "YouTube" },
    { id: "07", label: "Hotstar" },
  ],
  Debt: [{ id: "01", label: "Home Loan" }],
};
export default function ActivitiesPage() {
  return (
    <main className="flex h-full w-full flex-col space-y-4">
      <PageHeading
        title={"Activities"}
        subtitle={"Lorem ipsum is dummy text"}
        classNames={"mb-6"}
      />
      <div className="space-y-10">
        {Object.entries(ways).map(([key, activities], index) => {
          return (
            <div key={key}>
              <div className="mb-5 flex border-b border-separator">
                <h3 className="mb-5 text-lg font-semibold">{key}</h3>
              </div>
              {activities.map((activity) => {
                return <Activity key={activity.id} {...activity} />;
              })}
            </div>
          );
        })}
      </div>
    </main>
  );
}

function Activity({ label }) {
  return (
    <div className="flex justify-between py-3">
      <p className="h-7 text-sm font-medium">{label}</p>
    </div>
  );
}
