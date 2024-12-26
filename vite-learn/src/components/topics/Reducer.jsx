import { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function Reducer() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-lg text-center">
        <h1 className="text-2xl font-bold mb-6">Count: <span className="text-blue-500">{count}</span></h1>
        <div className="space-x-2">
          <button
            onClick={() => dispatch("increment")}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
          >
            +
          </button>
          <button
            onClick={() => dispatch("decrement")}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200"
          >
            -
          </button>
          <button
            onClick={() => dispatch("reset")}
            className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition duration-200"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Reducer;
