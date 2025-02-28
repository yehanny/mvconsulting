import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { StickyBanner } from '@/features/landing/StickyBanner';

export const StickyTopBanner = () => {
  const t = useTranslations('StickyTopBanner');
  return (
    <StickyBanner>
      {`${t('banner_title')} - `}
      <Link href="/tax-season">{t('banner_description')}</Link>
    </StickyBanner>
  );
};
