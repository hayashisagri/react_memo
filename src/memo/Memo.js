import React from "react";
import usePersist from "../Persist";

import Item from "./Item";

function Memo(props) {
  const [memo, setMemo] = usePersist("memo", []);
  const [mode, setMode] = usePersist("mode", "default");

  let data = [];

  switch (mode) {
    case "default":
      data = memo.map((value, key) => (
        <Item key={value.message} value={value} index={key + 1} />
      ));
      setMode("deafult");
      break;

    default:
      data = memo.map((value, key) => (
        <Item key={value.message} value={value} index={key + 1} />
      ));
  }

  return (
    <table className="table mt-4">
      <tbody>{data}</tbody>
    </table>
  );
}

export default Memo;
