import PropTypes from 'prop-types';
import {
    Title,
    SList,
    SItem,
    SLabel,
    SPercent,
    SSection
} from './Statistics.style';

function Statistics(
   { title, stats }
    ) {
return (
    <SSection>
  {title.length > 0 && <Title>{title}</Title>}

  <SList>
  {stats.map(({ id, label, percentage }) => (
        <SItem key={id}>
        <SLabel>{label}</SLabel>
        <SPercent>{percentage}%</SPercent>
      </SItem>
   )) }
</SList>
</SSection>
)
}

Statistics.prototype = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }).isRequired
    ),
};

export { Statistics };