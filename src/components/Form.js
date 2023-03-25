import React, {useState, useEffect} from "react";
import * as Yup from "yup";
import axios from 'axios';
import Main from "./Main";
import "./Form.css";

const formSchema=Yup.object().shape({
    isim:Yup
        .string()
        .required("Zorunda mıyım?")
        .min(2, "2'den aşağısı kurtarmaz"),
    boyut:Yup
        .string(),
    özel:Yup
        .string(),
    Mantar:Yup
       .string(),
    Zeytin:Yup
       .string(),
    Rokfor:Yup
       .string(),
    Pastırma:Yup
       .string(),
});

export default function Form(){
    const [formInfo, setFormInfo]=useState({
        isim:"",
        boyut:"",
        Mantar:"",
        Zeytin:"",
        Rokfor:"",
        Pastırma:"",
        özel:""
    });
    
    const [buttonDisabled, setButtonDisabled]=useState(true)

    const [errors, setErrors]=useState({
        isim:"",
        boyut:"",
        Mantar:"",
        Zeytin:"",
        Rokfor:"",
        Pastırma:"",
        özel:""
    });

    const [veriler, setVeriler]=useState([]);

    useEffect(()=>{
        formSchema.isValid(formInfo).then((valid)=>
        setButtonDisabled(!valid));
    }, [formInfo]);
                                        

    const inputChange=(name,value)=>{
        
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

        setFormInfo({
            ...formInfo, [name]:value
        })
    };
    

    const handleChange=e=>{
        const {name,type,value,checked}=e.target;
        const updatedInfo=type==='checkbox' ? checked:value;
        inputChange(e.target.name,updatedInfo)
        setFormInfo({...formInfo, [name]:updatedInfo});
    }

    const formSubmit=(evt)=>{
        evt.preventDefault();
        console.log('submitted you catched it!!!');
        axios
            .post("https://reqres.in/api/orders", formInfo)
            .then(res=>{
                setVeriler(res.data.data);
                
            })
            .catch(err=>console.log(err.response))
    };

    const orderAlert=()=>{
        alert("Siparişiniz yola çıktı")
    }

    return(
        
        <div className="forming">
            <div className="top">
                <h2>Pizzanı Yarat!</h2>
                <Main/>
            </div>
            <h3>Pizzanı Yarat!</h3>
                <section className="Build"> 
                    <form onSubmit={formSubmit} id='pizza-form'>
                        <div className="isim"> 
                            <label for="isim">İsim Soyisim</label>
                            <input type="text" id="name-input" name="isim" value={formInfo.isim} onChange={handleChange} placeholder="İsim Soyisim"></input>
                            {errors.isim !=="" && <p style={{color:"red", fontSize:"20px", fontWeight:"bold"}}>{errors.isim}</p>}
                        </div>
                        <div className="dropdown">
                            <label>Boyutu seç ARTIK:</label>
                            <select onChange={handleChange} value={formInfo.boyut} id="size-dropdown" name="boyut">
                                <option value="small">Küçük</option>
                                <option value="medium">Orta</option>
                                <option value="large">Büyük</option>
                            </select>
                        </div>
                        <div className="checkbox">
                        
                            Malzemeler gelsin!!
                        
                            <div className="inputList">
                                

                                <label for="mantar"> 
                                <input type="checkbox"  id="mantar" name="Mantar" value="Mantar" onChange={handleChange} checked={formInfo.Mantar}></input>
                                Mantar
                                </label>
                                <label for="zeytin">
                                <input type="checkbox"  id="zeytin" name="Zeytin" value="Zeytin" onChange={handleChange} checked={formInfo.Zeytin}></input>
                                Zeytin
                                </label>
                                <label for="rokfor">
                                <input type="checkbox"  id="rokfor" name="Rokfor" value="Rokfor" onChange={handleChange} checked={formInfo.Rokfor}></input>
                                Rokfor
                                </label>
                                <label for="pastırma">
                                <input type="checkbox" id="pastırma" name="Pastırma" value="Pastırma" onChange={handleChange} checked={formInfo.Pastırma}></input>
                                Pastırma
                                </label>
                            </div>
                                
                        </div>
                            <div className="secimler">
                                
                                Özel Seçimler
                                <input type="text" id="special-text" name="özel" value={formInfo.özel} onChange={handleChange}></input> 
                                
                            </div>
                            <div className="order">   
                            
                                <button type="submit" id="order-button" disabled={buttonDisabled} onClick={orderAlert}>Siparişlere Ekle ACIKTIK!</button>
                            
                            </div> 

                    </form>
                </section>  
        </div>
    )
}
