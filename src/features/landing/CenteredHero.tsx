import { motion } from 'framer-motion';
import Image from 'next/image';
import { InView } from 'react-intersection-observer';

export const CenteredHero = (props: {
  banner: React.ReactNode;
  title: React.ReactNode;
  description: string;
  buttons: React.ReactNode;
  image: string;
}) => (
  <InView>
    {({ inView, ref }) => (
      <>
        <Image src={props.image} width={320} height={700} alt="Mariceli" className="absolute right-12 top-56 -z-0 max-w-[180px] md:top-40 md:max-w-[260px] lg:top-36" />
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="relative z-10 text-center">{props.banner}</div>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="relative z-10 mt-3 text-center text-5xl font-bold tracking-tight">
            {props.title}
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative z-10 mx-auto mt-5 max-w-screen-md text-center text-xl">
            {props.description}
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="relative z-10 mt-8 flex justify-center gap-x-5 gap-y-3 max-sm:flex-col">
            {props.buttons}
          </div>
        </motion.div>
      </>
    )}
  </InView>
);
