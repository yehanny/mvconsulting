'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { InView } from 'react-intersection-observer';

import { Background } from '@/components/Background';
import { Section } from '@/features/landing/Section';

export const Nationality = () => {
  const t = useTranslations('Nationality');

  return (
    <Background>
      <Section
        subtitle={t('section_subtitle')}
        title={t('section_title')}
        description={t('section_description')}
      >
        <InView>
          {({ inView, ref }) => (
            <div className="grid grid-cols-1 gap-4 rounded-lg bg-gray-100 px-10 py-20 md:grid-cols-2">
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex flex-col items-center justify-center gap-4">
                  <Image className="rounded-2xl" src="/assets/images/services/citizen-forms.webp" alt="citizens" width={300} height={300} />

                  <h3 className="text-2xl font-bold">
                    {t('nationality1_title')}
                  </h3>
                  <p>
                    {t('nationality1_description')}
                  </p>
                </div>
              </motion.div>
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="flex flex-col items-center justify-center gap-4">
                  <Image className="rounded-2xl" src="/assets/images/services/nationality.webp" alt="nationality" width={300} height={300} />
                  <h3 className="text-2xl font-bold">
                    {t('nationality2_title')}
                  </h3>
                  <p>
                    {t('nationality2_description')}
                  </p>
                </div>
              </motion.div>
            </div>
          )}
        </InView>
      </Section>
    </Background>
  );
};
