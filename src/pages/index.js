import React, { useEffect, useState } from "react"
import Layout from "../component/Layout"
import BlogPost from "../component/BlogPost"
import { ApiData } from "../utilitis/contentfulApi"

export default function Home() {

  const [skip, setSkip] = useState(0)
  const [limit, setLimit] = useState(3)
  const [contentfulApi, setContentfulApi] = useState([])
  const [loading, setLoading] = useState(true)
  const [show, setShow] = useState(false)

  useEffect(() => {
    async function fetchAPI() {
      let response = await ApiData(skip, limit)
      setContentfulApi(contentfulApi.concat(response.values))
      if (response.length - skip <= limit) {
        setShow(false)
      } else {
        setShow(true)
      }
    }

    fetchAPI().then(function() {
      setLoading(false)
    })
  }, [skip])

  return (
    <Layout>
      <div className={"last-articles-wrapper"}>
        <h1>Last articles </h1>
        <div className={"last-articles-content"}>
          {contentfulApi.map(item => (
            <BlogPost
              title={item.fields.title}
              imgSrc={item.fields.previewImage.fields.file.url + "?w=400&h=260"}
              author={item.fields.author.fields.name}
            />
          ))}
        </div>
        <div className={"flex-center-rw load-more-btn"}>
          {show ? (<button onClick={() => setSkip(skip + 3)}>Load More</button>) : ("")}
        </div>
      </div>
    </Layout>
  )
}
