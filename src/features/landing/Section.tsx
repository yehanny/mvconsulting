'use client';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';

import { cn } from '@/utils/Helpers';

export const Section = (props: {
  children?: React.ReactNode;
  id?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  className?: string;
  backgroundImage?: string;
}) => (
  <InView>
    {({ inView, ref }) => (

      <section
        id={props.id}
        className={cn('px-3 py-16', props.className)}
        style={{
          backgroundImage: `url(${props.backgroundImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          backgroundBlendMode: 'overlay',
        }}
      >
        {(props.title || props.subtitle || props.description) && (
          <div className="mx-auto mb-12 max-w-screen-md text-center">
            {props.subtitle && (
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="bg-gradient-to-r from-[#98BAC3] to-[#06606B] bg-clip-text text-sm font-bold text-transparent">
                  {props.subtitle}
                </div>
              </motion.div>
            )}

            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {props.title && (
                <div className="mt-1 text-3xl font-bold">{props.title}</div>
              )}
            </motion.div>

            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {props.description && (
                <div className="mt-2 text-lg text-muted-foreground">
                  {props.description}
                </div>
              )}
            </motion.div>
          </div>
        )}

        <div className="mx-auto max-w-screen-lg">{props.children}</div>
      </section>
    )}
  </InView>
);
