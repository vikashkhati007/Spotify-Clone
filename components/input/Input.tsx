const Input = ({label, placeholder, type, name, labelcolor, width}:any) => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-bold">
            {label}
        </label>
        <input name={`${name}`} type={`${type}`} placeholder={`${placeholder}`} className={`border-[1.5px] ${!width? "w-full": width} p-3 border-black border-opacity-40 hover:border-[1.8px] hover:border-opacity-100 focus:border-[1.8px] focus:border-opacity-100 outline-none rounded-md font-medium ${labelcolor}`}></input>
      </div>
    </>
  )
}

export default Input
