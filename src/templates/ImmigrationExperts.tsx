'use client';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { InView } from 'react-intersection-observer';

import { Section } from '@/features/landing/Section';

export const ImmigrationExpert = () => {
  const t = useTranslations('ImmigrationExpert');

  return (
    <InView>
      {({ inView, ref }) => (
        <Section
          subtitle={t('section_subtitle')}
          title={t('section_title')}
          description={t('section_description')}
        >
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 gap-4 rounded-lg bg-gray-100 px-10 py-20 md:grid-cols-2">
              <div className="flex flex-col items-center justify-center gap-4">
                <h3 className="text-2xl font-bold">
                  {t('immigration1_title')}
                </h3>
                <p>
                  {t('immigration1_description')}
                </p>
              </div>
              <div className="flex flex-col items-center justify-center gap-4">
                <h3 className="text-2xl font-bold">
                  {t('immigration2_title')}
                </h3>
                <p>
                  {t('immigration2_description')}
                </p>
              </div>

            </div>
          </motion.div>
        </Section>
      )}
    </InView>
  );
};
