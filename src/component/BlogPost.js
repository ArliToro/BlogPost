import React from "react"

export default function BlogPost(props) {
  const {title,author,imgSrc} = props
  return (
    <div className={"blog-container"}>
      <img src={imgSrc} />
      <span>by&nbsp;{author}</span>
      <h4>{title}</h4>
    </div>
  )
}
