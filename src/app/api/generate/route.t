import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req: Request) {
  try {
    const { title, aspectRatio } = await req.json();

    const magicHourRes = await axios.post(
      'https://api.magichour.ai/v1/ai-image-generator',
      {
        image_count: 1,
        model: 'z-image-turbo',
        aspect_ratio: aspectRatio === '2:3' ? '9:16' : '16:9',
        resolution: '1024px',
        style: {
          prompt: `Premium editorial food photography, overhead shot, ${title}, fresh ingredients, natural window lighting, rustic textures, photorealistic, 8k, no text, no watermarks.`,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.MAGIC_HOUR_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return NextResponse.json({ success: true, data: magicHourRes.data });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
