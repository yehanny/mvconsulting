'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { InView } from 'react-intersection-observer';

import { Section } from '@/features/landing/Section';

export const Asylum = () => {
  const t = useTranslations('Asylum');

  return (
    <Section
      subtitle={t('section_subtitle')}
      title={t('section_title')}
      description={t('section_description')}
    >
      <InView>
        {({ inView, ref }) => (
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <div className="grid grid-cols-1 gap-4 rounded-lg bg-gray-100 px-10 py-20 md:grid-cols-2">
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="flex flex-col items-center justify-center">
                  <h3 className="text-2xl font-bold">
                    {t('asylum1_title')}
                  </h3>
                  <p className="text-center">
                    {t('asylum1_description')}
                  </p>
                </div>
                <div className="mt-10 flex flex-col items-center justify-center">
                  <h3 className="text-2xl font-bold">
                    {t('asylum2_title')}
                  </h3>
                  <p className="text-center">
                    {t('asylum2_description')}
                  </p>
                </div>
                <div className="mt-10 flex flex-col items-center justify-center">
                  <h3 className="text-2xl font-bold">
                    {t('asylum3_title')}
                  </h3>
                  <p className="text-center">
                    {t('asylum3_description')}
                  </p>
                </div>
              </div>
              {/* Image full width and height */}
              <div className="flex flex-col items-center justify-center">
                <Image src="/assets/images/mariceli3.webp" width={300} height={300} alt="asylum" className="w-full rounded-2xl" />
              </div>
            </div>
          </motion.div>
        )}
      </InView>
    </Section>
  );
};
