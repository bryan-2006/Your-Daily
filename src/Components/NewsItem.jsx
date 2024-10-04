import image from "../assets/skeletonPic.gif" // Import a default image
import React from 'react' // Import React

// Define a functional component called NewsItem
const NewsItem = ({title, description, src, url}) => {
    return (
        // Create a card with Bootstrap classes for styling
        <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: '345px' }}>
            {/* Display an image; use the provided src or a default image */}
            <img src={src?src:image} style={{height: "200px",width:"325px"}} className="card-img-top" alt="..." />
            <div className="card-body">
                {/* Display the title, truncated to 50 characters */}
                <h5 className="card-title">{title.slice(0,50)}</h5>
                {/* Display the description, truncated to 90 characters, or an empty string if not provided */}
                <p className="card-text">{description?description.slice(0,90):""}</p>
                {/* Provide a link to read more */}
                <a href={url} className="btn btn-primary">Read More</a>
            </div>
        </div>
    )
}

// Export the NewsItem component as the default export
export default NewsItem