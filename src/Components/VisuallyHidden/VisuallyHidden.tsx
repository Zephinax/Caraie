import { forwardRef } from 'react';
import { classes } from './../../Utils/style';
import styles from './visually-hidden.module.css';

export const VisuallyHidden = forwardRef(
  (
    {
      className,
      showOnFocus,
      as: Component = 'span',
      children,
      visible,
      ...rest
    }: {
      className?: string;
      showOnFocus?: boolean;
      as?: React.ElementType;
      children: React.ReactNode;
      visible?: boolean;
    } & React.HTMLAttributes<HTMLElement>,
    ref: React.Ref<HTMLElement>
  ) => {
    return (
      <Component
        className={classes(styles.hidden, className)}
        data-hidden={!visible && !showOnFocus}
        data-show-on-focus={showOnFocus}
        ref={ref}
        {...rest}>
        {children}
      </Component>
    );
  }
);
