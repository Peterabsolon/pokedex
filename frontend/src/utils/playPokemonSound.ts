const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4000'

export const playPokemonSound = (num: number) => {
  fetch(`${API_URL}/sounds/${num}`)
    .then((res) => res.blob())
    .then((blob) => {
      const audioUrl = URL.createObjectURL(blob)
      const audio = new Audio(audioUrl)
      audio.play()
    })
    .catch((error) => console.error('Error fetching audio:', error))
}
