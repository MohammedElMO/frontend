export const getDescription = (url: string) => {
  const desc = url.split("/")[4].split("-")
  const newDesc = [
    ...desc.slice(0, desc.length - 2),
    Number(desc[desc.length - 1]),
  ]
  return newDesc.filter((s) => typeof s === "string").join(" ")
}
