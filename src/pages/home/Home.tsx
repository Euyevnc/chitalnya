import React, { FC, useCallback, useEffect, useRef } from 'react';
import { Observer } from '../../utils/utils';

const Home: FC<{ scrollObserver?: Observer }> = ({ scrollObserver }) => {
  const preview: React.Ref<HTMLDivElement> = useRef(null);

  const scrollParentCallback = useCallback((event: React.UIEvent) => {
    if (preview.current) {
      const previewHeight = preview.current.scrollHeight;
      const parentScroll = (event.target as HTMLElement).scrollTop;
      console.log(previewHeight);
      const stage = Math.min(parentScroll / previewHeight, 1);
      preview.current.style.backgroundPositionY = 10 - 10 * stage + '%';
      preview.current.style.filter = `brightness(${1 - 0.5 * stage})`;
    }
  }, []);

  useEffect(() => {
    if (scrollObserver) scrollObserver.subscribe(scrollParentCallback);
  });

  return (
    <div className="home">
      <div className="home__preview" ref={preview}></div>
      <div className="home__content"></div>
    </div>
  );
};

export default Home;
