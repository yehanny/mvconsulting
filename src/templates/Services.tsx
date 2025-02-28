import { useTranslations } from 'next-intl';

import { Background } from '@/components/Background';
import { Section } from '@/features/landing/Section';
import { ServiceCard } from '@/features/landing/ServiceCard';

export const Services = () => {
  const t = useTranslations('Services');

  return (
    <Background>
      <Section
        id="services"
        subtitle={t('section_subtitle')}
        title={t('section_title')}
        description={t('section_description')}
      >
        <div className="grid grid-cols-1 gap-x-3 gap-y-8 md:grid-cols-3">
          <ServiceCard
            image="/assets/images/services/service1.webp"
            title={t('service1_title')}
          >
            {t('service1_description')}
          </ServiceCard>
          <ServiceCard
            image="/assets/images/services/service2.webp"
            title={t('service2_title')}
          >
            {t('service2_description')}
          </ServiceCard>
          <ServiceCard
            image="/assets/images/services/service3.webp"
            title={t('service3_title')}
          >
            {t('service3_description')}
          </ServiceCard>
          <ServiceCard
            image="/assets/images/services/service4.webp"
            title={t('service4_title')}
          >
            {t('service4_description')}
          </ServiceCard>
          <ServiceCard
            image="/assets/images/services/service5.webp"
            title={t('service5_title')}
          >
            {t('service5_description')}
          </ServiceCard>
          <ServiceCard
            image="/assets/images/services/service6.webp"
            title={t('service6_title')}
          >
            {t('service6_description')}
          </ServiceCard>
        </div>
      </Section>
    </Background>
  );
};
