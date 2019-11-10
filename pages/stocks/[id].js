import Layout from '../../components/MyLayout';
import fetch from 'isomorphic-unfetch';

const Stock = props => (
  <Layout>
    <h1>{props.stock.name}</h1>
    <p>{props.stock.price.replace(/<[/]?[pb]>/g, '')}</p>    
  </Layout>
);

Stock.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://financialmodelingprep.com/api/v3/company/stock/list/${id}`);
  const stock = await res.json();

  console.log(`Fetched stock: ${stock.name}`);

  return { stock };
};

export default Stock;