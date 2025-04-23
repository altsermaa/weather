import { OuterBox } from "./OuterBox";

export const Container = () => {

  return (
    <div className="flex h-screen">
      <OuterBox
        color="#f2f4f6"
        boxColor="#f2f4f6"
        textDate="April 22, 2025"
        textLocation="Ulaanbaatar"
        gradus="26"
        textComment="Patchy rain nearby"
        circle={"/orangeCircle.png"}
        position={positionDay}
      />
      <OuterBox
        color="#0f151e"
        boxColor="#0f151e"
        textDate="April 22, 2025"
        textLocation="Ulaanbaatar"
        gradus="17"
        textComment="Patchy rain nearby"
        circle={"/purpleCircle.png"}
        position={positionNight}
      />
    </div>
  );
};
