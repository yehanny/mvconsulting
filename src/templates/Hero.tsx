'use client';
import { InstagramLogoIcon } from '@radix-ui/react-icons';
import { useTranslations } from 'next-intl';

import { badgeVariants } from '@/components/ui/badgeVariants';
import { buttonVariants } from '@/components/ui/buttonVariants';
import { CenteredHero } from '@/features/landing/CenteredHero';
import { Section } from '@/features/landing/Section';

export const Hero = () => {
  const t = useTranslations('Hero');

  return (
    <Section className="py-36 md:py-72" backgroundImage="/assets/images/hero-background.webp">
      <CenteredHero
        banner={(
          <a
            className={badgeVariants()}
            href="https://instagram.com/mvconsultingusa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramLogoIcon className="mr-1 size-5" />
            {' '}
            {t('follow_instagram')}
          </a>

        )}
        title={t.rich('title', {
          important: chunks => (
            <span className="bg-gradient-to-r from-[#98BAC3] to-[#06606B] bg-clip-text text-transparent">
              {chunks}
            </span>
          ),
        })}
        description={t('description')}
        buttons={(
          <a
            className={buttonVariants({ size: 'lg' })}
            href="/contacts"
          >
            {t('primary_button')}
          </a>
        )}
      />
    </Section>
  );
};
