const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

const PROJECTS_DIR = path.join(__dirname, '../../frontend/public/ourprojects');
const IMAGE_EXTS = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];

function scanDir(dir, baseDir) {
  const results = [];
  if (!fs.existsSync(dir)) return results;

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...scanDir(fullPath, baseDir));
    } else if (IMAGE_EXTS.includes(path.extname(entry.name).toLowerCase())) {
      const rel = fullPath.replace(baseDir, '').replace(/\\/g, '/');
      const folder = path.dirname(rel).replace(/^\//, '');
      const topFolder = folder.split('/')[0];
      results.push({
        src: `/ourprojects${rel}`,
        caption: path.basename(entry.name, path.extname(entry.name)).replace(/[-_]/g, ' '),
        category: topFolder,
      });
    }
  }
  return results;
}

router.get('/', (req, res) => {
  try {
    const images = scanDir(PROJECTS_DIR, PROJECTS_DIR);
    res.json(images);
  } catch (err) {
    res.status(500).json({ error: 'Failed to scan projects directory' });
  }
});

module.exports = router;
