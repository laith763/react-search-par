import { SuggestionItemProps } from "../../constants/interfaces";

export const SuggestionItem = ({
  suggestion,
  searchValue,
  onClick,
}: SuggestionItemProps) => {
  const highlightMatch = (text: string, search: string) => {
    const index = text?.toLowerCase()?.indexOf(search?.toLowerCase());
    if (index === -1 || !index) return text;

    return (
      <>
        {text?.slice(0, index)}
        <strong className="font-bold">
          {text?.slice(index, index + search?.length)}
        </strong>
        {text?.slice(index + search?.length)}
      </>
    );
  };

  return (
    <div
      className="flex items-center py-3 px-5 cursor-pointer text-[#202124] hover:bg-[#f1f3f4]"
      onMouseDown={() => onClick(suggestion)}
    >
      <div className="flex items-start gap-3 w-full">
        <img
          src={suggestion?.avatar}
          alt={`${suggestion?.name}'s avatar`}
          className="w-10 h-10 rounded-full object-cover flex-shrink-0 border border-[#e0e0e0]"
        />
        <div className="flex flex-col gap-1 flex-1">
          <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
            {highlightMatch(suggestion?.name, searchValue)}
          </span>
        </div>
      </div>
    </div>
  );
};
