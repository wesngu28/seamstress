import { json } from '@sveltejs/kit';
import { readFileSync, writeFileSync } from 'fs';
import { nanoid } from 'nanoid';
import path from 'path';

export async function GET() {
  const file = path.join(process.cwd(), 'english.json');
  const englishWords = JSON.parse(readFileSync(file, 'utf8'));
  const allUsedUp = Object.values(englishWords).every(word => word.used === true)
  if (allUsedUp) return json({path: nanoid()})
  const randValue = findRandom(Math.floor(Math.random() * englishWords.length), englishWords, file)
  return randValue
}

function findRandom(rand, englishWords, path) {
  if(englishWords[rand].used !== true) {
    englishWords[rand].used = true
    writeFileSync(path, JSON.stringify(englishWords))
    return json({path: `${englishWords[rand].word}_gwen`});
  } else {
    findRandom(Math.floor(Math.random() * englishWords.length))
  }
}