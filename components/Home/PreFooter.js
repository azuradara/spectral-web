/* eslint-disable */
import Image from 'next/image';

import logoFillIcon from 'assets/svg/logo_fill_ico.svg';
import downloadIcon from 'assets/svg/download.svg';
import githubIcon from 'assets/svg/social/github.svg';

const PreFooter = () => {
  return (
    <div className="prefooter section alternate">
      <div className="contentContainer">
        <Image src={logoFillIcon} />
        <div className="_container">
          <h2 className="header">Get started with Spectral today.</h2>
          <div className="description">
            Spectral keeps all of your data in one place. Bookmarks, tasks,
            emails, and calendar - all available in one too.
          </div>
        </div>
        <div className="spacer" />
        <div className="buttons">
          <button className="appBtn_Btn">
            <h3>Download</h3>
            <Image src={downloadIcon} height={24} width={24} />
          </button>
          <button
            onClick={() =>
              (window.location.href =
                'https://github.com/azuradara/spectral-app')
            }
            className="appBtn_Btn Btn__secondary"
          >
            <h3>View Source</h3>
            <Image src={githubIcon} height={32} width={32} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreFooter;
