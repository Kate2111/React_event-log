import { useSelector } from 'react-redux';
import Tabs from '@/components/Tabs';
import { userState } from '@/store/slice/userSlice';
import Loader from '@/components/Loader';

const Home = () => {
  const { loading } = useSelector(userState);

  return (
    <div className="card">
      {loading === 'pending' && <Loader />}
      {loading === 'succeeded' && <Tabs />}
    </div>
  );
};

export default Home;
