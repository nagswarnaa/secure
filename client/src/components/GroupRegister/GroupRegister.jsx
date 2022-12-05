import React from "react";
import { useNavigate } from "react-router-dom";

const GroupRegister = () => {
  const Navigate = useNavigate();

  const nextBtnHandler = (event) => {
    event.preventDefault();
    const title = event.target[0].value;
    Navigate("/inviteingroup", { state: title });
  };

  return (
    <div className="min-h-screen bg-gray-200 flex justify-center pt-20">
      <div className="text-center">
        <h1 className="text-gray-800 text-4xl font-bold pb-4">
          Nombra este grupo
        </h1>
        <p className="text-gray-500 text-xl pb-10 w-[40rem] ">
          Name the group appropriately inorder to avoid confusion
        </p>
        <form onSubmit={nextBtnHandler}>
          <input
            type="text"
            placeholder="fill this"
            className="block text-sm py-3 px-4 rounded-lg w-full border outline-none mb-10"
          />
          <div className="grid grid-cols-2 gap-x-96">
            <button className="bg-gray-900 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-full">
              CANCEL
            </button>
            <button type="submit"
              className="bg-gray-900 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-full"
            >
              NEXT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GroupRegister;
