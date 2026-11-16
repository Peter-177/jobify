import Link from "next/link";

const JobsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">Jobs Page</h1>
      <div className="mt-4 p-4 border rounded shadow-md">
        <h2>Frontend Developer</h2>
        <p>Location: New York, NY</p>
        <p>Salary: $90,000 - $120,000</p>
        <Link href="/jobs/1" className="text-blue-500 hover:underline">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default JobsPage;
