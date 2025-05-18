import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar({ isAdmin = false }) {
  const pathname = usePathname();

  const contributorLinks = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    },
    {
      name: "Profile",
      href: "/dashboard/profile",
      icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
    },
    {
      name: "Submissions",
      href: "/dashboard/submissions",
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
    },
    {
      name: "New Submission",
      href: "/dashboard/new-submission",
      icon: "M12 6v6m0 0v6m0-6h6m-6 0H6",
    },
  ];

  const adminLinks = [
    {
      name: "Admin Dashboard",
      href: "/admin",
      icon: "M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2",
    },
  ];

  const links = isAdmin ? adminLinks : contributorLinks;

  return (
    <div className="h-full min-h-screen bg-gray-100 dark:bg-gray-800 w-64 fixed left-0 top-16 bottom-0 overflow-y-auto border-r border-gray-200 dark:border-gray-700">
      <nav className="mt-5 px-2">
        <div className="space-y-1">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`${
                  isActive
                    ? "bg-gray-200 dark:bg-gray-700 text-blue-600 dark:text-blue-400"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                } group flex items-center px-2 py-2 text-sm font-medium rounded-md`}>
                <svg
                  className={`${
                    isActive
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-400 dark:text-gray-500 group-hover:text-gray-500 dark:group-hover:text-gray-300"
                  } mr-3 flex-shrink-0 h-5 w-5`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={link.icon}
                  />
                </svg>
                {link.name}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
