// "use client";

// import React from "react";
// import cn from "@/lib/utils/cn";

// interface SearchInputProps {
//   icon?: React.ReactNode;
//   className?: string;
//   inputClassName?: string;
//   placeHolder?: string;
//   onSubmit?: (value: string) => void;
//   value: string;
// }

// const SearchInput: React.FC<SearchInputProps> = ({
//   icon,
//   className,
//   inputClassName,
//   placeHolder = "Search",
//   onSubmit,
//   value,
//   ...props
// }) => {
//   return (
//     <div
//       className={cn(
//         "flex items-center gap-2 border border-gray-500 px-3 py-2 shadow-sm bg-white",
//         className
//       )}
//     >
//       {icon && <span className="text-gray-300">{icon}</span>}
//       <input
//         type="text"
//         value={value}
//         placeholder={placeHolder}
//         className={cn(
//           "flex-1 outline-none text-sm placeholder-gray-400 bg-transparent",
//           inputClassName
//         )}
//         {...props}
//       />
//     </div>
//   );
// };

// export default SearchInput;
"use client";

import React from "react";
import cn from "@/lib/utils/cn";

interface SearchInputProps {
  icon?: React.ReactNode;
  className?: string;
  inputClassName?: string;
  placeHolder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  icon,
  className,
  inputClassName,
  placeHolder = "Search",
  onChange,
  value,
  ...props
}) => {
  return (
    <div
      className={cn(
        "flex items-center gap-2 border border-gray-200 px-3 py-2 shadow-sm bg-white",
        className
      )}
    >
      {icon && <span className="text-gray-300">{icon}</span>}
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeHolder}
        className={cn(
          "flex-1 outline-none text-sm placeholder-gray-400 bg-transparent",
          inputClassName
        )}
        {...props}
      />
    </div>
  );
};

export default SearchInput;
