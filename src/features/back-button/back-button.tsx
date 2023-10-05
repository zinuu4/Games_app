import { useRouter } from 'next/navigation';
import React from 'react';

import { Button } from '@/shared/ui';

interface BackButtonProps {
  title: string;
}

export const BackButton: React.FC<BackButtonProps> = ({ title }) => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <Button
      title={title}
      onClick={handleGoBack}
    />
  );
};
