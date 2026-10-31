interface GoogleMapProps {
  address: string;
  propertyName: string;
}

const GoogleMap = ({ address, propertyName }: GoogleMapProps) => {
  // Encode the address for URL
  const encodedAddress = encodeURIComponent(address);
  const encodedPropertyName = encodeURIComponent(propertyName);
  
  // Google Maps embed URL (no API key required)
  const mapSrc = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
      <iframe
        src={mapSrc}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`Map showing location of ${propertyName}`}
      />
    </div>
  );
};

export default GoogleMap;
