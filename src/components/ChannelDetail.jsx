import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Box } from "@mui/material"
import { Videos, ChannelCard } from "./"
import { fetchFromAPI } from "../utils/fetchFromAPI"

const ChannelDetail = (props) => {
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])

  const { id } = useParams()

  useEffect(() => {
    fetchFromAPI(`channels?part="snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    )

    fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`).then(
      (data) => setVideos(data?.items)
    )
  }, [id])

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(253,29,29,1) 67%, rgba(252,176,69,1) 100%)",
            zIndex: 10,
            height: "300px",
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
      </Box>

      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: "130px" } }}></Box>
        <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail
