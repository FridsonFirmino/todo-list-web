import { MdDelete } from "react-icons/md";

interface TaskProps {
  index: number;
  name: string;
  done: boolean;
  onDelete: (i: number) => void;
  onRead: (i: number) => void;
}

export default function Task({
  index,
  done,
  name,
  onDelete,
  onRead,
}: TaskProps) {
  return (
    <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <input
          type="checkbox"
          id={`task-${index}`}
          checked={done}
          onChange={() => onRead(index)}
          className="w-5 h-5 accent-blue-500 cursor-pointer"
        />
        <span
          className={`text-gray-800 dark:text-gray-200 ${
            done ? "line-through text-gray-500" : ""
          }`}
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          {name}
        </span>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => onDelete(index)}
          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
}
