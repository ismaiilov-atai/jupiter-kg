'use server'
import { Storage } from '@google-cloud/storage'

export const uploadImage = async (data: FormData) => {
  try {
    const file = data.get('file') as File

    if (!file) throw new Error('File was not provided.');
    if (file.size < 1) throw new Error('File is empty');

    const buffer = await file.arrayBuffer();
    const storage = new Storage({
      projectId: process.env.GOOGLE_PROJECT_ID,
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
      }
    });
    await storage.bucket(process.env.GOOGLE_BUCKET_NAME || '').file(file.name).save(Buffer.from(buffer));

    return { status: 'ok', message: 'Created succsesfully!' }
  } catch (error) {
    return { status: 'failed', message: "Please contact to support team!" }
  }
}