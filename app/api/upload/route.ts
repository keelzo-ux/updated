
import { NextResponse } from 'next/server'
import { validateFile } from '@/lib/validateFile'

export async function POST(req: Request) {
  const data = await req.formData()
  const file = data.get('file') as File

  if (!file || !validateFile(file)) {
    return NextResponse.json({ error: 'Invalid file' }, { status: 400 })
  }

  return NextResponse.json({ success: true })
}
