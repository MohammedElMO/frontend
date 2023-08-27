import Search from "../../svgs/Search"
import Button from "./Button"

function SearchButton({
  onSearch,
  isDisabled,
}: {
  isDisabled: boolean
  onSearch: () => void
}) {
  return (
    <Button
      disabled={isDisabled}
      onClick={onSearch}
      className="hover:bg-orange-400 disabled:bg-orange-200 disabled:cursor-not-allowed bg-orange-500 font-brico flex gap-2 items-center text-white px-3 py-2 absolute right-[5px] rounded"
    >
      search
      <Search />
    </Button>
  )
}

export default SearchButton
