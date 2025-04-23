'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import React from 'react';
import { InView } from 'react-intersection-observer';

import { Section } from '@/features/landing/Section';

export const ImportantNotice = () => {
  const t = useTranslations('Index');
  return (
    <InView>
      {({ inView, ref }) => (
        <div ref={ref}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <Section>
              <div className="flex flex-col items-center gap-4 rounded-lg bg-slate-300 p-12">
                <Image src="/assets/images/warning-6.svg" alt="important" width={100} height={100} />
                <h2 className="text-2xl font-bold">{t('important_notice_title')}</h2>
                <p>{t('important_notice')}</p>
              </div>
            </Section>
          </motion.div>
        </div>
      )}
    </InView>
  );
};
