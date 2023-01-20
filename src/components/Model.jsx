import React from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai';

const Model = ({title, children, setHelp}) => {
  return (
    <div className="absolute w-full h-full grid place-center">
    <div
      className="z-10 flex place-self-center flex-col rounded-xl bg-white p-5 pb-10 drop-shadow-3xl dark:bg-zinc-800 dark:text-white border-2 border-slate-700"
      style={{ width: "min(600px, 90vw)", height: "min(580px, 80vh)" }}
    >
      <div className="flex justify-between items-center pb-5">
        <h2 className="font-black text-2xl">{title}</h2>
        <AiOutlineCloseCircle className="dark:text-white text-black text-2xl font-bold cursor-pointer"
                      onClick={() => {
            setHelp(false);
          }}
        />
      </div>
      <div className="modal overscroll-contain overflow-y-scroll sm:px-7">
        {children}
      </div>
    </div>
    <div
      className="z-0 absolute w-full h-full grid place-cente"
      onClick={() => {
        setHelp(false);
      }}
    />
  </div>
  )
}

export default Model