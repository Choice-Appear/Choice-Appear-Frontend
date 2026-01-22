import styles from './SignupHeader.module.scss';

interface SignupHeaderProps {
  currentStep: number;
}

export const SignupHeader = ({ currentStep }: SignupHeaderProps) => {
  const steps = [
    { id: 1, label: '약관동의' },
    { id: 2, label: '정보입력' },
    { id: 3, label: '가입완료' },
  ];

  return (
    <div className={styles.container}>
      <h1>회원가입</h1>
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
