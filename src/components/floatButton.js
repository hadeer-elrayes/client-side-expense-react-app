import React from 'react';
export const FloatButton = ({onClick})=>
{
    return(
        <div style={{position:'fixed' , bottom:40 , right:40}}>
        <div style={{borderRadius:50 , width:60 , height:60 , backgroundColor: "#3972f5 " , display:'flex'
        , flex:1 , justifyContent : 'center' , alignItems:'center',color:'#fff', boxShadow:'2px 2px 3px #999',cursor:'pointer'}}
        onClick={onClick}
        >
        <i className="fa fa-plus"/>
        </div>
        </div>
    )

}


