
export function validateFile(file: File) {
  const allowed = ['text/html','text/css','text/javascript','application/zip']
  return allowed.includes(file.type) && file.size < 5_000_000
}
