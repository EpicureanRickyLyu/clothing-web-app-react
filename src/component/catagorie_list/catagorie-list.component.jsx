
import CatagorieContainer from '../catagori_item/catagorie_item.component';
const catagorie_list = ({shoplist}) => {
  return(
  <div className='categories-container'>
      {shoplist.map((item) => ( 
        <CatagorieContainer id = {item.id} title = {item.title} imageUrl = {item.imageUrl}/>
      ))}
  </div>
  )
   
}
// class catagorie extends Component
// {
//     render () 
//     {
//       const {shoplist} = this.props
//       return (
//         shoplist.map((item)=>( 
//         <div className='category-container' key={item.id}>
//           <div className='background-image'style={{backgroundImage :`url(${item.imageUrl})`}}></div>
//         {/* <img className='background-image' src={item.imageUrl} ></img> */}
//         <div className='category-body-container'>
//           <h2>{item.title }</h2>
//           <p>shop now</p>
//           </div>
//         </div>
//       )))
//     }
// }

export default catagorie_list;