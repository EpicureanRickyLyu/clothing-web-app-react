import './catagorie.style.scss'
const catagorie_container = ({id,title,imageUrl}) => (
        <div className='category-container' key={id}>
          <div className='background-image'style={{backgroundImage :`url(${imageUrl})`}}></div>
            {/* <img className='background-image' src={imageUrl} ></img> */}
            <div className='category-body-container'>
            <h2>{title}</h2>
            <p>shop now</p>
          </div>
        </div>
);
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

export default catagorie_container;