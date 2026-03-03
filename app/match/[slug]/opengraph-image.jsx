import { ImageResponse } from 'next/og';
import { getMatchBySlug } from '@/data/matches';
import { readFile } from 'fs/promises';
import path from 'path';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image({ params }) {
  const { slug } = await params;
  const match = getMatchBySlug(slug);

  if (!match) {
    return new ImageResponse(
      <div style={{ width: '100%', height: '100%', background: '#0a0a0a' }} />,
      { ...size }
    );
  }

  const { home, away, score, homeColour, awayColour } = match.meta;

  // Load sub board image from public folder
  const subBoardData = await readFile(path.join(process.cwd(), 'public/og-sub-board.png'));
  const subBoardSrc = `data:image/png;base64,${subBoardData.toString('base64')}`;

  // Load Bebas Neue font
  let fontData;
  try {
    const fontRes = await fetch(
      'https://fonts.gstatic.com/s/bebasneue/v14/JTUSjIg69CK48gW7PXoo9WdhyyTh89ZNpQ.woff2'
    );
    fontData = await fontRes.arrayBuffer();
  } catch {
    fontData = null;
  }

  // Some team colours are too dark/light for the background — use white as fallback
  const safeHomeColour = homeColour === '#000000' ? '#ffffff' : homeColour;
  const safeAwayColour = awayColour === '#000000' ? '#ffffff' : awayColour;

  const [homeScore, awayScore] = score.split('-');

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: '#0a0a0a',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '60px 80px',
          fontFamily: fontData ? 'Bebas Neue' : 'sans-serif',
        }}
      >
        {/* Left: Match scoreline */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            paddingRight: '40px',
          }}
        >
          {/* Home team */}
          <div
            style={{
              color: safeHomeColour,
              fontSize: 72,
              lineHeight: 1,
              letterSpacing: '2px',
              textTransform: 'uppercase',
            }}
          >
            {home}
          </div>

          {/* Score */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              margin: '8px 0',
            }}
          >
            <span style={{ color: '#ffffff', fontSize: 160, lineHeight: 1 }}>
              {homeScore}
            </span>
            <span style={{ color: '#333', fontSize: 80, lineHeight: 1 }}>–</span>
            <span style={{ color: '#ffffff', fontSize: 160, lineHeight: 1 }}>
              {awayScore}
            </span>
          </div>

          {/* Away team */}
          <div
            style={{
              color: safeAwayColour,
              fontSize: 72,
              lineHeight: 1,
              letterSpacing: '2px',
              textTransform: 'uppercase',
            }}
          >
            {away}
          </div>

          {/* CTA */}
          <div
            style={{
              marginTop: '32px',
              color: '#e8290b',
              fontSize: 24,
              letterSpacing: '4px',
              textTransform: 'uppercase',
            }}
          >
            Play on Worst Eleven
          </div>
        </div>

        {/* Right: Sub board image */}
        <img
          src={subBoardSrc}
          style={{
            width: '380px',
            height: '380px',
            objectFit: 'contain',
          }}
        />
      </div>
    ),
    {
      ...size,
      ...(fontData
        ? {
            fonts: [
              {
                name: 'Bebas Neue',
                data: fontData,
                style: 'normal',
                weight: 400,
              },
            ],
          }
        : {}),
    }
  );
}
