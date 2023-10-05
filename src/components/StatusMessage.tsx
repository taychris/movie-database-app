type Props = {
  text: string;
  imgSource: string;
};

const StatusMessage = ({ text, imgSource }: Props) => {
  return (
    <div className="space-y-3">
      <h1 className="max-w-xl mx-auto text-2xl font-medium leading-relaxed tracking-wide text-center md:text-5xl">
        {text}
      </h1>
      <img src={imgSource} className="mx-auto md:max-w-md aspect-square" />
    </div>
  );
};
export default StatusMessage;
