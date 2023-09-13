interface card {
  src: string;
  title: string;
}
export default function Card(props: card) {
  return (
    <>
      <div className=" lg:w-2/6 md:w-full md:h-1/5 lg:h-2/5 m-6 rounded-3xl bg-[#EEEEEE] hover:translate-y-5">
        <img
          src={props.src}
          className="lg:h-3/4 w-full h-3/4 rounded-t-3xl"
        ></img>
        <h1 className="h-1/4 font-bold flex justify-center items-center lg:text-4xl text-l text-[#053B50]">
          {props.title}
        </h1>
      </div>
    </>
  );
}
