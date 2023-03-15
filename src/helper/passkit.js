function generatePasskit(name, date) {
  const pass = {
    "formatVersion": 1,
    "passTypeIdentifier": "pass.example.com",
    "serialNumber": "123456789",
    "teamIdentifier": "TeamID",
    "organizationName": "Example Inc.",
    "description": "Example Pass",
    "barcode": {
      "altText": name,
      "format": "PKBarcodeFormatQR",
      "message": name,
      "messageEncoding": "iso-8859-1",
      "symbolicRepresentation": {
        "type": "PKBarcodeSymbolicRepresentationTypeQR",
        "version": 1,
        "data": name
      }
    },
    "relevantDate": date
  };

  const passJson = JSON.stringify(pass);
  const passBlob = new Blob([passJson], { type: 'application/vnd.apple.pkpass' });
  const passUrl = URL.createObjectURL(passBlob);

  return passUrl;
}

export default generatePasskit;
