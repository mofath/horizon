import "./Activities.scss";

const data = [
  {
    message: "Ahmed Mohsen added a new request for employee letters new.",
    date: "08-Nov-2023",
  },
  {
    message: "Ahmed Mohsen added a new request for employee letters new.",
    date: "08-Nov-2023",
  },
  {
    message: "Ahmed Mohsen added a new request for employee letters new.",
    date: "08-Nov-2023",
  },
  {
    message: "Ahmed Mohsen added a new request for employee letters new.",
    date: "08-Nov-2023",
  },
];

const Activities = () => {
  return (
    <div className="activities">
      <div className="activities__header">
        <div className="activities__header__title">Acount activities</div>
      </div>
      <div className="activities__data">
        {data.map((item, index) => {
          return (
            <div className="activities__data__item" key={index}>
              <div className="activities__data__item__message">{item.message}</div>
              <div className="activities__data__item__date">{item.date}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Activities;
