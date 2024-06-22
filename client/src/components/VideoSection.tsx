function VideoSection() {
  return (
    <div className="overflow-hidden flex justify-center w-full">
      <video autoPlay muted loop className="w-full h-auto object-cover">
        <source src="Designer.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoSection;
