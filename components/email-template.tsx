// app/components/email-template.tsx
import * as React from 'react';

export interface EmailTemplateProps {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
  //budget: string;
}

export function EmailTemplate({
  name,
  email,
  phone,
  projectType,
  message,
  //budget,
}: EmailTemplateProps) {
  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        fontSize: '14px',
        color: '#333',
        lineHeight: '1.5',
      }}
    >
      <h2 style={{ color: '#2c3e50' }}>Nouvelle demande de contact</h2>

      <p>Nouveau message depuis le site Del'com :</p>

      <table
        style={{
          borderCollapse: 'collapse',
          width: '100%',
          marginTop: '15px',
          marginBottom: '15px',
        }}
      >
        <tbody>
          <tr>
            <td style={{ fontWeight: 'bold', padding: '6px', width: '120px' }}>Nom :</td>
            <td style={{ padding: '6px' }}>{name}</td>
          </tr>
          <tr>
            <td style={{ fontWeight: 'bold', padding: '6px' }}>Email :</td>
            <td style={{ padding: '6px' }}>{email}</td>
          </tr>
          <tr>
            <td style={{ fontWeight: 'bold', padding: '6px' }}>Téléphone :</td>
            <td style={{ padding: '6px' }}>{phone}</td>
          </tr>
          <tr>
            <td style={{ fontWeight: 'bold', padding: '6px' }}>Projet :</td>
            <td style={{ padding: '6px' }}>{projectType}</td>
          </tr>
        </tbody>
      </table>

      <h3 style={{ marginTop: '20px', marginBottom: '10px', color: '#2c3e50' }}>
        Message :
      </h3>
      <p
        style={{
          background: '#f8f8f8',
          padding: '12px',
          borderRadius: '6px',
          whiteSpace: 'pre-line',
        }}
      >
        {message}
      </p>
    </div>
  );
}