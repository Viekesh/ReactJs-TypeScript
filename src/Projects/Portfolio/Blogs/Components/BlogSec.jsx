import { exerpt } from '../Utility/exerptMethod';
import "./BlogSec.scss";



const BlogSec = ({blogs}) => {
  return (
    <div>
        <div className='blog_sec'>
            {
                blogs?.map((item) => {
                    <div className="box_1" key={item.id}>
                        <div className="blog_container">
                            <div className="blog_img">
                                <img src={item.imgUrl} alt={item.title} />
                            </div>
                        </div>

                        <div className="text_area">

                            <div className="text_start_from_here">
                                <h6 className='categories'>{item.category}</h6>
                                <span>{item.title}</span>
                                <span className='meta_info'>
                                    <p>{item.author}</p>
                                    {item.timestamp.toDate().toDateString()}
                                </span>
                            </div>

                            <div className="short_description">

                                {/* It can receive the string along with the count like up to how much letter you want to display. */}
                                {exerpt(item.description, 120)}

                            </div>

                            <button className="read_more_btn">read more</button>

                            <div className="update_delete">
                                <button className="update_btn">update</button>
                                <button className="delete_btn">delete</button>
                            </div>

                        </div>
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default BlogSec;



// .