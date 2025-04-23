import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { StickyBanner } from '@/features/landing/StickyBanner';

import type { StickyTopBannerProps } from '../types/StickyTopBannerProps';

export const StickyTopBanner = ({ description, link }: StickyTopBannerProps) => {
  const t = useTranslations('StickyTopBanner');
  return (
    <StickyBanner>
      <Link href={`/${t(link)}`}>{t(description)}</Link>
    </StickyBanner>
  );
};
