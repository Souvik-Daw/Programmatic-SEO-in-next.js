import fs from 'fs';
import path from 'path';
import HomePage from './HomePage';

export const dynamic = 'force-static';

export default function DataProvider() {
  const pages = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), 'data', 'pages.json'), 'utf8')
  );

  return <HomePage pages={pages} />;
}
