export const Button = ({
    disabled,
    children,
    onClick,
    varient
}) => {
    return <span onClick={onClick} disabled={disabled} className={` px-32 py-8  text-2xl cursor-pointer rounded-2xl ${disabled ? "bg-red-700":"bg-blue-900" }`}>
       {children}
    </span>
}
    