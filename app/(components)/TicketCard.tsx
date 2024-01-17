import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";
import Link from "next/link";
import Stopwatch from "./Stopwatch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

const TicketCard = ({ ticket }) => {
  const formatTimeStamp = (timestamp) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };

    const date = new Date(timestamp);
    const formattedDate = date.toLocaleString("en-US", options);

    return formattedDate;
  };
  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <PriorityDisplay priority={ticket.priority} />
        <div className="ml-auto">
          <Link
            href={`/TicketPage/${ticket._id}`}
            style={{ display: "contents" }}
          >
            <FontAwesomeIcon icon={faEdit} className="ml-10 mr-4" />
          </Link>

          <DeleteBlock id={ticket._id} />
        </div>
      </div>
      <h4>{ticket.title}</h4>
      <hr className="h-px border-0 bg-page mb-2" />
      <div className="flex">
        <p className="whitespace-pre-wrap">{ticket.description}</p>
        <div className="flex ml-auto items-end">
          <Stopwatch />
        </div>
      </div>
      <div className="flex mt-2">
        <div className="flex flex-col">
          <p className="text-xs my-1">{formatTimeStamp(ticket.createdAt)}</p>
          <ProgressDisplay progress={ticket.progress} />
        </div>
        <div className="flex ml-auto items-end">
          <StatusDisplay status={ticket.status} />
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
