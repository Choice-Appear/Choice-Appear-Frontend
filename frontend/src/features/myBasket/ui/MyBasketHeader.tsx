import { StepIndicator } from '@/shared/ui/stepIndicator';

interface MyBasketHeaderProps {
  currentStep: number;
}

export const MyBasketHeader = ({ currentStep }: MyBasketHeaderProps) => {
  const steps = [
    { id: 1, label: '장바구니' },
    { id: 2, label: '주문서 작성' },
    { id: 3, label: '주문 완료' },
  ];

  return (
    <StepIndicator
      title="장바구니"
      steps={steps}
      currentStep={currentStep}
    />
  );
};
