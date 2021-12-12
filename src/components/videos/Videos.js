import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import useVideoList from "../../hooks/useVideoList";
import Video from "../video/Video";
import classes from "./videos.module.css";

const Videos = () => {
	const [page, setPage] = useState(1);
	const { loading, error, videos, hasMore } = useVideoList(page);

	return (
		<div className={classes.videos}>
			{videos.length > 0 && (
				<InfiniteScroll
					dataLength={videos.length}
					hasMore={hasMore}
					loader={<h4>Loading...</h4>}
					next={() => setPage(page + 8)}
				>
					{videos.map((video) =>
						video.noq > 0 ? (
							<Link
								to={`/quiz/${video.youtubeID}`}
								state={video.title}
								key={video.youtubeID}
							>
								<Video
									title={video.title}
									id={video.youtubeID}
									noq={video.noq}
								/>
							</Link>
						) : (
							<Video
								title={video.title}
								id={video.youtubeID}
								noq={video.noq}
								key={video.youtubeID}
							/>
						)
					)}
				</InfiniteScroll>
			)}
			{!loading && videos.length === 0 && (
				<div className="">No data found! </div>
			)}
			{error && <div className="">No data found! </div>}
			{loading && <div className="">Loading...</div>}
		</div>
	);
};

export default Videos;
