import React, {useState, useEffect} from "react";
import * as Yup from "yup";
import axios from 'axios';
import "../Form.css"

const formSchema=Yup.object().shape({
    isim:Yup
    .string()
    .required("Zorunda mıyım?")
    .min(2, "2'den aşağısı kurtarmaz"),
    boyut:Yup
    .string(),
    özel:Yup
    .string(),
    malzeme1:Yup
    .boolean(),
    malzeme2:Yup
    .boolean(),
    malzeme3:Yup
    .boolean(),
    malzeme4:Yup
    .boolean(),
    pizzas:Yup
    .string()
});

export default function Form(){
    const [formInfo, setFormInfo]=useState({
        isim:"",
        boyut:"",
        malzeme1:"",
        malzeme2:"",
        malzeme3:"",
        malzeme4:"",
        özel:""
    });
    
    const [buttonDisabled, setButtonDisabled]=useState(false)

    const [errors, setErrors]=useState({
        isim:"",
    });

    const [veriler, setVeriler]=useState([])

    const formSubmit=e=>{
        e.preventDefault();
        console.log("submitted");
        axios
	        .post('https://reqres.in/api/order', {
		// Data to be sent to the server
		    formInfo
	        })
	        .then(response => {
                setVeriler([...veriler, response.data.data])
		    console.log("success", response);
	    })
	    .catch(error=> {
		//console.log(error.response);
	});
    }
    

    useEffect(()=>{
        formSchema.isValid(formInfo).then((valid)=>
        setButtonDisabled(!valid));
    }, [formInfo]);

    const checkFormErrors=(name, value)=>{
        Yup
        .reach(formSchema, name)
        .validate(value)
        .then(()=>{
            setErrors({
                ...errors, [name]: ""
            });
        })
        .catch(err=>{
            setErrors({
                ...errors, [name]: err.errors[0]
            })
        })

    };

    const handleChange=e=>{
        let definedValue=
        e.target.type==="checkbox"?e.target.checked:e.target.value;
        //console.log("değer testi", e.target.value)
        //let selection=e.target.name==="boyut"?e.target.selected:e.target.value;
         checkFormErrors(e.target.name, definedValue )
        setFormInfo({
            ...formInfo,
            [e.target.name]:e.target.value,
            //[e.target.selected]:selection,
        })
        //console.log(formInfo)
    }

    return(
        <div class="forming">
           
            <form onSubmit={formSubmit} id='pizza-form'>
                <div class="isim"> 
                    <label>İsim Soyisim</label>
                    <input type="text" id="name-input" name="isim" value={formInfo.isim} onChange={handleChange}></input>
                    {errors.isim !=="" &&  <div style={{color:"red", fontSize:"15px"}}>{errors.isim}</div>}
                </div>
                <div class="dropdown">
                <p>
                Boyutu seç ARTIK
                    <select onChange={handleChange} id="size-dropdown" name="pizzas">
                        <option name="boyut" value="small" selected={formInfo.boyut}>küçük</option>
                        <option name="boyut" value="medium" selected={formInfo.boyut}>orta</option>
                        <option name="boyut" value="large" selected={formInfo.boyut}>büyük</option>
                    </select> 
                </p>
                </div>
                <div class="checkbox">
                    <p>
                 Malzemeler gelsin!!
                    <br/>
                <div class="inputList">
                   <input type="checkbox" name="malzeme1" value="Mantar" onChange={handleChange} checked={formInfo.malzeme1}></input>
                   <label for="mantar">Mantar</label><br/>
                   <input type="checkbox" name="malzeme2" value="Zeytin" onChange={handleChange} checked={formInfo.malzeme2}></input>
                   <label for="zeytin">Zeytin</label><br/>
                   <input type="checkbox" name="malzeme3" value="Rokfor" onChange={handleChange} checked={formInfo.malzeme3}></input>
                   <label for="rokfor">Rokfor</label><br/>
                   <input type="checkbox" name="malzeme4" value="Pastırma" onChange={handleChange} checked={formInfo.malzeme4}></input>
                   <label for="pastırma">Pastırma</label>
                   </div>
                   </p>
                </div>
                <div class="secimler">
                    <p>
                        Özel Seçimler
                        <input type="text" id="special-text" name="özel" value={formInfo.özel} onChange={handleChange}></input> 
                    </p>
                </div>
                <div class="order">   
                    <p>
                        <button type="submit" id="order-button" >Siparişlere Ekle</button>
                    </p>
                </div> 
            </form>
        </div>
    )
}
