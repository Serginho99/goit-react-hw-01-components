import PropTypes from 'prop-types';
import {
  StatisticsBox,
  Title,
  StatList,
  Item,
  Label,
  Percentage,
} from './Statistics.styled.jsx';

export default function Statistics({ title, stats }) {
  return (
    <StatisticsBox>
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <Item key={id}>
            <Label>{label}</Label>
            <Percentage>{percentage}</Percentage>
          </Item>
        ))}
      </StatList>
    </StatisticsBox>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ).isRequired,
};
