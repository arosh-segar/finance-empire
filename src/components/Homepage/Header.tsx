import React from "react";

export const Header: React.FC = () => {
  return (
    <div className="container h-screen">
      <div className="flex w-full">
        <div className="w-1/2 bg-red-300 h-screen"></div>
        <div className="w-1/2 bg-red-400 h-screen"></div>
      </div>
    </div>
  );
};
