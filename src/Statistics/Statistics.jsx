import PropTypes from 'prop-types';
import {
  ItemLabel,
  ItemPercentage,
  StatisticsTitle,
  StatisticsWrapper,
  StatItem,
  StatList,
} from './Statistics.styled';
import getRandomHexColor from '../utils/GetRandomColor';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsWrapper>
      {title && <StatisticsTitle>{title}</StatisticsTitle>}

      <StatList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatItem key={id} style={{ backgroundColor: getRandomHexColor() }}>
              <ItemLabel>{label}</ItemLabel>
              <ItemPercentage>{percentage}%</ItemPercentage>
            </StatItem>
          );
        })}
      </StatList>
    </StatisticsWrapper>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
