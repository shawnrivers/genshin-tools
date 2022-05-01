import { Layout } from 'app/components/shared/Layout';
import { NextPageWithLayout } from 'app/utils/types';

const Home: NextPageWithLayout = () => {
  return null;
};

export default Home;

Home.getLayout = page => {
  return <Layout heading="Genshin Tools">{page}</Layout>;
};
