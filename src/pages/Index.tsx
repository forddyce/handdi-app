import InstallPrompt from '../components/Home/InstallPrompt';
import Onboard from '../components/Home/Onboard';

const Index = () => {
  const isPWA = window.matchMedia('(display-mode: standalone)').matches;
  
  return (
    <>
      {!isPWA ? <InstallPrompt /> : <Onboard />}
    </>
  );
};

export default Index;
