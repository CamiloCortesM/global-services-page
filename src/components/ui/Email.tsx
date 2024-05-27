import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface Email {
  clientName: string;
  clientEmail: string;
  message?: string;
  chosenService?: string;
  phoneNumber?: string;
  subject?: string;
}

export const Email = ({
  clientName,
  clientEmail,
  chosenService,
  message,
  phoneNumber,
  subject = '',
}: Email) => {
  const getDate = () => {
    const date = new Date();

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear());

    const hour = String(date.getHours()).padStart(2, '0');
    const minute = String(date.getMinutes()).padStart(2, '0');

    const dateFormat = `${day}/${month}/${year}`;
    const hourFormat = `${hour}:${minute}`;

    return `${dateFormat} - ${hourFormat}`;
  };

  return (
    <Html>
      <Head />
      <Preview>¡A new client has contacted!</Preview>
      <Body style={main}>
        <Container>
          <Section style={logo}>
            <Img
              style={image}
              width={620}
              src="https://res.cloudinary.com/danielssf/image/upload/v1713487461/GSM/logo_ceditn.webp"
            />
          </Section>

          <Section style={content}>
            <Row style={{ ...boxInfos, paddingBottom: '0' }}>
              <Column>
                <Heading
                  style={{
                    fontSize: 32,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}
                >
                  {subject}
                </Heading>
                <Heading
                  as="h2"
                  style={{
                    fontSize: 26,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}
                >
                  Application Information
                </Heading>

                <Text style={paragraph}>
                  <b>Date: </b>
                  {getDate()}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Client Name: </b>
                  {clientName}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Client Email: </b>
                  {clientEmail}
                </Text>

                {message && (
                  <Text style={{ ...paragraph, marginTop: -5 }}>
                    <b>Message: </b>
                    {message}
                  </Text>
                )}

                {chosenService && (
                  <Text style={{ ...paragraph, marginTop: -5 }}>
                    <b>Chosen Service: </b>
                    {chosenService}
                  </Text>
                )}

                {phoneNumber && (
                  <Text style={{ ...paragraph, marginTop: -5 }}>
                    <b>Phone Number: </b>
                    {phoneNumber}
                  </Text>
                )}

                <Text style={{ ...paragraph, textAlign: 'center' }}>
                  Summary of the client's request, contact him if you need more
                  information
                </Text>
              </Column>
            </Row>
          </Section>

          <Section style={containerImageFooter}>
            <Img
              style={image}
              width={620}
              src="https://res.cloudinary.com/danielssf/image/upload/v1713487422/GSM/gsm-footer_bkotdo.png"
            />
          </Section>

          <Text
            style={{
              textAlign: 'center',
              fontSize: 12,
              color: 'rgb(0,0,0, 0.7)',
            }}
          >
            © 2024 | Global Service & Maintenance, London, England | www.gsm.com
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default Email;

const main = {
  backgroundColor: '#fff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
  fontSize: 16,
};

const logo = {
  padding: '30px 20px',
};

const content = {
  border: '1px solid rgb(0,0,0, 0.1)',
  borderRadius: '3px',
  overflow: 'hidden',
};

const image = {
  maxWidth: '100%',
};

const boxInfos = {
  padding: '20px',
};

const containerImageFooter = {
  padding: '45px 0 0 0',
};
