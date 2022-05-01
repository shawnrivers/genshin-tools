import { joinClassNames } from 'app/utils/classNames';
import { getLanguageFont, Language } from 'app/utils/languages';

type KeyButtonProps = {
  keyboardKey: KeyboardEvent['key'];
  label: React.ReactNode;
  language?: Language;
  noSubtext?: boolean;
  disabled?: boolean;
  className?: string;
  onClick: (key?: KeyboardEvent['key']) => void;
};

const KeyButton: React.FC<KeyButtonProps> = props => {
  const {
    keyboardKey,
    label,
    language = 'teyvat',
    noSubtext = false,
    disabled = false,
    className,
    onClick,
  } = props;

  return (
    <button
      disabled={disabled}
      className={joinClassNames(
        'flex h-16 flex-col items-center justify-center rounded bg-zinc-50 shadow hover:bg-zinc-200 focus:outline-none focus-visible:bg-zinc-200 active:bg-zinc-300 active:shadow-none disabled:bg-zinc-400',
        className,
      )}
      onClick={onClick.bind(null, keyboardKey)}
    >
      {!noSubtext && (
        <span aria-hidden className="font-sans text-xs text-zinc-400">
          {label}
        </span>
      )}
      <span
        className={joinClassNames(
          'text-2xl font-medium text-zinc-800 sm:text-3xl',
          getLanguageFont(language),
        )}
      >
        {label}
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
      <KeyButton
        keyboardKey="q"
        label="Q"
        language={language}
        className="col-span-2"
        onClick={onClick}
      />
      <KeyButton
        keyboardKey="w"
        label="W"
        language={language}
        className="col-span-2"
        onClick={onClick}
      />
      <KeyButton
        keyboardKey="e"
        label="E"
        language={language}
        className="col-span-2"
        onClick={onClick}
      />
      <KeyButton
        keyboardKey="r"
        label="R"
        language={language}
        className="col-span-2"
        onClick={onClick}
      />
      <KeyButton
        keyboardKey="t"
        label="T"
        language={language}
        className="col-span-2"
        onClick={onClick}
      />
      <KeyButton
        keyboardKey="y"
        label="Y"
        language={language}
        className="col-span-2"
        onClick={onClick}
      />
      <KeyButton
        keyboardKey="u"
        label="U"
        language={language}
        className="col-span-2"
        onClick={onClick}
      />
      <KeyButton
        keyboardKey="i"
        label="I"
        language={language}
        className="col-span-2"
        onClick={onClick}
      />
      <KeyButton
        keyboardKey="o"
        label="O"
        language={language}
        className="col-span-2"
        onClick={onClick}
      />
      <KeyButton
        keyboardKey="p"
        label="P"
        language={language}
        className="col-span-2"
        onClick={onClick}
      />
      <KeySpacer className="col-span-1" />
      <KeyButton
        keyboardKey="a"
        label="A"
        language={language}
        className="col-span-2"
        onClick={onClick}
      />
      <KeyButton
        keyboardKey="s"
        label="S"
        language={language}
        className="col-span-2"
        onClick={onClick}
      />
      <KeyButton
        keyboardKey="d"
        label="D"
        language={language}
        className="col-span-2"
        onClick={onClick}
      />
      <KeyButton
        keyboardKey="f"
        label="F"
        language={language}
        className="col-span-2"
        onClick={onClick}
      />
      <KeyButton
        keyboardKey="g"
        label="G"
        language={language}
        className="col-span-2"
        onClick={onClick}
      />
      <KeyButton
        keyboardKey="h"
        label="H"
        language={language}
        className="col-span-2"
        onClick={onClick}
      />
      <KeyButton
        keyboardKey="j"
        label="J"
        language={language}
        className="col-span-2"
        onClick={onClick}
      />
      <KeyButton
        keyboardKey="k"
        label="K"
        language={language}
        className="col-span-2"
        onClick={onClick}
      />
      <KeyButton
        keyboardKey="l"
        label="L"
        language={language}
        className="col-span-2"
        onClick={onClick}
      />
      <KeySpacer className="col-span-1" />
      <KeyButton
        keyboardKey="z"
        label="Z"
        language={language}
        className="col-span-2"
        onClick={onClick}
      />
      <KeyButton
        keyboardKey="x"
        label="X"
        language={language}
        className="col-span-2"
        onClick={onClick}
      />
      <KeyButton
        keyboardKey="c"
        label="C"
        language={language}
        className="col-span-2"
        onClick={onClick}
      />
      <KeyButton
        keyboardKey="v"
        label="V"
        language={language}
        className="col-span-2"
        onClick={onClick}
      />
      <KeyButton
        keyboardKey="b"
        label="B"
        language={language}
        className="col-span-2"
        onClick={onClick}
      />
      <KeyButton
        keyboardKey="n"
        label="N"
        language={language}
        className="col-span-2"
        onClick={onClick}
      />
      <KeyButton
        keyboardKey="m"
        label="M"
        language={language}
        className="col-span-2"
        onClick={onClick}
      />
      <KeyButton
        disabled={language === 'khaenriah' ? false : true}
        keyboardKey={language === 'khaenriah' ? ',' : ''}
        label={language === 'khaenriah' ? ',' : ''}
        language={language}
        className="col-span-2"
        onClick={onClick}
      />
      <KeyButton
        disabled={language === 'khaenriah' ? false : true}
        keyboardKey={language === 'khaenriah' ? '.' : ''}
        label={language === 'khaenriah' ? '.' : ''}
        language={language}
        className="col-span-2"
        onClick={onClick}
      />
      <KeyButton
        noSubtext
        keyboardKey="Backspace"
        label={
          <img
            src="/images/backspace.svg"
            alt="Backspace"
            className="h-10 w-10 fill-current"
          />
        }
        language={language}
        className="col-span-2"
        onClick={onClick}
      />
    </div>
  );
};
