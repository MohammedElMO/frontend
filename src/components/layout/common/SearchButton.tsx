import Button from "./Button"

function SearchButton({
  onSearch,
  isDisabled,
  children,
}: {
  isDisabled: boolean
  onSearch: () => void
  children: React.ReactNode
}) {
  return (
    <Button
      disabled={isDisabled}
      onClick={onSearch}
    >
      {children}
    </Button>
  )
}

export default SearchButton
