import { useState } from "react";

export default function Accordion(props) {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return (
    <div
      style={{
        marginBottom: "15px",
        lineHeight: "15px",
      }}
    >
      <button
        onClick={toggle}
        type="button"
        className="bg-slate-500 hover:bg-slate-500 py-4 px-4 font-bold rounded text-black w-[53rem] text-left mx-auto items-center justify-center transition"
      >
        <p>{props.title}</p>
      </button>
      <div
        className="bg-slate-500 hover:bg-slate-500 py-4 px-4   text-black w-[53rem] text-left mx-auto transition duration-500 ease-in-out "
        style={{ display: isShowing ? "block" : "none", padding: "5px" }}
        dangerouslySetInnerHTML={{
          __html: props.content,
        }}
      />
    </div>
  );
}
