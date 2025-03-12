import { ISkeletonProps } from '@/shared/types/components/skeleton.types';
import styled, { keyframes } from 'styled-components';

export default function Skeleton({ width, height }: ISkeletonProps) {
  return <Container $width={width} height={height} />;
}

const SkeletonLoading = keyframes`
  0% {
    background-color: #F0F0F0;
  }
  100% {
    background-color: #E6EDF5;
  }`;

const Container = styled.div<{ $width: number; height: number }>`
  width: ${({ $width }) => $width}px;
  height: ${({ height }) => height}px;
  border-radius: 10px;
  animation: ${SkeletonLoading} 0.7s linear infinite alternate;
`;
