import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

import downloadIcon from 'assets/svg/download.svg';

const Splash = () => {
  const router = useRouter();

  return (
    <div id="splash">
      <div className="contentContainer">
        <Head>
          <title>Spectral - A new tab replacement</title>
        </Head>
        <motion.span
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              translateY: -20,
              opacity: 0,
            },
            visible: {
              opacity: 1,
              translateY: 0,
              transition: {
                duration: 1,
                delay: 0.4,
              },
            },
          }}
        >
          <h1>The new tab enhancement project</h1>
        </motion.span>

        <motion.span
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              translateY: -10,
              opacity: 0,
            },
            visible: {
              opacity: 1,
              translateY: 0,
              transition: {
                duration: 1,
                delay: 1,
              },
            },
          }}
        >
          <p>
            Spectral supercharges the functionality of blank tabs by
            streamlining daily tasks.
          </p>
        </motion.span>

        <div className="spacer" />
        <motion.span
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              translateY: -10,
              opacity: 0,
            },
            visible: {
              opacity: 1,
              translateY: 0,
              transition: {
                duration: 1,
                delay: 1,
              },
            },
          }}
        >
          <button
            onClick={() => router.push('/download')}
            className="appBtn_Btn"
          >
            <h3>Download Spectral</h3>
            <Image src={downloadIcon} height={24} width={24} />
          </button>
        </motion.span>
        <div className="spacer2" />

        <motion.div className="imageContainer">
          <div className="glow" />
        </motion.div>
      </div>
    </div>
  );
};

export default Splash;
