import { getIcons } from "assets";
import { IconsType } from "assets/types";

const EmptyContainer = (): JSX.Element => {
  return (
    <div className="bg-gray-100 border border-solid border-gray-200 rounded-lg mt-3 flex flex-col items-center p-10 h-[58.6vh] justify-center">
      {getIcons(IconsType.back)}
      <div className="text-xs font-semibold text-gray-500 text-center mt-4">
        Select documents from the left panel to have employees review them and
        provide a signature acknowledging review
      </div>
    </div>
  );
};

export default EmptyContainer;
