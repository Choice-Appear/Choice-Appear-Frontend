import styles from './SliderIndicator.module.scss';

interface SliderIndicatorProps {
  total: number;
  current: number;
  onIndicatorClick: (index: number) => void;
}

export const SliderIndicator = ({
  total,
  current,
  onIndicatorClick,
}: SliderIndicatorProps) => {
  return (
    <div className={styles.indicators}>
      {Array.from({ length: total }, (_, index) => (
        <button
          key={index}
          className={
            current === index ? styles.indicatorActive : styles.indicator
          }
          onClick={() => onIndicatorClick(index)}
          aria-label={`${index + 1}번 이미지로 이동`}
        />
      ))}
    </div>
  );
};
