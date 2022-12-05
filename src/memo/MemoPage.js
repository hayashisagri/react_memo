import usePersist from "../Persist";
import AddForm from "./AddForm";
import DelForm from "./DelForm";
import Memo from "./Memo";

function MemoPage() {
  const [mode, setMode] = usePersist("mode", "default");

  return (
    <div>
      <h5 className="my-3">mode: {mode}</h5>
      <div className="alert alert-primary pb-0">
        <AddForm />
        <DelForm />
      </div>
      <Memo />
    </div>
  );
}

export default MemoPage;
