"use client";

import "react-toastify/dist/ReactToastify.css";
import dynamic from "next/dynamic";

const ToastContainer = dynamic(
  () => import("react-toastify").then((mod) => mod.ToastContainer),
  {
    ssr: false,
  }
);
const ToastContainers = () => {
  return (
    <div>
      <ToastContainer />
    </div>
  );
};

export default ToastContainers;
