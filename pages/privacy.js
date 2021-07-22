import Head from 'next/head';
import Link from 'next/link';

import fs from 'fs';
import path from 'path';
import * as matter from 'gray-matter';
import marked from 'marked';

export default function Privacy({ log }) {
  return (
    <div className="contentContainer page privacy">
      <Head>
        <title>Spectral - Privacy Policy</title>
      </Head>

      <div className="heading">
        <div className="left"></div>
        <div className="hero">
          <Link href="/changelog">
            <h1>Privacy Policy</h1>
          </Link>
        </div>
      </div>

      <div className="posts">
        <div key={log.slug}>
          <hr />
          <div className="post">
            <div className="right">
              <div>
                {log.data.cover_image && (
                  <figure>
                    <img src={log.data.cover_image} />
                  </figure>
                )}
                <div
                  dangerouslySetInnerHTML={{ __html: marked(log.content) }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const file = fs.readFileSync(path.join('markdown/privacy.md'));
  const { data, content } = matter(file);

  const slug = data.title
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');

  return {
    props: {
      log: { data, content, slug },
    },
  };
}
