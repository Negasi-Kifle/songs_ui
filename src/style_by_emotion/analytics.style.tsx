import styled from "@emotion/styled";

export const AnalyticsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

export const AnalyticsTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 1rem;
`;

export const AnalyticsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const AnalyticsItem = styled.div`
  background-color: #cef1ff;
  padding: 1rem;
  border-radius: 4px;
  display: flex;
  gap: 1rem;
`;

export const AnalyticsLabel = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const AnalyticsValue = styled.p`
  font-size: 14px;
  color: #666666;
`;