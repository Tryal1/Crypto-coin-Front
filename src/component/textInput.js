import { useField } from "formik"

const TextInput = ({label, ...props})=>{
    const [field, meta] = useField(props)
    
    return(
        <div>
            <input {...field} type={field.name} placeholder={label} className="imput-text"/>
            {meta.touched && meta.error ? <div>{meta.error}</div>:null}
        </div>
    )
}

export default TextInput