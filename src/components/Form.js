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
    malzeme1:Yup
       .string(),
    malzeme2:Yup
       .string(),
    malzeme3:Yup
       .string(),
    malzeme4:Yup
       .string(),
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
    
    const [buttonDisabled, setButtonDisabled]=useState(true)

    const [errors, setErrors]=useState({
        isim:"",
        boyut:"",
        malzeme1:"",
        malzeme2:"",
        malzeme3:"",
        malzeme4:"",
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
                console.log(res);
            })
            .catch(err=>console.log(err.response))
    };

    const orderAlert=()=>{
        alert("Siparişiniz yola çıktı")
    }

    return(
        
        <div class="forming">
            <div class="top">
                <h2>Pizzanı Yarat!</h2>
                <Main/>
           </div>
           <h3>Pizzanı Yarat!</h3>
                <section class="Build"> 
                    <form onSubmit={formSubmit} id='pizza-form'>
                        <div class="isim"> 
                            <label>İsim Soyisim</label>
                            <input type="text" id="name-input" name="isim" value={formInfo.isim} onChange={handleChange} placeholder="İsim Soyisim"></input>
                            {errors.isim !=="" && <div style={{color:"red", fontSize:"20px", fontWeight:"bold", }}>{errors.isim}</div>}
                        </div>
                        <div class="dropdown">
                            <label>Boyutu seç ARTIK:</label>
                            <select onChange={handleChange} value={formInfo.boyut} id="size-dropdown" name="boyut">
                                <option value="small">Küçük</option>
                                <option value="medium">Orta</option>
                                <option value="large">Büyük</option>
                            </select>
                        </div>
                        <div class="checkbox">
                        
                            Malzemeler gelsin!!
                        
                            <div class="inputList">
                                <input type="checkbox" name="malzeme1" value="Mantar" onChange={handleChange} checked={formInfo.malzeme1}></input>{/*boolean değerle dene*/}
                                <label for="mantar">Mantar</label><br/>
                                <input type="checkbox" name="malzeme2" value="Zeytin" onChange={handleChange} checked={formInfo.malzeme2}></input>
                                <label for="zeytin">Zeytin</label><br/>
                                <input type="checkbox" name="malzeme3" value="Rokfor" onChange={handleChange} checked={formInfo.malzeme3}></input>
                                <label for="rokfor">Rokfor</label><br/>
                                <input type="checkbox" name="malzeme4" value="Pastırma" onChange={handleChange} checked={formInfo.malzeme4}></input>
                                <label for="pastırma">Pastırma</label>
                            </div>
                                
                        </div>
                            <div class="secimler">
                                
                                Özel Seçimler
                                <input type="text" id="special-text" name="özel" value={formInfo.özel} onChange={handleChange}></input> 
                                
                            </div>
                            <div class="order">   
                               
                                <button type="submit" id="order-button" onClick={orderAlert}>Siparişlere Ekle ACIKTIK!</button>
                               
                            </div> 

                    </form>
                </section>  
        </div>
    )
}
