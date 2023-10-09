// VideoPlayer.tsx
import React, { useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface VideoPlayerProps {
	src: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => {
	const videoRef = useRef<HTMLVideoElement | null>(null);
	const [isInView, setIsInView] = useState<boolean>(false);

	// Intersection Observer
	const { ref } = useInView({
		triggerOnce: true,
		threshold: 0.5, // Adjust the threshold as needed
		onChange: (inView) => {
			setIsInView(inView); // Update the isInView state
		},
	});

	// Play or pause the video based on isInView
	if (isInView) {
		videoRef.current?.play();
	} else {
		videoRef.current?.pause();
	}

	return (
		<div ref={ref}>
			<video
				ref={videoRef}
				src={src}
				controls
				width={'100%'}
				height={'100%'}
			/>
		</div>
	);
};

export default VideoPlayer;
