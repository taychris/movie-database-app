import { fadeInScale, parentVariants } from "@/lib/animations";
import { motion } from "framer-motion";

type Props = {
  text: string;
  imgSource: string;
};

const StatusMessage = ({ text, imgSource }: Props) => {
  return (
    <motion.div
      variants={parentVariants}
      initial="hidden"
      whileInView="visible"
      className="space-y-3"
    >
      <motion.h1
        variants={fadeInScale}
        className="max-w-xl mx-auto text-2xl font-medium leading-relaxed tracking-wide text-center md:text-5xl"
      >
        {text}
      </motion.h1>
      <motion.img
        variants={fadeInScale}
        src={imgSource}
        className="mx-auto md:max-w-md aspect-square"
      />
    </motion.div>
  );
};
export default StatusMessage;
