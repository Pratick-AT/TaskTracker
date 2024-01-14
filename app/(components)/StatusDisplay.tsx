const StatusDisplay = ({ status }: { status: string }) => {
  const getColor = (status: string) => {
    let color = "bg-slate-700";
    switch (status.toLowerCase()) {
      case "completed":
        color = "bg-green-200";
        return color;
      case "in progress":
        color = "bg-yellow-200";
        return color;
      case "not started":
        color = "bg-red-200";
        return color;
    }
    return color;
  };

  return (
    <span
      className={`inline-block rounded-full px-2 py-1 text-xs font-semibold text-gray-700 ${getColor(
        status
      )}`}
    >
      {status}
    </span>
  );
};

export default StatusDisplay;
