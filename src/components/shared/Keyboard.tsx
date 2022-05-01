import { joinClassNames } from 'app/utils/classNames';
import { getLanguageFont, Language } from 'app/utils/languages';

type KeyboardKey = {
  label?: string;
  key?: KeyboardEvent['key'];
  isSpacer?: boolean;
};

const firstRowKeys: KeyboardKey[] = [
  {
    label: 'Q',
    key: 'q',
  },
  {
    label: 'W',
    key: 'w',
  },
  {
    label: 'E',
    key: 'e',
  },
  {
    label: 'R',
    key: 'r',
  },
  {
    label: 'T',
    key: 't',
  },
  {
    label: 'Y',
    key: 'y',
  },
  {
    label: 'U',
    key: 'u',
  },
  {
    label: 'I',
    key: 'i',
  },
  {
    label: 'O',
    key: 'o',
  },
  {
    label: 'P',
    key: 'p',
  },
];

const secondRowKeys: KeyboardKey[] = [
  {
    isSpacer: true,
  },
  {
    label: 'A',
    key: 'a',
  },
  {
    label: 'S',
    key: 's',
  },
  {
    label: 'D',
    key: 'd',
  },
  {
    label: 'F',
    key: 'f',
  },
  {
    label: 'G',
    key: 'g',
  },
  {
    label: 'H',
    key: 'h',
  },
  {
    label: 'J',
    key: 'j',
  },
  {
    label: 'K',
    key: 'k',
  },
  {
    label: 'L',
    key: 'l',
  },
  {
    isSpacer: true,
  },
];

const thirdRowKeys: KeyboardKey[] = [
  {
    isSpacer: true,
  },
  {
    label: 'Z',
    key: 'z',
  },
  {
    label: 'X',
    key: 'x',
  },
  {
    label: 'C',
    key: 'c',
  },
  {
    label: 'V',
    key: 'v',
  },
  {
    label: 'B',
    key: 'b',
  },
  {
    label: 'N',
    key: 'n',
  },
  {
    label: 'M',
    key: 'm',
  },
  {
    label: ',',
    key: ',',
  },
  {
    label: '.',
    key: '.',
  },
  {
    isSpacer: true,
  },
];

type KeyButtonProps = {
  keyboardKey: KeyboardKey;
  language?: Language;
  className?: string;
  onClick: (key?: KeyboardEvent['key']) => void;
};

const KeyButton: React.FC<KeyButtonProps> = props => {
  const { keyboardKey, language = 'teyvat', className, onClick } = props;

  return (
    <button
      className={joinClassNames(
        'flex h-16 flex-col items-center justify-center rounded bg-zinc-50 shadow hover:bg-zinc-200 focus:outline-none focus-visible:bg-zinc-200 active:bg-zinc-300 active:shadow-none',
        className,
      )}
      onClick={onClick.bind(null, keyboardKey.key)}
    >
      <span aria-hidden className="font-sans text-xs text-zinc-400">
        {keyboardKey.label}
      </span>
      <span
        className={joinClassNames(
          'text-2xl font-medium text-zinc-800 sm:text-3xl',
          getLanguageFont(language),
        )}
      >
        {keyboardKey.label}
      </span>
    </button>
  );
};

const KeySpacer: React.FC<{ className?: string }> = props => {
  const { className } = props;
  return <div className={joinClassNames('h-10', className)} />;
};

export type KeyboardProps = {
  language?: KeyButtonProps['language'];
  className?: string;
  onClick: KeyButtonProps['onClick'];
};

export const Keyboard: React.FC<KeyboardProps> = props => {
  const { language, className, onClick } = props;

  return (
    <div
      className={joinClassNames(
        'grid w-full max-w-5xl grid-cols-20 gap-1',
        className,
      )}
    >
      {[...firstRowKeys, ...secondRowKeys, ...thirdRowKeys].map(
        (keyboardKey, index) =>
          keyboardKey.isSpacer ? (
            <KeySpacer className="col-span-1" key={`i-${index}`} />
          ) : (
            <KeyButton
              key={`k-${keyboardKey.key}` ?? `i-${index}`}
              keyboardKey={keyboardKey}
              language={language}
              className={'col-span-2'}
              onClick={onClick}
            />
          ),
      )}
    </div>
  );
};
