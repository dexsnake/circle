export default function DemoDashboardLeftBarItem(props) {
  return (
    <div
      className={`mb-1 flex justify-between items-center ${
        props.highlighted ? "bg-circle py-1 rounded relative -left-5 px-5" : ""
      }`}
    >
      <div>
        {props.locked ? (
          <img
            src={
              props.highlighted
                ? "/images/icon-lock-white.svg"
                : "/images/icon-lock.svg"
            }
            className="h-5 inline-block mr-3"
          />
        ) : (
          <span className="inline-block mr-3 text-sm">{props.icon}</span>
        )}
        <span
          className={`${
            props.highlighted ? "text-white" : "text-circle-light"
          } text-xs`}
        >
          {props.text}
        </span>
      </div>
      {props.notifications && (
        <div className="h-4 w-4 leading-3 bg-gray-200 flex justify-center items-center rounded">
          <span className="text-circle-light" style={{ fontSize: 10 }}>
            {props.notifications}
          </span>
        </div>
      )}
    </div>
  );
}
