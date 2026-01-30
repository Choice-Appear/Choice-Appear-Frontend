import styles from './StepIndicator.module.scss';

interface Step {
  id: number;
  label: string;
}

interface StepIndicatorProps {
  title: string;
  steps: Step[];
  currentStep: number;
}

export const StepIndicator = ({ title, steps, currentStep }: StepIndicatorProps) => {
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <ol className={styles.stepList}>
        {steps.map(step => (
          <li
            key={step.id}
            className={
              currentStep === step.id ? styles.active : styles.inactive
            }
          >
            {step.id}. {step.label}
          </li>
        ))}
      </ol>
    </div>
  );
};