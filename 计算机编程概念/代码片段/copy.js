export function handleCopyLink () {
  const input = document.createElement('input')
  const activityUrl = `download link`
  input.setAttribute('value', activityUrl)
  document.body.appendChild(input)
  input.select()
  if (document.execCommand('copy')) {
    document.execCommand('copy')
    this.$message.success('复制成功！')
  }
  document.body.removeChild(input)
}
