/* eslint-disable */

import fs from 'fs';
import path from 'path';
import * as matter from 'gray-matter';
import marked from 'marked';

import Head from 'next/head';
import Link from 'next/link';

export default function Changelog({ logs }) {
  return (
    <div className="contentContainer page">
      <Head>
        <title>Spectral - Changelog</title>
      </Head>

      <div className="heading">
        <div className="left"></div>
        <div className="hero">
          <Link href="/changelog">
            <h1>Changelog</h1>
          </Link>
          <p>Track updated and improvements to Spectral.</p>
        </div>
      </div>

      <div className="posts">
        {logs.map((log) => {
          return (
            <div key={log.slug}>
              <hr />
              <div className="post">
                <div className="left">
                  <h4>
                    <Link href={`/changelog/${log.slug}`}>{log.data.date}</Link>
                  </h4>
                </div>
                <div className="right">
                  <div>
                    <h2 className="title">{log.data.title}</h2>
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
          );
        })}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('logs'));
  const logs = files.map((fn) => {
    const mdMeta = fs.readFileSync(path.join('logs', fn), 'utf-8');

    const { data, content } = matter(mdMeta);

    const slug = data.title
      .toLowerCase()
      .replace(/[^\w ]+/g, '')
      .replace(/ +/g, '-');

    return { data, content, slug };
  });

  return {
    props: {
      logs: logs,
    },
  };
}
