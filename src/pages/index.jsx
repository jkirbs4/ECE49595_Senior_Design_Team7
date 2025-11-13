import Devine_Tree from '../../src/assets/Devine_Tree.png';

const Home = () => {
  return (
    <div
      className="h-screen w-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-white"
      style={{
        backgroundImage: `url(${Devine_Tree})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h1 className="text-4xl font-bold mb-4">Devine</h1>
      <p className="text-lg text-center max-w-xl">
        Set Goals, Train The Mind, Verify Progress, Smart Scaling, Social Connect, Your Path
      </p>
    </div>
  );
};

export default Home;