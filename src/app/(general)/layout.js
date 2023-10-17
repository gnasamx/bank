import NavLink from "@/components/nav-link";

export default function CalendarLayout({ children }) {
  return (
    <div className="flex h-full flex-row">
      <div
        className="w-full shrink-0 h-full flex-1 px-6 bg-gray-50 dark:bg-gray-900/10"
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
        className="flex-1 w-full h-full bg-white dark:bg-gray-850 p-16"
        style={{ flexBasis: 800 }}
      >
        <div>{children}</div>
      </div>
    </div>
  );
}
