interface card {
  src: string;
  title: string;
}
export default function Card(props: card) {
  return (
    <>
      <div className=" lg:w-2/6 md:w-full w-full md:h-2/5 h-1/5 lg:h-2/5 lg:m-6 rounded-3xl bg-[#EEEEEE] hover:translate-y-5">
        <img
          src={props.src}
          className="lg:h-3/4 md:h-3/4 w-full h-3/4 rounded-t-3xl"
        ></img>
        <h1 className="lg:h-1/4 md:h-1/4 h-1/4 font-bold flex justify-center items-center lg:text-2xl md:text-xl text-sm text-[#053B50]">
          {props.title}
        </h1>
      </div>
    </>
  );
}
