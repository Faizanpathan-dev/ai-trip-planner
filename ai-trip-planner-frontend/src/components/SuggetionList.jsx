import React, { useEffect, useState } from 'react'
import { getGenerateImages } from '../UnsplashServises';

const SuggetionItem = ({item, showImage})=>{

const [imgUrl,SetImageUrl]=useState(null)


useEffect(()=>{

const fetchimg  = async ()=>{
 const url = await getGenerateImages(item?.imageKeyword);

 SetImageUrl(url)

}
fetchimg();

},[item,showImage])


  return(
  <li style={{display: "flex", alignItems:"center",gap:"20px" }}>
     {imgUrl&&<img src={imgUrl} alt={item.imageKeyword} style={{width:"100px",height:"100px" , borderRadius:'8px'}} />}
   <span>{item.text}</span>
  </li>
   
  );

}

const SuggetionList = ({ item, title, showImage=false }) => {  

   if (!item) {

        return null;   
        
    }

    return (  
      <div className='suggestion-section'>
                  
            <h3>{title}</h3>
            
          <ul style={{listStyleType : showImage? "none":"disc" }}>  
                {item.map((e, index) => ( 
                  
                  showImage?  <SuggetionItem key={index} item={e} showImage={showImage}  />
                   : <li key={index}>{e}</li>                  
              ))}
        
            </ul>
            
        </div>
        
  )
}

export default SuggetionList