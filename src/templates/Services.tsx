'use client';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { InView } from 'react-intersection-observer';

import { Background } from '@/components/Background';
import { Section } from '@/features/landing/Section';
import { ServiceCard } from '@/features/landing/ServiceCard';

export const Services = () => {
  const t = useTranslations('Services');
  // convert an string comma separated to an array of strings
  const services1 = t('service1_description').split(',');
  const services2 = t('service2_description').split(',');
  const services3 = t('service3_description').split(',');
  const services4 = t('service4_description').split(',');
  const services5 = t('service5_description').split(',');
  const pillStyles = 'rounded-full bg-gray-100 px-3 py-2 list-none text-sm';

  return (
    <InView>
      {({ inView, ref }) => (
        <Background>
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Section
              id="services"
              subtitle={t('section_subtitle')}
              title={t('section_title')}
              description={t('section_description')}
            >
              <div className="grid grid-cols-1 gap-x-3 gap-y-8 md:grid-cols-2">
                <ServiceCard
                  image="/assets/images/services/service1.webp"
                  title={t('service1_title')}
                >
                  {services1.map((service, index) => (
                    <li key={index} className={pillStyles}>
                      {service}
                    </li>
                  ))}
                </ServiceCard>
                <ServiceCard
                  image="/assets/images/services/service2.webp"
                  title={t('service2_title')}
                >
                  {services2.map((service, index) => (
                    <li key={index} className={pillStyles}>
                      {service}
                    </li>
                  ))}
                </ServiceCard>

                <ServiceCard
                  image="/assets/images/services/service3.webp"
                  title={t('service3_title')}
                >
                  {services3.map((service, index) => (
                    <li key={index} className={pillStyles}>
                      {service}
                    </li>
                  ))}
                </ServiceCard>
                <ServiceCard
                  image="/assets/images/services/service4.webp"
                  title={t('service4_title')}
                >
                  {services4.map((service, index) => (
                    <li key={index} className={pillStyles}>
                      {service}
                    </li>
                  ))}
                </ServiceCard>

                <ServiceCard
                  image="/assets/images/services/service5.webp"
                  title={t('service5_title')}
                >
                  {services5.map((service, index) => (
                    <li key={index} className={pillStyles}>
                      {service}
                    </li>
                  ))}
                </ServiceCard>
              </div>
            </Section>
          </motion.div>
        </Background>
      )}
    </InView>
  );
};
