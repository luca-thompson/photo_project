export default {
  async queue(batch, env) {
    const changedLetters = new Set();

    for (const message of batch.messages) {
      const key = message.body.object.key;

      if (key.endsWith('.json')) {
        continue;
      }

      changedLetters.add(key.split('/')[0]);
    }

    for (const letter of changedLetters) {
      await regenerateManifest(letter, env);
    }
  }
};

async function regenerateManifest(letter, env) {
  const bucket = env.photoBucket;
  const files = [];

  const listed = await bucket.list({ prefix: letter + '/' });

  for (const object of listed.objects) {
    const filename = object.key.split('/').pop();

    if (filename === 'manifest.json') {
      continue;
    }

    files.push(filename);
  }

  await bucket.put(
    letter + '/manifest.json',
    JSON.stringify(files),
    { httpMetadata: { contentType: 'application/json' } }
  );
}