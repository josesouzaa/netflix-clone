import MuiModal from '@mui/material/Modal'
import { XIcon } from '@heroicons/react/solid'

import { useEffect, useState } from 'react'

import { useRecoilState } from 'recoil'
import { modalState, movieState } from '../../atoms/modalAtom'

import { Element, Genre } from '../../typings'
import ReactPlayer from 'react-player/lazy'

export function Modal() {
  const [showModal, setShowModal] = useRecoilState(modalState)
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState)
  const [trailer, setTrailer] = useState('')
  const [genres, setGenres] = useState<Genre[]>([])
  const [muted, setMuted] = useState<boolean>(false)

  useEffect(() => {
    if (!currentMovie) return

    async function fetchMovie() {
      const data = await fetch(
        `https://api.themoviedb.org/3/${
          currentMovie?.media_type === 'tv' ? 'tv' : 'movie'
        }/${currentMovie?.id}?api_key=${
          process.env.NEXT_PUBLIC_API_KEY
        }&language=en-US&append_to_response=videos`
      )

      const response = await data.json()

      if (response?.videos) {
        const index = response.videos.results.findIndex(
          (e: Element) => e.type === 'Trailer'
        )
        setTrailer(response.videos?.results[index]?.key)
      }
      if (response?.genres) {
        setGenres(response.genres)
      }
    }

    fetchMovie()
  }, [currentMovie])

  function handleClose() {
    setShowModal(false)
  }

  console.log(trailer)

  return (
    <MuiModal open={showModal} onClose={handleClose}>
      <>
        <button
          onClick={handleClose}
          className="modalButton absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#181818] hover:bg-[#181818]"
        >
          <XIcon className="h-6 w-6" />
        </button>

        <div className="relative pt-[56.25%]">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${trailer}`}
            width="100%"
            height="100%"
            style={{ position: 'absolute', top: '0', left: '0' }}
            playing
            muted={muted}
          />
        </div>
      </>
    </MuiModal>
  )
}
