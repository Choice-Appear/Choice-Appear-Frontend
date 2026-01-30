import { StepIndicator } from '@/shared/ui/stepIndicator';

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
    <StepIndicator
      title="회원가입"
      steps={steps}
      currentStep={currentStep}
    />
  );
};
