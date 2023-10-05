'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

import { Button } from '@/shared/ui';

interface BackButtonProps {
  title: string;
  className?: string;
  path: string;
}

export const BackButton: React.FC<BackButtonProps> = ({
  title,
  className,
  path,
}) => {
  const router = useRouter();

  const handleGoBack = () => {
    router.push(path);
  };

  return (
    <Button
      title={title}
      onClick={handleGoBack}
      className={className}
    />
  );
};
