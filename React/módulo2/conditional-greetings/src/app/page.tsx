const Page = () => {
  const fullTime = new Intl.DateTimeFormat("pt-BR", { timeStyle: "short", hour12: false }).format();

  const hour = new Date().getHours();
  // let greeting = '';

  // if (hour >= 0 && hour < 12) {
  //   greeting = "Bom dia";
  // } else if (hour >= 12 && hour < 18) {
  //   greeting = "Boa tarde"
  // } else if (hour >= 18 && hour < 24) {
  //   greeting = "Boa noite"
  // }

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center  text-white bg-gradient-to-r from-gray-950 to-gray-800 ">
      <div className="text-8xl">{fullTime}</div>
      <div className="text-4xl font-bold italic">
        {hour >= 0 && hour < 12 && "bom dia"}
        {hour >= 12 && hour < 18 && "bom dia"}
        {hour >= 12 && hour < 23 && "bom dia"}
      </div>
    </div>
  )
}

export default Page