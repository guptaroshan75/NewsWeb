import React from "react";

const Card = ({ newsData }) => {

    return (
        <div className="container">
            <div className="mt-4 news-container">
                {
                    newsData?.map((details) => {
                        return (
                            <>
                                {
                                    details.urlToImage && (
                                        <div className="card p-2" key={details?.title} >
                                            <img src={details?.urlToImage} className="w-100 h-100" />
                                            <div className="card-body">
                                                <h5 className="card-title">{details?.author}</h5>
                                                <p className="card-text text-justify" style={{
                                                    textAlign: 'justify'
                                                }}>{details?.description}</p>
                                                
                                            </div>
                                            <a href={details?.url} target="_blanks" className="btn btn-primary w-100">Read More</a>
                                        </div>
                                    )
                                }
                            </>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Card;