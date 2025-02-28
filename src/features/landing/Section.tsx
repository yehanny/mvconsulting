import { cn } from '@/utils/Helpers';

export const Section = (props: {
  children?: React.ReactNode;
  id?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  className?: string;
  backgroundImage?: string;
}) => (
  <div
    className={cn('px-3 py-16', props.className)}
    style={{
      backgroundImage: `url(${props.backgroundImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      backgroundBlendMode: 'overlay',
    }}
  >
    {(props.title || props.subtitle || props.description) && (
      <div className="mx-auto mb-12 max-w-screen-md text-center">
        {props.subtitle && (
          <div className="bg-gradient-to-r from-[#98BAC3] to-[#06606B] bg-clip-text text-sm font-bold text-transparent">
            {props.subtitle}
          </div>
        )}

        {props.title && (
          <div className="mt-1 text-3xl font-bold">{props.title}</div>
        )}

        {props.description && (
          <div className="mt-2 text-lg text-muted-foreground">
            {props.description}
          </div>
        )}
      </div>
    )}

    <div className="mx-auto max-w-screen-lg">{props.children}</div>
  </div>
);
