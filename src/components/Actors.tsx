import { useState } from "react";
import type { TActor } from "../types";

type Props = {
  actors: TActor[];
};
function Actors({ actors }: Props) {
  const [selected, setSelected] = useState(0);
  return (
    <div className="space-y-4   ">
      {actors.map((actor, idx) => (
        <button
          key={idx}
          className={`px-8 py-4 text-start rounded-3xl w-full ${
            idx === selected ? "bg-base-100" : "hover:bg-base-100/20"
          } `}
          onClick={() => setSelected(idx)}
        >
          <Title number={idx + 1} title={actor.name} />
          {idx === selected ? (
            <p className="mt-4">{actor.description}</p>
          ) : null}
        </button>
      ))}
    </div>
  );
}

export default Actors;

function Title({ number, title }: { number: number; title: string }) {
  return (
    <span className="text-xl space-x-6">
      <span className="text-aexdo">{`00${number}`.slice(-2)}.</span>
      <span>{title}</span>
    </span>
  );
}
