import { useState } from 'react';

const currencyOptions = [
  { label: 'EUR', value: 'EUR' },
  { label: 'USD', value: 'USD' },
  { label: 'GBP', value: 'GBP' }
];
const currencyOptionsContent = currencyOptions.map(option => (
  <option key={option.label} value={option.value}>{option.label}</option>
));

const Prices = (props) => {
  const [currency, setCurrency] = useState('EUR');

  const { bpi } = props;

  return (
    <div>
      <select onChange={e => setCurrency(e.target.value)}>
        {currencyOptionsContent}
      </select>
      <ul>
        <li>
          Bitcoin rate for {bpi[currency].description}:&nbsp;
          <span>{bpi[currency].code}&nbsp;</span>
          <strong>{bpi[currency].rate}</strong>
        </li>
      </ul>
    </div>
  );
}

export default Prices;
