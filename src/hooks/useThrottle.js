import { useCallback, useEffect, useRef } from 'react'

function useThrottle(fn, delay, dep = []) {
  const { current } = useRef({ fn, timer: null })
  useEffect(
    function () {
      current.fn = fn
    },
    [current, fn]
  )

  return useCallback(function f(...args) {
    if (!current.timer) {
      current.timer = setTimeout(() => {
        delete current.timer
      }, delay)
      current.fn(...args)
    }
  }, [current, delay])
}

export default useThrottle
