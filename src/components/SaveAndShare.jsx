import { useState } from 'react';

const SaveAndShare = ({ watchConfig }) => {
  const [isSaving, setIsSaving] = useState(false);

  // Function to simulate the saving of the configuration (e.g., image or URL)
  const saveConfiguration = async () => {
    setIsSaving(true);
    try {
      // Simulate an API call or image generation process (e.g., using a library like html2canvas)
      const configDetails = JSON.stringify(watchConfig); // You can replace this with actual image generation logic.
      const dataUrl = `https://example.com/saved-config?details=${encodeURIComponent(configDetails)}`;

      // Show the generated shareable URL (in real cases, you may save it as an image or to the server)
      alert(`Your configuration has been saved! Shareable URL: ${dataUrl}`);
    } catch (error) {
      alert('An error occurred while saving your configuration.');
    }
    setIsSaving(false);
  };

  // Shareable Links (simulated links for demonstration)
  const shareOnSocialMedia = (platform) => {
    const url = `https://example.com/saved-config?details=${encodeURIComponent(JSON.stringify(watchConfig))}`;
    let shareUrl = '';

    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${url}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case 'whatsapp':
        shareUrl = `https://api.whatsapp.com/send?text=${url}`;
        break;
      default:
        break;
    }

    window.open(shareUrl, '_blank');
  };

  return (
    <div className="save-share-container">
      <button
        className="save-button"
        onClick={saveConfiguration}
        disabled={isSaving}
      >
        {isSaving ? 'Saving...' : 'Save Your Configuration'}
      </button>
      <div className="share-buttons">
        <button
          className="share-button"
          onClick={() => shareOnSocialMedia('twitter')}
        >
          Share on Twitter
        </button>
        <button
          className="share-button"
          onClick={() => shareOnSocialMedia('facebook')}
        >
          Share on Facebook
        </button>
        <button
          className="share-button"
          onClick={() => shareOnSocialMedia('whatsapp')}
        >
          Share on WhatsApp
        </button>
      </div>
    </div>
  );
};

export default SaveAndShare;