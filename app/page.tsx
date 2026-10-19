import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-3xl font-bold">job board</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400">
        Find your next career opportunity
      </p>
      <Link
        href="/jobs"
        className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      >
        View Jobs
      </Link>
    </div>
  );
}
