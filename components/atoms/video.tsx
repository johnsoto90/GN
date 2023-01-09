import React from 'react'

type Props = {
  src: string
  className?: string
}

const Video: React.FC<Props> = ({ src, className }) => {
  const youtubeId = src.split('/').pop()?.split('=').pop()
  console.log(youtubeId)

  return (
    <div className="w-full h-full aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
      <iframe
        src={`https://www.youtube.com/embed/${youtubeId}`}
        className={`${className}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )
}

Video.defaultProps = {
  className: ''
}

export default Video
