import NavLink from "@/components/nav-link";

export default function CalendarLayout({ children }) {
  return (
    <div className="flex h-full flex-row">
      <div
        className="h-full w-full flex-1 shrink-0 bg-gray-50 px-6 dark:bg-gray-900/10"
        style={{ flexBasis: 320 }}
      >
        <div className="ml-auto flex w-44 flex-col py-16">
          <div className="flex flex-col">
            <NavLink label="General" href="/calendar" />
            <NavLink label="Savings" href="/savings" />
          </div>
        </div>
      </div>
      <div
        className="h-full w-full flex-1 bg-white p-16 dark:bg-gray-850"
        style={{ flexBasis: 800 }}
      >
        <div>{children}</div>
      </div>
    </div>
  );
}
