import React, { useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa"; 
import { motion, AnimatePresence } from "framer-motion"; 
export default function Faq() {
  const [open, setOpen] = useState(true);

  const GamesData = [
    {
      id: 1,
      title: "What are the different types of virtual headsets available?",
      desc: `Virtual headsets are equipped with various sensors to track the user's movements.
       These sensors can include accelerometers, gyroscopes, and sometimes external cameras or 
       base stations. They constantly monitor the position and orientation of the headset and 
       sometimes the user's hand controllers.`,
      icon: <FaArrowDown />,
    },
    {
      id: 2,
      title: "How does a virtual headset work?",
      desc: `Virtual headsets are equipped with various sensors to track the user's movements.
         These sensors can include accelerometers, gyroscopes, and sometimes external cameras or 
         base stations. They constantly monitor the position and orientation of the headset and 
         sometimes the user's hand controllers.`,
      icon: <FaArrowDown />,
    },
    {
      id: 3,
      title: "Do I need a powerful computer to use a virtual headset?",
      desc: `Virtual headsets are equipped with various sensors to track the user's movements.
         These sensors can include accelerometers, gyroscopes, and sometimes external cameras or 
         base stations. They constantly monitor the position and orientation of the headset and 
         sometimes the user's hand controllers.`,
      icon: <FaArrowDown />,
    },
    {
      id: 4,
      title: "What are the main applications of virtual headsets?",
      desc: `Virtual headsets are equipped with various sensors to track the user's movements.
         These sensors can include accelerometers, gyroscopes, and sometimes external cameras or 
         base stations. They constantly monitor the position and orientation of the headset and 
         sometimes the user's hand controllers.`,
      icon: <FaArrowDown />,
    },
  ];

  const handleToggle = (id) => {
    setOpen((prevState) => ({ ...prevState, [id]: !prevState[id] }));
  };

  return (
    <div className="container m-auto w-1/2 ">
      <h1 className="text-center text-4xl font-black mb-12">F.A.Q.</h1>
      <div className="mb-36">
        {GamesData.map((item) => (
          <div 
            key={item.id}
            className="mb-6 bg-white bg-wahit"
          >
            <div onClick={() => handleToggle(item.id)} className="flex mb-6 justify-between bg-wahit px-5 py-3">
              <h1 className=" lg:text-xl ">{item.title}</h1>
              <button  className=" text-efrct">
                {open[item.id] ? <FaArrowUp /> : <FaArrowDown />}{" "}
              </button>
            </div>
            <AnimatePresence>
              {open[item.id] && (
                <motion.p  className="p-3"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  {item.desc}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
