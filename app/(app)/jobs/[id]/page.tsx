type Props = {
  params: Promise<{
    id: string;
  }>;
};

async function JobDetailsPage({ params }: Props) {
  const { id } = await params;
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">Job Details</h1>
      <p>Job ID: {id}</p>
    </div>
  );
}

export default JobDetailsPage;
