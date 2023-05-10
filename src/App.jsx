import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/index";

function App() {
  const state = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();
  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col-12">
            <h1 className="">Counter App </h1>
            <h4>
              using <strong>Redux & React</strong>
            </h4>
            <div className="d-flex justify-content-center">
              <button onClick={() => dispatch(decNumber())}>➖</button>
              <p
                style={{
                  border: "2px solid black",
                  width: "80px",
                  height: "40px",
                }}
              >
                {state}
              </p>
              <button onClick={() => dispatch(incNumber())}>➕</button>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
