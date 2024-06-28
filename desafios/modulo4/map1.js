const list = [
  { name: "Rodolfo", vip: true },
  { name: "Maria", vip: false },
  { name: "João", vip: true },
  { name: "Bruno", vip: true },
  { name: "Carla", vip: false },
  { name: "Ana", vip: true },
  { name: "Julio", vip: false },
];

const newList = list.map((user) => {
  const newUser = {
    name: user.name,
    braceletColor: user.vip ? "black" : "green",
  };

  return newUser;
});

console.log(newList);

// [
//   { name: "Rodolfo", braceletColor: "black" },
//   { name: "Maria", braceletColor: "green" },
//   { name: "João", braceletColor: "black" },
//   { name: "Bruno", braceletColor: "black" },
//   { name: "Carla", braceletColor: "green" },
//   { name: "Ana", braceletColor: "black" },
//   { name: "Julio", braceletColor: "green" },
// ];
