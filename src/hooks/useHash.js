import { useHref } from 'react-router-dom'

const useHash = () => {
  const href = useHref()

  // eslint-disable-next-line no-unused-vars
  const [_, hash, subHash] = href.split('/')

  return {
    hash,
    subHash
  }
}

export default useHash
