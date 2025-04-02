const ShareButton = ({ event }) => {
    const shareUrl = event.pages?.[0]?.content_urls?.desktop?.page || "";
  
    const handleShare = () => {
      navigator.clipboard.writeText(shareUrl);
      alert("🔗 Link copied to clipboard!");
    };
  
    return (
      <button 
        onClick={handleShare} 
        className="mt-2 bg-green-500 text-white px-4 py-2 rounded-md"
      >
        📤 Share
      </button>
    );
  };
  
  export default ShareButton;
  