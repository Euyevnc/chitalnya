import React, { useCallback, useRef } from 'react';

const Default: React.FC<{
  children: React.ReactNode;
  scrollCallback?: (event: React.UIEvent) => void;
}> = ({ children, scrollCallback }) => {
  const content: React.Ref<HTMLDivElement> = useRef(null);
  const filler: React.Ref<HTMLDivElement> = useRef(null);

  const caseScrollHandler = useCallback(
    (event: React.UIEvent) => {
      if (content.current) {
        const contentScroll = (event.target as HTMLElement).scrollTop;
        const contentHeight = content.current.scrollHeight - contentScroll;
        const contentPosition = contentScroll + 15;

        content.current.scrollTop = contentScroll;
        content.current.style.height = contentHeight + 'px';
        content.current.style.top = contentPosition + 'px';

        if (filler.current)
          filler.current.style.top = contentPosition + contentHeight + 'px';

        if (scrollCallback) scrollCallback(event);
      }
    },
    [scrollCallback]
  );

  return (
    <div className="default">
      <div className="default__content-case" onScroll={caseScrollHandler}>
        <div className="default__content" ref={content}>
          {children}
        </div>
        <div className="default__filler" ref={filler} />
      </div>
    </div>
  );
};

export default Default;
