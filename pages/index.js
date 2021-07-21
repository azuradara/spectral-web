import Splash from 'components/Home/Splash.js';
import Features from 'components/Home/Features.js';
import Waves from 'components/shared/Waves';
import PreFooter from 'components/Home/PreFooter';

export default function Home() {
  return (
    <>
      <Splash />
      <Waves className="upside-down" />
      <Features />
      <Waves />
      <PreFooter />
    </>
  );
}
