import { useState } from "react";
import { sculptureList } from "../data/scupltureList";
export default function Slider() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  let sculptrue = sculptureList[index];

  return (
    <div className="container">
      <div className="d-flex justify-content-between mt-2">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => {
            if (index > 0) setIndex(index - 1);
            else setIndex(sculptureList.length - 1);
          }}
        >
          Previous
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            if (index < sculptureList.length - 1) setIndex(index + 1);
            else setIndex(0);
          }}
        >
          Next
        </button>
      </div>
      <div className="mt-2">
        <h2>
          <i>{sculptrue.name}</i> by {sculptrue.artist}
        </h2>
        <h3>
          {" "}
          ({index + 1} of {sculptureList.length})
        </h3>

        <img src={sculptrue.url} alt={sculptrue.name} />
        <p>{showMore && sculptrue.description}</p>
        <button
          className="btn btn-warning"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
}
