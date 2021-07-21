import Image from 'next/image';

import SvgModular from 'assets/svg/features/modular.svg';
import SvgBrush from 'assets/svg/features/brush.svg';
import SvgKeyboard from 'assets/svg/features/keyboard.svg';
import SvgOffline from 'assets/svg/features/offline.svg';
import SvgSync from 'assets/svg/features/sync.svg';
import SvgFeather from 'assets/svg/features/feather.svg';

const Features = () => {
  return (
    <div className="section">
      <div className="contentContainer">
        <div className="_container">
          <h2 className="header">
            A productivity-first approach to your browser experience.
          </h2>
          <div className="description">
            Spectral offers a wide variety of additional features and utilities.
          </div>
        </div>
        <div className="grid">
          <div className="gridElement">
            <h4>
              <Image src={SvgModular} width={24} height={24} />
            </h4>
            <h5>Modular</h5>
            <p>Pick and choose which modules you would like to use.</p>
          </div>
          <div className="gridElement">
            <h4>
              <Image src={SvgBrush} width={24} height={24} />
            </h4>
            <h5>Customizable</h5>
            <p>
              Comes with powerful customization tools to make you feel at home.
            </p>
          </div>
          <div className="gridElement">
            <h4>
              <Image src={SvgKeyboard} width={24} height={24} />
            </h4>
            <h5>Keyboard friendly</h5>
            <p>Optimized for efficiency with useful keyboard shortcuts.</p>
          </div>
          <div className="gridElement">
            <h4>
              <Image src={SvgOffline} width={24} height={24} />
            </h4>
            <h5>Works offline</h5>
            <p>Access and manage your data with or without internet access.</p>
          </div>
          <div className="gridElement">
            <h4>
              <Image src={SvgSync} width={24} height={24} />
            </h4>
            <h5>Background Sync</h5>
            <p>Sync your bookmarks & data across all devices in real-time.</p>
          </div>
          <div className="gridElement">
            <h4>
              <Image src={SvgFeather} width={24} height={24} />
            </h4>
            <h5>Lightweight</h5>
            <p>
              Spectral is designed to use low resources. No spinners or waiting.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
