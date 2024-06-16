import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import { useReducedMotion, useSpring } from 'framer-motion';
import { useEffect, useRef, memo } from 'react';
import { delay } from './../../Utils/delay';
import { classes } from './../../Utils/style';
import styles from './decoder-text.module.css';

const glyphs = [...Array(94)].map((_, i) => String.fromCharCode(i + 0x30a0));

const CharType = {
  Glyph: 'glyph',
  Value: 'value',
} as const;

type CharacterType = (typeof CharType)[keyof typeof CharType];

type Character = {
  type: CharacterType;
  value: string;
};

function shuffle(
  content: string,
  output: Character[],
  position: number
): Character[] {
  return content.split('').map((value, index) => {
    if (index < position) {
      return { type: CharType.Value, value };
    }

    const isGlyph = position % 1 < 0.5;
    const glyphValue = isGlyph
      ? glyphs[Math.floor(Math.random() * glyphs.length)]
      : output[index].value;

    return { type: CharType.Glyph, value: glyphValue };
  });
}

interface DecoderTextProps {
  text: string;
  start?: boolean;
  delay?: number;
  className?: string;
}

const DecoderText = memo<DecoderTextProps>(
  ({ text, start = true, delay: startDelay = 0, className, ...rest }) => {
    const output = useRef<Character[]>([]);
    const container = useRef<HTMLSpanElement>(null);
    const reduceMotion = useReducedMotion();
    const decoderSpring = useSpring(0, { stiffness: 8, damping: 5 });

    useEffect(() => {
      const containerInstance = container.current;
      const content = text;
      let animation: ReturnType<typeof setTimeout> | undefined;

      const renderOutput = () => {
        if (containerInstance) {
          containerInstance.innerHTML = output.current
            .map(
              ({ type, value }) =>
                `<span class="${styles[type]}">${value}</span>`
            )
            .join('');
        }
      };

      const unsubscribeSpring = decoderSpring.onChange((value) => {
        output.current = shuffle(content, output.current, value);
        renderOutput();
      });

      const startSpring = async () => {
        await delay(startDelay);
        decoderSpring.set(content.length);
      };

      if (start && !animation && !reduceMotion) {
        startSpring();
      }

      if (reduceMotion) {
        output.current = content.split('').map((_value, index) => ({
          type: CharType.Value,
          value: content[index],
        }));
        renderOutput();
      }

      return () => {
        unsubscribeSpring?.();
        animation && clearTimeout(animation);
      };
    }, [decoderSpring, reduceMotion, start, startDelay, text]);

    return (
      <span className={classes(styles.text, className)} {...rest}>
        <VisuallyHidden className={styles.label}>{text}</VisuallyHidden>
        <span aria-hidden className={styles.content} ref={container} />
      </span>
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.text === nextProps.text &&
      prevProps.start === nextProps.start &&
      prevProps.delay === nextProps.delay &&
      prevProps.className === nextProps.className
    );
  }
);

export default DecoderText;
