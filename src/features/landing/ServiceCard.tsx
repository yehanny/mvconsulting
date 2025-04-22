import { motion } from 'framer-motion';
import Image from 'next/image';
import { InView } from 'react-intersection-observer';

export const ServiceCard = (props: {
  image: string;
  title: string;
  children: React.ReactNode;
}) => (
  <InView>
    {({ inView, ref }) => (

      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="rounded-xl border border-border bg-card p-5">
          <Image src={props.image} width={300} height={150} className="w-full" alt="" />

          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: -30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="mt-2 text-lg font-bold">{props.title}</div>
            <div className="my-3 w-8 border-t border-[#98BAC3]" />
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: -30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="mt-2 flex flex-wrap gap-2 text-muted-foreground">{props.children}</div>
          </motion.div>
        </div>
      </motion.div>

    )}

  </InView>
);
