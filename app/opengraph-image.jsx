import { ImageResponse } from 'next/og';
import { readFile } from 'fs/promises';
import path from 'path';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
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
        {/* Left: Branding */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            paddingRight: '40px',
          }}
        >
          <div
            style={{
              fontSize: 140,
              lineHeight: 1,
              letterSpacing: '4px',
              color: '#ffffff',
            }}
          >
            WORST<span style={{ color: '#e8290b' }}>XI</span>
          </div>

          <div
            style={{
              marginTop: '24px',
              color: '#666',
              fontSize: 28,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              fontFamily: 'sans-serif',
              fontWeight: 300,
            }}
          >
            Draft the most chaotic XI
          </div>
          <div
            style={{
              color: '#444',
              fontSize: 28,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              fontFamily: 'sans-serif',
              fontWeight: 300,
            }}
          >
            from Premier League classics
          </div>

          <div
            style={{
              marginTop: '40px',
              background: '#e8290b',
              color: '#ffffff',
              fontSize: 22,
              letterSpacing: '2px',
              padding: '14px 32px',
              display: 'inline-block',
              textTransform: 'uppercase',
            }}
          >
            Play Now — Free
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
