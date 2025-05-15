import { Calendar, ChevronDown } from "lucide-react"
import { useRef } from "react"

export default function CustomDatePicker({ value, onChange, name, label, id }) {
  const inputRef = useRef(null)

  const openDatePicker = () => {
    inputRef.current?.showPicker?.() || inputRef.current?.focus()
  }

return (
    <div>
        <label htmlFor={id} className="mb-2 block text-sm font-bold text-[#344054]">
            {label}
        </label>
        <div className="relative">
            {/* Left calendar icon */}
            <img
                src="/icons/calendar-days.svg"
                alt="Calendar Icon"
                className="absolute left-3 top-2.5 h-5 w-5 text-slate-400 cursor-pointer"
                onClick={openDatePicker}
            />

            <input
                type="date"
                ref={inputRef}
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                className="w-full border border-[#D0D5DD] border-x-0 border-t-0 pl-10 pr-10 py-2 text-sm text-gray-700 focus:outline-none
                [&::-webkit-calendar-picker-indicator]:hidden
                [&::-webkit-inner-spin-button]:appearance-none
                appearance-none"
            />

            {/* Right chevron icon */}
            <ChevronDown
                className="absolute right-3 top-2.5 h-5 w-5 text-slate-400 cursor-pointer"
                onClick={openDatePicker}
            />
        </div>
    </div>
)
}
