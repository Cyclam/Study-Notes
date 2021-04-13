export const secondToHMS = (seconds) => {
  // const seconds = Math.round(millisecond / 100)
  const h = Math.floor(seconds / 60 / 60)
  const m = Math.floor(seconds / 60 % 60)
  const s = Math.floor(seconds % 60)
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

export const secondToHMS = (millisecond) => {
  function fixedZero (val) {
    return val * 1 < 10 ? `0${val}` : val
  }
  const hours = 60 * 60 * 1000
  const minutes = 60 * 1000

  const h = Math.floor(millisecond / hours)
  const m = Math.floor((millisecond - h * hours) / minutes)
  const s = Math.floor((millisecond - h * hours - m * minutes) / 1000)
  return `${fixedZero(h)}:${fixedZero(m)}:${fixedZero(s)}`
}