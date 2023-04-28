import { Box } from "@chakra-ui/react";
import TextBlock from "components/textBlock/TextBlock";
import React from "react";

const data = `APK is signed
v1 signature: True
v2 signature: True
v3 signature: False
Found 1 unique certificates
Subject: C=US, ST=California, L=Santa Clara, O=WhatsApp Inc., OU=Engineering, CN=Brian Acton
Signature Algorithm: dsa
Valid From: 2010-06-25 23:07:16+00:00
Valid To: 2044-02-15 23:07:16+00:00
Issuer: C=US, ST=California, L=Santa Clara, O=WhatsApp Inc., OU=Engineering, CN=Brian Acton
Serial Number: 0x4c2536a4
Hash Algorithm: sha1
md5: 556c6019249bbc0cab70495178d3a9d1
sha1: 38a0f7d505fe18fec64fbf343ecaaaf310dbd799
sha256: 3987d043d10aefaf5a8710b3671418fe57e0e19b653c9df82558feb5ffce5d44
sha512: 7373a79e59d229189fbb24fb1ffba40984bde19583c1ad92152cd4d64d7e31673605af36bfd5ef6a556d450fd9c231c4d366c913478e6d322b9e25e3324cd686
PublicKey Algorithm: dsa
Bit Size: 1024
Fingerprint: 551bbe22c35026d1d9b3b91305056ee24ed19bb26970d6408e80d0113101da9f`;

const SignerCertificate = () => {
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <TextBlock data={data} textBlockName="Signer Certificate" />
    </Box>
  );
};

export default SignerCertificate;
