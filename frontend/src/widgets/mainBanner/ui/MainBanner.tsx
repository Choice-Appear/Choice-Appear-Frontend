import styles from './MainBanner.module.scss';
import main1 from '@/shared/assets/main1.png';
import main2 from '@/shared/assets/main2.png';
import main3 from '@/shared/assets/main3.png';
import { SliderIndicator } from '@/shared/ui/slideIndicator';
import { useState, useEffect } from 'react';

export const MainBanner = () => {
  /* 메인 배너 슬라이드 이미지 배열 */
  const sliderImg = [
    { id: 1, src: main1, alt: '메인1' },
    { id: 2, src: main2, alt: '메인2' },
    { id: 3, src: main3, alt: '메인3' },
  ];

  // 현재 보여지는 이미지 인덱스
  const [currentIdx, setCurrentIdx] = useState(0);

  /* 자동 슬라이드 기능 */
  useEffect(() => {
    const autoSlideInterval = setInterval(() => {
      setCurrentIdx(prevIdx => {
        return prevIdx === sliderImg.length - 1 ? 0 : prevIdx + 1;
      });
    }, 5000);

    // 컴포넌트 언마운트 시 타이머 정리
    return () => {
      clearInterval(autoSlideInterval);
    };
  }, [currentIdx, sliderImg.length]);

  /* 이전 이미지로 이동 */
  const handlePrev = () => {
    setCurrentIdx(prevIdx => {
      return prevIdx === 0 ? sliderImg.length - 1 : prevIdx - 1;
    });
  };

  /* 다음 이미지로 이동 */
  const handleNext = () => {
    setCurrentIdx(prevIdx => {
      return prevIdx === sliderImg.length - 1 ? 0 : prevIdx + 1;
    });
  };

  /* 인디케이터 클릭 핸들러 */
  const handleIndicatorClick = (index: number) => {
    setCurrentIdx(index);
  };

  return (
    <section className={styles.main}>
      <div className={styles.sliderContainer}>
        {/* 슬라이더 래퍼 - 스와이프 효과 */}
        <div className={styles.sliderWrapper}>
          <div
            className={styles.sliderTrack}
            style={{ transform: `translateX(-${currentIdx * 100}%)` }}
          >
            {sliderImg.map(img => (
              <img
                key={img.id}
                className={styles.img}
                src={img.src}
                alt={img.alt}
              />
            ))}
          </div>
        </div>

        {/* 좌측 화살표 버튼 */}
        <button
          className={styles.arrowLeft}
          onClick={handlePrev}
          aria-label="이전 이미지"
        >
          &#8249;
        </button>
        {/* 우측 화살표 버튼 */}
        <button
          className={styles.arrowRight}
          onClick={handleNext}
          aria-label="다음 이미지"
        >
          &#8250;
        </button>

        {/* 슬라이드 인디케이터 */}
        <SliderIndicator
          total={sliderImg.length}
          current={currentIdx}
          onIndicatorClick={handleIndicatorClick}
        />
      </div>
    </section>
  );
};
