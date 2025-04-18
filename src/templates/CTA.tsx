'use client';
import { EnvelopeClosedIcon } from '@radix-ui/react-icons';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { InView } from 'react-intersection-observer';

import { buttonVariants } from '@/components/ui/buttonVariants';
import { CTABanner } from '@/features/landing/CTABanner';
import { Section } from '@/features/landing/Section';

export const CTA = () => {
  const t = useTranslations('CTA');

  return (
    <Section>
      <InView>
        {({ inView, ref }) => (
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <CTABanner
              title={t('title')}
              description={t('description')}
              buttons={(
                <a
                  className={buttonVariants({ variant: 'outline', size: 'lg' })}
                  href="/contacts"
                >
                  <EnvelopeClosedIcon className="mr-2 size-5" />
                  {t('button_text')}
                </a>
              )}
            />
          </motion.div>
        )}
      </InView>
    </Section>
  );
};
