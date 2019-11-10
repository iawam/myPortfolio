import Layout from '../components/MyLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Index = props => (
  <Layout>
    <h1>Stock list</h1>
    <ul>
      {props.symbols.map(symbol => (
        <li key={symbol}>
          <Link href="/stocks/[symbol]" as={`/stocks/${symbol}`}>
            <a>{symbol}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch('https://financialmodelingprep.com/api/v3/company/stock/list');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.symbolsList.length}`);

  return {
    symbols: data.symbolsList.map(entry => entry.symbol)
  };
};

export default Index;