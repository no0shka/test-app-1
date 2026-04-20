import React, { useRef ,useState,Fragment, useCallback, createContext,useContext, useEffect, useReducer} from 'react'
import { useNavigate } from 'react-router-dom'
import { UseContext } from '../index';
import myGif from '../assessts/image-.gif';


function editState(state,action){
        if (action === 'SHOW') return true;
        if (action === 'HIDE') return false;
        return state;
    }

export default function AddItems() {
    const [imagePreview, setImagePreview] = useState(myGif);
    const Cancel=useNavigate();
    const Submit =useNavigate();
    const NumberOfEval = useRef(0);
    const Imageref =useRef('');
    const Headerref =useRef('');
    const paragraphref =useRef('');
    const { setInputValue } = useContext(UseContext);
    const [State,dispatch]=useReducer(editState,false)
    const barEffect=useEffect(()=>{
        let timer;
        if(State){
timer =setTimeout(()=>{
    console.log('rendered')
dispatch('HIDE')
} ,5000)
        }
return () => clearTimeout(timer);
    },[State]);

    

function Bar(){
    return(
        <div id='welcome-bar'>
            <p id='cont-bar'>Welcome to our website, I hope you find what you want</p>
            </div>
    )
}
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImagePreview(URL.createObjectURL(file));
        }
    };
    const handlesubmit=(e)=>{

e.preventDefault(); 

const newItem = {
            image: imagePreview, 
            title: Headerref.current.value,
            description: paragraphref.current.value,
            review: NumberOfEval.current.value
        }
        if (setInputValue) {
            setInputValue((prevItems) => [...prevItems, newItem]); 
        }
        dispatch("SHOW");
        setTimeout(() => {
            Submit("/");
        }, 3000);
    }
  return (
        <Fragment>
            {State?<Bar />:null}
            <button onClick={()=>Cancel("/")} className='add_cancel_btn'>Cancel</button>
        <div>
            <form onSubmit={handlesubmit}>
                <div  className='form_btn'>
            <div className='form-content'>

            <div className='left-form-cont'>
            <label>Select an image</label><br />
            <input type='file' required onChange={handleImageChange}/><br />
            <label>Enter a title</label><br />
            <input type='text' ref={Headerref} required /><br />
            </div>

            <div className='form-img'><img src={imagePreview}/></div>
            </div>

            <div className='desc-form'>
            <label>Type a description about the item</label><br />
            <input type='text' ref={paragraphref} required />
            </div>

            <div className='rev_cont'>
            <label>Review</label>
            <input type='range' min="0" max="5" step="1" defaultValue="0" ref={NumberOfEval} />
            </div>
            
            <button className='add_cancel_btn' >Add</button></div>
            
            
            </form>
        </div>
        </Fragment>
    
  )
}
