function IndList (props) {
    let listContent = props.listContent;
    
     return (
         <div>
             <ul>
                 {listContent.map(( item, index ) => <li onClick={() => alert("Welcome to Aztez!")} key={index}>{item}</li>)}
             </ul>
         </div>
     )
}

export default IndList