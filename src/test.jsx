import React from "react";

export default function test() {
  const list = [
    { name: "name1", number: "1" },
    { name: "name2", number: "1" },
    { name: "name3", number: "3" },
  ];
  return (
    <div>
      {list.map((item) => (
        <div key={item.name}>{item.name}</div>
      ))}
    </div>
  );
}
