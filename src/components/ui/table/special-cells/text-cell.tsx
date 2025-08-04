import { HTMLAttributes, ReactNode, useEffect, useRef, useState } from "react";

interface TextCellProps extends HTMLAttributes<HTMLParagraphElement> {
  text?: string | number | null;
  noTranslate?: boolean;
  className?: string;
  detailsComponent?: (
    show: boolean,
    setShow: (show: boolean) => void
  ) => ReactNode;
  bold?: boolean;
}

export function TextCell({
  text,
  noTranslate = false,
  className = "",
  detailsComponent,
  bold,
  ...rest
}: TextCellProps) {
  const [showModal, setShowModal] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);
  const [showToolTip, setShowTooltip] = useState(false);

  useEffect(() => {
    const el = textRef.current;
    if (el) {
      setIsTruncated(el.scrollWidth > el.clientWidth);
    }
  }, [text]);

  const content =
    typeof text === "number"
      ? text.toLocaleString("en-US", { minimumIntegerDigits: 1 })
      : text ?? "-";

  return (
    <div
      className="w-[90%] relative"
      onMouseEnter={() => isTruncated && setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <p
        ref={textRef}
        className={`text-start truncate ${!text && text !== 0 ? "ml-4" : ""} ${
          isTruncated ? "cursor-pointer" : ""
        } ${className}`}
        onClick={() => setShowModal(true)}
        {...rest}
      >
        {content}
      </p>

      {detailsComponent && detailsComponent(showModal, setShowModal)}

      {showToolTip && (
        <div className="absolute z-1000 bottom-8 left-0  px-3 py-2 bg-white text-primary shadow-lg rounded-lg border border-gray5 ">
          <p className="text-nowrap">{content}</p>
        </div>
      )}
    </div>
  );
}
