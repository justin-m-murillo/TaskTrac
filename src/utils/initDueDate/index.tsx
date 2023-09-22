const initDueDate = () => {
  const current = new Date()
    return {
      year:    current.getFullYear(),
      month:   current.getMonth(),
      day:     current.getDate(),
      hours:   current.getHours(),
      minutes: current.getMinutes(),
      isAmPm: true,
      ampm: current.getHours() > 11 ? 'PM' : 'AM'
  }
}
export default initDueDate