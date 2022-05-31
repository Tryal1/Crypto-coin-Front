import { useField } from "formik"
import { ErrorMsj } from "./styled"

const TextInput = ({label, ...props})=>{
    const [field, meta] = useField(props)
    return(
        <div>
            <input {...field} type={field.name} placeholder={label} className={props.className ? props.className : "imput-text"}/>
            {meta.touched && meta.error ? <ErrorMsj>{meta.error}</ErrorMsj>:null}
        </div>
    )
}

export default TextInput