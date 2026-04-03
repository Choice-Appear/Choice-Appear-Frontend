import { useState } from 'react'
import { PostEditor } from '@/features/boardOptions'

export const PostWritePage = () => {
  const [, setContent] = useState('')

  return (
    <PostEditor onChange={setContent} />
  )
}