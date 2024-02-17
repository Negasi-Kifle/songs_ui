import {
  AnalyticsContainer,
  AnalyticsGrid,
  AnalyticsItem,
  AnalyticsLabel,
  AnalyticsTitle,
  AnalyticsValue,
} from "../styles_by_emotion/analytics.style";

// Analytics page
const Analytics = () => {
  return (
    <AnalyticsContainer>
      <AnalyticsTitle>Analytics</AnalyticsTitle>
      <AnalyticsGrid>
        <AnalyticsItem>
          <AnalyticsLabel>Total Artist</AnalyticsLabel>
          <AnalyticsValue>1,234</AnalyticsValue>
        </AnalyticsItem>
        <AnalyticsItem>
          <AnalyticsLabel>Song By Artist</AnalyticsLabel>
          <AnalyticsValue>5,678</AnalyticsValue>
        </AnalyticsItem>
        <AnalyticsItem>
          <AnalyticsLabel>Song By Album</AnalyticsLabel>
          <AnalyticsValue>10,567</AnalyticsValue>
        </AnalyticsItem>
        <AnalyticsItem>
          <AnalyticsLabel>Song By Genre</AnalyticsLabel>
          <AnalyticsValue>12,000</AnalyticsValue>
        </AnalyticsItem>
      </AnalyticsGrid>
    </AnalyticsContainer>
  );
};

export default Analytics;
