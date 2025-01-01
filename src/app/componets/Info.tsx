type detailProps ={
    title:string,
    space?:string,
    placeHolder?:string
}

const ids = (input: string):string => {
    return input.replace(/\s+/g, '-');
};

const Details =({title='',space='span-col-2',placeHolder}:detailProps)=>{
  
   let ID = ids(title)

    return (
        <div  key={ID} className={`text-base font-medium ${space}`}>
            <h1 className="mb-6">{title}</h1>
            <label htmlFor={title}>
            <input 
            id={ID}
            type="text" 
            name={title}
            className="rounded-[10px] px-[30px] py-[25px] text-[#9F9F9F] w-full h-[75px] border-[1px] border-[#9F9F9F] "
            placeholder={placeHolder}
            />
            </label>
        </div>
    )
} 
export default Details