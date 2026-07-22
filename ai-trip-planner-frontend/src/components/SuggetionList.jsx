import React, { useEffect, useState } from 'react'
import { getGenerateImages } from '../UnsplashServises';

const SuggetionItem = ({item, showImage, category})=>{

const [imgUrl,SetImageUrl]=useState(null)


useEffect(()=>{

const fetchimg  = async ()=>{
 let query = item?.imageKeyword;
 let fallback = undefined; // uses default travel image

 if (category === 'transport') {
   query = `${item?.imageKeyword} vehicle transportation`;
   fallback = "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&auto=format&fit=crop"; // bus image
 } else if (category === 'food') {
   query = `food ${item?.imageKeyword}`;
   fallback = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&auto=format&fit=crop"; // food image
 }

 const url = await getGenerateImages(query, fallback);
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

const SuggetionList = ({ item, title, showImage=false , category}) => {  

   if (!item) {

        return null;   
        
    }
    return (  
      <div className='suggestion-section'>
                  
            <h3>{title}</h3>
            
          <ul style={{listStyleType : showImage? "none":"disc" }}>  
                {item.map((e, index) => ( 
                  
                  showImage?  <SuggetionItem key={index} item={e} showImage={showImage}  category={category} />
                   : <li key={index}>{e}</li>                  
              ))}
        
            </ul>
            
        </div>
        
  )
}

export default SuggetionList